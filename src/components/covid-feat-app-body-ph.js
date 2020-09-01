import '@advanced-rest-client/paper-autocomplete/paper-autocomplete.js';
import { LitElement, html } from 'lit-element';
import { router } from 'lit-element-router';
import 'mil-pulse-spinner';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/paper-button/paper-button.js';
import { numberWithCommas } from '../utils/utils.js';

import './covid-feat-app-nav-ph.js';
import './covid-feat-covid-news-ph-connected.js';
import './covid-feat-route-content-ph.js';
import './covid-feat-route-link-ph.js';
import './covid-feat-stat-box-ph.js';
import './covid-feat-stat-modal-ph.js';

import bodyCss from '../stylesheets/app-body-style.js';

export class AppBody extends router(LitElement) {
  static get properties() {
    return {
      countries: { type: Array },
      countryNames: { type: Array },
      filter: { type: String },
      loaded: { type: Number },
      isFilterOpen: { type: Boolean },
      isLoading: { type: Boolean },
      isStatisticsOpen: { type: Boolean },
      sorter: { type: String },
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
    };
  }

  static get routes() {
    return [{
      name: 'home',
      pattern: '',
      data: { title: 'Home' },
    }, {
      name: 'news',
      pattern: 'news',
    }, {
      name: '404',
      pattern: '*',
    }];
  }

  constructor() {
    super();
    this.countries = [];
    this.countryNames = [];
    this.filter = '';
    this.sorter = '';
    this.loaded = 21;
    this.isFilterOpen = false;
    this.isLoading = true;
    this.isStatisticsOpen = false;

    this.route = '';
    this.params = {};
    this.query = {};
  }

  router(route, params, query) {
    this.route = route;
    this.params = params;
    this.query = query;
  }

  connectedCallback() {
    super.connectedCallback();
    this.getStatistics();
    this.getCountryNames();
  }

