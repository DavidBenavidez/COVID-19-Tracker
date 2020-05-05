import '@advanced-rest-client/paper-autocomplete/paper-autocomplete.js';
import './covid-app-nav.js';
import './covid-stat-box.js';
import './covid-stat-modal.js';
import { LitElement, html } from 'lit-element';
import 'mil-pulse-spinner';
import 'nega-autocomplete/nega-autocomplete.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import './progress-bar.js';
import bodyCss from '../stylesheets/covid-app-body-style.js';
import { numberWithCommas } from '../utils/utils.js';

export class CovidAppBody extends LitElement {
  static get properties() {
    return {
      countries: { type: Array },
      countryNames: { type: Array },
      filter: { type: String },
      loaded: { type: Number },
      isLoading: { type: Boolean },
      sorter: { type: String },
    };
  }

  constructor() {
    super();
    this.countries = [];
    this.countryNames = [];
    this.filter = '';
    this.sorter = '';
    this.loaded = 1;
    this.isLoading = true;
  }

  connectedCallback() {
    super.connectedCallback();
    this.getStatistics();
    this.getCountryNames();
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

    const ac = this.shadowRoot.getElementById('country-suggestions');
    ac.target = this.shadowRoot.getElementById('search-country-input');
    ac.source = this.countryNames;
  }

  static get styles() {
    return bodyCss;
  }

  render() {
    // filter countries to render
    let countries = this.countries.filter(({ country }) => {
      const searchFilter = (country.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1);
      if (searchFilter && country !== 'All') {
        return true;
      }
      return false;
    });

    this.sortCountries(countries);
    countries = !countries ? this.countries : countries;
    countries = countries.slice(0, this.loaded);

    if (this.isLoading) {
      return html`<mil-pulse-spinner id="myMilPulseSpinner"></mil-pulse-spinner>`;
    }

    return html`
      ${this._renderAppDrawer()}
      ${this._renderFilterModal()}
      ${this._renderStatisticsModal()}
      <app-header-layout has-scrolling-region fullbleed>
        <app-header class="nav-container" slot="header" fixed effects="waterfall">
          <covid-app-nav 
            @showStatisticsModal=${this.openStatisticsModal}
            @toggleDrawer=${this.toggleDrawer}
            @updateSorter=${this.updateSorter}
            @keyboardUp=${this.updateFilter}
          >
          </covid-app-nav>
        </app-header>
        <div id="main-content">
          ${this._mapCountries(countries)}
        </div>
      </app-header-layout>
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

  _renderFilterModal() {
    return html`
      <covid-stat-modal id="filter-modal">
        <div slot="modal-header" class="filter-modal-header">
          <h2> Filter Countries </h2>
        </div>
        <div slot="modal-body" class="filter-modal-body">
          <paper-input id="search-country-input" always-float-label label="Country Name" name="country"></paper-input>\
          <paper-autocomplete id="country-suggestions"></paper-autocomplete>
          <paper-dropdown-menu id="sort-country-input" label="Sort By">
            <paper-listbox slot="dropdown-content" class="dropdown-content">
              <paper-item value="Default">Default</paper-item>
              <paper-item value="Cases">Cases</paper-item>
              <paper-item value="Recovered">Recovered</paper-item>
              <paper-item value="Deaths">Deaths</paper-item>
            </paper-listbox>
          </paper-dropdown-menu>
        </div>
        <div slot="modal-footer" class="filter-modal-footer">
          <paper-button @click=${this.applyFilter} class="filter-modal-footer_button"> Apply </paper-button>
        </div>
      </covid-stat-modal>
    `;
  }

  _renderStatisticsModal() {
    const worldStatistics = this.countries.find(({ country }) => country === 'All');

    return html`
      <covid-stat-modal id="statistics-modal">
        <div slot="modal-header" class="statistics-modal-header">
          <h2> World Statistics </h2>
        </div>
        <div slot="modal-body" class="statistics-modal-body">
          <span class="world-stat_value"> ${numberWithCommas(worldStatistics.cases.total)} </span>
          <span class="world-stat_label"> Total Cases </span> <br>
          <span class="world-stat_value"> ${numberWithCommas(worldStatistics.cases.active)} </span>
          <span class="world-stat_label"> Total Active Cases </span> <br>
          <span class="world-stat_value"> ${numberWithCommas(worldStatistics.cases.new)} </span>
          <span class="world-stat_label"> Total New Cases </span> <br>
          <span class="world-stat_value"> ${numberWithCommas(worldStatistics.cases.critical)} </span>
          <span class="world-stat_label"> Total Critical </span> <br>
          <span class="world-stat_value"> ${numberWithCommas(worldStatistics.deaths.total)} </span>
          <span class="world-stat_label"> Total Deaths </span> <br>
          <span class="world-stat_value"> ${numberWithCommas(worldStatistics.deaths.new)} </span>
          <span class="world-stat_label"> Total New Deaths </span> <br>
          <span class="world-stat_value"> ${numberWithCommas(worldStatistics.cases.recovered)} </span>
          <span class="world-stat_label"> Total Recovered </span> <br>
          
          <span class="world-stat_date"> Data as of ${worldStatistics.time} </span>
        </div>
        <div slot="modal-footer" class="statistics-modal-footer"></div>
      </covid-stat-modal>
    `;
  }

  _mapCountries(countries) {
    return html`${countries.map((country, index) => {
      if (index === (this.loaded - 1)) return html`<div id="sentinel"></div>`;
      if (country.country !== 'All') {
        return html`
        <covid-stat-box
          .country=${country}
        ><covid-stat-box>`;
      }
    })}`;
  }

  applyFilter() {
    const filterValue = this.shadowRoot.querySelector('paper-input[name="country"]').value;
    const sorterValue = this.shadowRoot.getElementById('sort-country-input').value;

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

  openStatisticsModal() {
    this.shadowRoot.getElementById('statistics-modal').style.display = 'block';
  }

  toggleDrawer() {
    this.shadowRoot.querySelector('app-drawer').toggle();
  }

  getStatistics() {
    console.log('Fetch COVID-19 Statistics');
  }

  getCountryNames() {
    console.log('Fetch country names');
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
