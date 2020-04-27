import { LitElement, html, css } from 'lit-element';
import './covid-app-nav.js';
import './covid-stat-box.js';
import "mil-pulse-spinner";
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/iron-icons/iron-icons.js';
import countriesCode from '../utils/countries.js';

export class CovidAppBody extends LitElement {
  static get properties() {
    return {
      countries: { type: Array },
      filter: { type: String },
      sorter: { type: String },
      loaded: { type: Number },
      loading: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.countries = [];
    this.filter = '';
    this.sorter = '';
    this.loaded = 2;
    this.loading = true;
  }

  connectedCallback() {
    super.connectedCallback();
    this.getStatistics();
  }

  updated() {
    const sentinel = this.shadowRoot.querySelector('#sentinel');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          this.loaded += 10;
        }
      });
    });

    if (sentinel) observer.observe(sentinel);
  }

  static get styles() {
    return css`
      mil-pulse-spinner {
        --height: 100px;
        --width: 100px;
        --color1: var(--app-primary-color);
        --color2: gray;
      }
      
      .main-content {
        display: flex;
        flex-flow: row wrap;
      }

      div[main-title] {
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
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

  updateFilter({ detail: { filterValue } }) {
    this.filter = filterValue;
  }

  updateSorter({ detail }) {
    this.sorter = detail.sorterValue;
  }

  sortCountries(countries) {
    switch (this.sorter) {
      case 'Cases': {
        countries.sort(((a, b) => ((a.cases.total > b.cases.total) ? -1 : ((a.cases.total < b.cases.total) ? 1 : 0))));
        break;
      }
      case 'Recovered': {
        countries.sort(((a, b) => ((a.cases.recovered > b.cases.recovered) ? -1 : ((a.cases.recovered < b.cases.recovered) ? 1 : 0))));
        break;
      }
      case 'Deaths': {
        countries.sort(((a, b) => ((a.deaths.total > b.deaths.total) ? -1 : ((a.deaths.total < b.deaths.total) ? 1 : 0))));
        break;
      }
      default:
        break;
    }
  }

  render() {
    let countries = this.countries.filter(({ country }) => country.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1);
    this.sortCountries(countries);
    countries = !countries ? this.countries : countries;
    countries = countries.slice(0, this.loaded);

    return html`
      <covid-app-nav @updateSorter=${this.updateSorter} @keyboardUp=${this.updateFilter}></covid-app-nav>

      ${this.loading? html`<mil-pulse-spinner id="myMilPulseSpinner"></mil-pulse-spinner>`:''}

      <div class="main-content">
        ${countries.map((country, index) => {
    const { code: countryCode } = countriesCode.find(({ name }) => name.toLowerCase().indexOf(country.country.toLowerCase()) !== -1);

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
  })}
      </div>
    `;
  }
}