  updated(changedProps) {
    if (super.updated) {
      super.updated(changedProps);
    }

    const sentinel = this.shadowRoot.getElementById('sentinel');

    if (sentinel) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            setTimeout(() => {
              this.loaded += 12;
            }, 500);
          }
        });
      });

      observer.observe(sentinel);
    }

    const ac = this.shadowRoot.getElementById('country-suggestions');

    if (ac) {
      ac.target = this.shadowRoot.getElementById('search-country-input');
      ac.source = this.countryNames;
    }
  }

  static get styles() {
    return bodyCss;
  }

  render() {
    // filter countries to render
    let countries = this.countries.filter(({ country }) => {
      const searchFilter = (country.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1);
      return (searchFilter && country !== 'All');
    });

    countries = this.sortCountries(countries);

    if (countries) {
      countries = !countries ? this.countries : countries;
      countries = countries.slice(0, this.loaded);
    }

    if (this.isLoading) {
      return html`<mil-pulse-spinner id="app-body-loader"></mil-pulse-spinner>`;
    }

    return html`
      ${this._renderAppDrawer()}
      ${this.isFilterOpen ? this._renderFilterModal() : null}
      ${this.isStatisticsOpen ? this._renderStatisticsModal() : null}

      <ing-mgm campaignid="200" pageid="101" apikey="5722269648704132b146cdbdfda58c6e"></ing-mgm>
      <app-header-layout has-scrolling-region fullbleed>
        <app-header class="nav-container" slot="header" fixed effects="waterfall">
          <app-nav
            @show-stat-modal=${this.openStatisticsModal}
            @toggle-drawer=${this.toggleDrawer}
            @update-sorter=${this.updateSorter}
            @update-filter=${this.updateFilter}
            .route = ${this.route}
          >
            <route-link slot="route-link" href="${this.route === 'home' ? '/news' : '/'}" @toggle-link=${this.toggleLink}>
              <img src="${this.route === 'home' ? 'https://i.ibb.co/DMBK0kn/earth-icon-1-min.png' : 'https://i.ibb.co/KLn5jBS/grid.png'}" alt="Switch" id="route-link">
            </route-link>
          </app-nav>
        </app-header>
        <route-content active-route=${this.route}>
          <div route="home" id="home-content"> ${this._mapCountries(countries)} </div>
          <covid-news-connected .countryNames=${this.countryNames} route="news" id="news-content"></covid-news-connected>
        </route-content>
      </app-header-layout>
    `;
  }

  _renderAppDrawer() {
    return html`
      <app-drawer>
        <app-toolbar>COVID-19 Tracker</app-toolbar>
        <paper-button @click=${this.openFilterModal}> Filter Countries </paper-button>
        <paper-button @click=${this.openStatisticsModalFromDrawer}> Show World Statistics </paper-button>
      </app-drawer>
    `;
  }

  _renderFilterModal() {
    return html`
      <stat-modal ?shown=${this.isFilterOpen} @close=${this.closeFilterModal}>
        <div slot="modal-header" class="filter-modal-header">
          <h2> Filter Countries </h2>
        </div>
        <div slot="modal-body" class="filter-modal-body">
          <paper-input id="search-country-input" always-float-label label="Country Name" name="country"></paper-input>\
          <paper-autocomplete id="country-suggestions"></paper-autocomplete>
          <label for="sort-country-input">
            <select id="sort-country-input">
              <option value="" disabled selected hidden>Sort Countries By</option>
              <option value="Default">Default</option>
              <option value="Cases">Cases</option>
              <option value="Recovered">Recovered</option>
              <option value="Deaths">Deaths</option>
            </select>
          </label>
        </div>
        <div slot="modal-footer" class="filter-modal-footer">
          <paper-button @click=${this.applyFilter} class="filter-modal-footer_button"> Apply </paper-button>
        </div>
      </stat-modal>
    `;
  }

  _renderStatisticsModal() {
    const worldStatistics = this.countries.find(({ country }) => country === 'All');

    if (!worldStatistics) {
      return;
    }

    return html`
      <stat-modal ?shown=${this.isStatisticsOpen} @close=${this.closeStatisticsModal}>
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
      </stat-modal>
    `;
  }

  _mapCountries(countries) {
    return html`${countries.map((country, index) => {
      if (index === (this.loaded - 1)) {
        return html`<div id="sentinel">
          <mil-pulse-spinner id="lazy-loading-loader"></mil-pulse-spinner>
        </div>`;
      }
      return html`
        <stat-box
          .country=${country}
        ><stat-box>
      `;
    })}`;
  }

  toggleLink() {
    const link = this.shadowRoot.querySelector('route-link');
    const icon = this.shadowRoot.getElementById('route-link');

    if (link.href === '/news') {
      link.href = '/';
      icon.src = 'https://i.ibb.co/KLn5jBS/grid.png';
    } else {
      link.href = '/news';
      icon.src = 'https://i.ibb.co/DMBK0kn/earth-icon-1-min.png';
    }
  }

  applyFilter() {
    const filterValue = this.shadowRoot.querySelector('paper-input[name="country"]').value;
    const sorterValue = this.shadowRoot.getElementById('sort-country-input').value;

    this.filter = filterValue;
    this.sorter = sorterValue;

    this.closeFilterModal();
  }

  closeFilterModal() {
    this.isFilterOpen = false;
  }

  openFilterModal() {
    this.toggleDrawer();
    this.isFilterOpen = true;
  }

  openStatisticsModal() {
    this.isStatisticsOpen = true;
  }

  openStatisticsModalFromDrawer() {
    this.toggleDrawer();
    this.isStatisticsOpen = true;
  }

  closeStatisticsModal() {
    this.isStatisticsOpen = false;
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
    return [...countries].sort((a, b) => {
      if (this.sorter === 'Cases') return ((a.cases.total > b.cases.total) ? -1 : 1);
      if (this.sorter === 'Recovered') return ((a.cases.recovered > b.cases.recovered) ? -1 : 1);
      if (this.sorter === 'Deaths') return ((a.deaths.total > b.deaths.total) ? -1 : 1);
      return a;
    });
  }
}
