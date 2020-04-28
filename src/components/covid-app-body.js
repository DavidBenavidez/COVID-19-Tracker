import { LitElement, html, css } from 'lit-element';
import './covid-app-nav.js';
import './covid-stat-box.js';
import 'mil-pulse-spinner';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/iron-icons/iron-icons.js';
import countriesCode from '../utils/countries.js';

export class CovidAppBody extends LitElement {
  static get properties() {
    return {
      countries: { type: Array },
      filter: { type: String },
      loaded: { type: Number },
      isLoading: { type: Boolean },
      sorter: { type: String },
    };
  }

  constructor() {
    super();
    this.countries = [];
    this.filter = '';
    this.sorter = '';
    this.loaded = 2;
    this.isLoading = true;
  }

  connectedCallback() {
    super.connectedCallback();
    this.getStatistics();
  }

  updated() {
    const sentinel = this.shadowRoot.getElementById('sentinel');

    if (sentinel) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            this.loaded += 10;
          }
        });
      });

      observer.observe(sentinel);
    }
  }

  static get styles() {
    return css`
      mil-pulse-spinner {
        --height: 100px;
        --width: 100px;
        --color1: var(--app-primary-color);
        --color2: gray;
      }
      
      #main-content {
        display: flex;
        flex-flow: row wrap;
      }

      #sentinel {
        width: 1px;
        height: 1px;
      }      

      @media only screen and (max-width: 600px) { .main-content { flex-flow: column wrap; } }
      @media only screen and (min-width: 600px) { .main-content { flex-flow: column wrap; } }
      @media only screen and (min-width: 768px) { .main-content { flex-flow: column wrap; } }
      @media only screen and (min-width: 992px) { .main-content { flex-flow: row wrap; } }
      @media only screen and (min-width: 1200px) { .main-content { flex-flow: row wrap; } }
    `;
  }

  render() {
    if (this.isLoading) return html`<mil-pulse-spinner id="myMilPulseSpinner"></mil-pulse-spinner>`;

    let countries = this.countries.filter(({ country }) => (country.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1));

    this.sortCountries(countries);
    countries = !countries ? this.countries : countries;
    countries = countries.slice(0, this.loaded);

    return html`
      <covid-app-nav @updateSorter=${this.updateSorter} @keyboardUp=${this.updateFilter}></covid-app-nav>

      <div id="main-content">
        ${this._mapCountries(countries)}
      </div>
    `;
  }

  _mapCountries(countries) {
    return html`${countries.map((country, index) => {
      const { code: countryCode } = countriesCode.find(({ name }) => (name.toLowerCase().indexOf(country.country.toLowerCase()) !== -1));

      if (index === (this.loaded - 1)) return html`<div id="sentinel"></div>`;

      return html`
        <covid-stat-box
          .countryCode=${countryCode.toLowerCase()}
          .country=${country.country.toUpperCase()}
          .cases=${country.cases.total}
          .newCases=${country.cases.new}
          .deaths=${country.deaths.total}
          .recovered=${country.cases.recovered}
        ><covid-stat-box>`;
    })}`;
  }

  getStatistics() {
    console.log('Fetch COVID-19 Statistics');
  }

  updateFilter({ detail: { filterValue } }) {
    this.filter = filterValue;
  }

  updateSorter({ detail }) {
    this.sorter = detail.sorterValue;
  }

  sortCountries(countries) {
    countries.sort((a, b) => {
      if (this.sorter === 'Cases') return ((a.cases.total > b.cases.total) ? -1 : 1);
      if (this.sorter === 'Recovered') return ((a.cases.recovered > b.cases.recovered) ? -1 : 1);
      if (this.sorter === 'Deaths') return ((a.deaths.total > b.deaths.total) ? -1 : 1);
    });
  }
}
