import './covid-app-nav.js';
import './covid-stat-box.js';
import './covid-stat-modal.js';
import { LitElement, html } from 'lit-element';
import 'mil-pulse-spinner';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import bodyCss from '../stylesheets/covid-app-body-style.js';

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
    this.loaded = 1;
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
            this.loaded += 12;
          }
        });
      });

      observer.observe(sentinel);
    }
  }

  static get styles() {
    return bodyCss;
  }

  render() {
    if (this.isLoading) {
      return html`<mil-pulse-spinner id="myMilPulseSpinner"></mil-pulse-spinner>`;
    }

    let countries = this.countries.filter(({ country }) => (country.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1));

    this.sortCountries(countries);
    countries = !countries ? this.countries : countries;
    countries = countries.slice(0, this.loaded);

    return html`
      ${this._renderAppDrawer()}
      <app-header-layout has-scrolling-region fullbleed>
        <app-header class="nav-container" slot="header" fixed effects="waterfall">
          <covid-app-nav @toggleDrawer=${this.toggleDrawer} @updateSorter=${this.updateSorter} @keyboardUp=${this.updateFilter}></covid-app-nav>
        </app-header>
        <div id="main-content">
          ${(countries.length > 0) ? this._mapCountries(countries) : html`<h3> No countries found </h3>`}
        </div>
      </app-header-layout>
      ${this._renderFilterModal()}
    `;
  }

  _renderAppDrawer() {
    return html`
      <app-drawer>
        <app-toolbar>COVID-19 Tracker</app-toolbar>
        <paper-button @click=${this.openFilterModal}> Filter Countries </paper-button>
      </app-drawer>
    `;
  }

  _mapCountries(countries) {
    return html`${countries.map((country, index) => {
      if (index === (this.loaded - 1)) return html`<div id="sentinel"></div>`;

      return html`
        <covid-stat-box
          .country=${country}
        ><covid-stat-box>`;
    })}`;
  }

  _renderFilterModal() {
    return html`
      <covid-stat-modal id="filter-modal">
        <div slot="modal-header" class="filter-modal-header">
          <h2> Filter Countries </h2>
        </div>
        <div slot="modal-body" class="filter-modal-body">
          <paper-input class="search-country-input" always-float-label label="Country Name" name="country"></paper-input>\
          <paper-dropdown-menu class="sort-country-input" label="Sort By" id="sort-country-dropdown">
            <paper-listbox slot="dropdown-content">
              <paper-item value="Default">Default</paper-item>
              <paper-item value="Cases">Cases</paper-item>
              <paper-item value="Recovered">Recovered</paper-item>
              <paper-item value="Deaths">Deaths</paper-item>
            </paper-listbox>
          </paper-dropdown-menu>
        </div>
        <div slot="modal-footer" class="filter-modal-footer">
          <paper-button @click=${this.applyFilter}> Apply </paper-button>
        </div>
      </covid-stat-modal>
    `;
  }

  applyFilter() {
    const filterValue = this.shadowRoot.querySelector('paper-input[name="country"]').value;
    const sorterValue = this.shadowRoot.getElementById('sort-country-dropdown').value;

    this.updateFilter({ detail: { filterValue } });
    this.updateSorter({ detail: { sorterValue } });

    this.closeFilterModal();
  }

  closeFilterModal() {
    this.shadowRoot.getElementById('filter-modal').style.display = 'none';
  }

  openFilterModal() {
    this.toggleDrawer();
    this.shadowRoot.getElementById('filter-modal').style.display = 'block';
  }

  toggleDrawer() {
    this.shadowRoot.querySelector('app-drawer').toggle();
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
      return a;
    });
  }
}
