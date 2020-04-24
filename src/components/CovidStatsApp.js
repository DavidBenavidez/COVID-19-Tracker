import { LitElement, html, css } from 'lit-element';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import countriesCode from '../countries.js';


export class CovidStatsApp extends LitElement {
  static get properties() {
    return {
      countries: {type: Array}, 
      filter: {type: String},
      sorter: {type: String},
      loaded: {type: Number},
    };
  }

  constructor() {
    super();
    this.countries = [];
    this.filter = '';
    this.sorter = '';
    this.loaded = 3;
  }

  connectedCallback() {
    super.connectedCallback();
    this._getStatistics();
  }

  updated(){
    let sentinel = this.shadowRoot.querySelector("#sentinel");
    
    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          this.loaded += 10;
        }
      });
    });

    if(sentinel) observer.observe(sentinel);
  }

  async _getStatistics(){}

  static get styles() {
    return css`
      :host {
        --app-primary-color: black;
        --app-secondary-color: white;
        --light-green-color: #ACF39D; 
        --light-rose-color: #FF5D73;
        display: block;
      }

      app-header {
        height: 60px;
        color: var(--app-secondary-color);
        background-color: var(--app-primary-color);
      }

      app-header paper-icon-button {
        --paper-icon-button-ink-color: var(--app-secondary-color);
      }

      app-header paper-input {
        --paper-input-container-color: var(--app-secondary-color);
        --paper-input-container-focus-color: var(--app-secondary-color);
        --paper-input-container-invalid-color: red;
        --paper-input-container-input-color: var(--app-secondary-color);
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

      paper-dropdown-menu {
        margin-left: 8px;
        --paper-input-container-color: white;
        --paper-input-container-focus-color: white;
        --paper-input-container-invalid-color: red;
        --paper-input-container-input-color: white;
      }

      .link-to-map { 
        color: white; 
        text-decoration: none; 
      }

      #sentinel {
        width: 1px;
        height: 1px;
      }      

      @media only screen and (max-width: 600px) {
        .main-content { flex-flow: column wrap; }
        div[main-title] { font-size: 16px; }
      }

      @media only screen and (min-width: 600px) {
        .main-content { flex-flow: column wrap; }
        div[main-title] { font-size: 16px; }
      }

      @media only screen and (min-width: 768px) {
        .main-content { flex-flow: column wrap; }
        div[main-title] { font-size: 24px; }
      } 

      @media only screen and (min-width: 992px) {
        .main-content { flex-flow: row wrap; }
        div[main-title] { font-size: 24px; }
      } 

      @media only screen and (min-width: 1200px) {
        .main-content { flex-flow: row wrap; }
        div[main-title] { font-size: 24px; }
      }
    `;
  }

  _searchCountryKeyUp() {
    clearTimeout(MyAppGlobals.typingTimer);
    MyAppGlobals.typingTimer = setTimeout(this._afterTyping.bind(this), 300);
  }

  _searchCountryKeyDown() {
    clearTimeout(MyAppGlobals.typingTimer);
  }

  _afterTyping() {
    const searchValue = this.shadowRoot.querySelector('paper-input[name=country]').value;
    this.filter = searchValue;
  }

  _updateSorter(e) {
    this.sorter = e.target.selectedItem.innerText;
  }

  _sortCountries(countries) {
    switch(this.sorter) {
      case 'Cases': {
        countries.sort(((a, b)=>(a.cases.total > b.cases.total)? -1 : ((a.cases.total < b.cases.total)? 1 : 0)))
        break;
      }
      case 'Recovered': {
        countries.sort(((a, b)=>(a.cases.recovered > b.cases.recovered)? -1 : ((a.cases.recovered < b.cases.recovered)? 1 : 0)))
        break;
      }
      case 'Deaths': {
        countries.sort(((a, b)=>(a.deaths.total > b.deaths.total)? -1 : ((a.deaths.total < b.deaths.total)? 1 : 0)))
        break;
      }
    }
  }
  
  render() {
    let countries = this.countries.filter(({country})=> country.toLowerCase().indexOf(this.filter.toLowerCase()) != -1);
    this._sortCountries(countries);
    countries = !countries? this.countries : countries;
    countries = countries.slice(0, this.loaded);

    return html`
      <app-header-layout has-scrolling-region fullbleed>  
        <app-header slot="header" fixed effects="waterfall">
          <app-toolbar>
            <div main-title>COVID-19 Tracker</div>
            <a class="link-to-map" name="map" href="/map"><paper-icon-button icon="track-changes"></paper-icon-button></a>

            <paper-icon-button icon="search"></paper-icon-button>
            <paper-input always-float-label label="Country Name" name="country" @keyup=${this._searchCountryKeyUp} @keydown=${this._searchCountryKeyDown}></paper-input>            
            <paper-dropdown-menu label="Sort By">
              <paper-listbox slot="dropdown-content" id="sort_countries_dropdown" @iron-select=${this._updateSorter.bind(this)}>
                <paper-item value="Default">Default</paper-item>
                <paper-item value="Cases">Cases</paper-item>
                <paper-item value="Recovered">Recovered</paper-item>
                <paper-item value="Deaths">Deaths</paper-item>
              </paper-listbox>
            </paper-dropdown-menu>
          </app-toolbar>
        </app-header>
        
        <div class="main-content">
          ${countries.map((country, index)=>{
            let { code: country_code } = countriesCode.find(({name}) => name.toLowerCase().indexOf(country.country.toLowerCase()) != -1);   
            
            if (index===(this.loaded-1)) return html`<div id="sentinel"></div>`

            return html`
              <covid-stat-box
                .country_code=${country_code.toLowerCase()}
                .country=${country.country.toUpperCase()}
                .cases=${country.cases.total}
                .newCases=${country.cases.new}
                .deaths=${country.deaths.total}
                .recovered=${country.cases.recovered}
              ><covid-stat-box>`
          })}
        </div>
      </app-header-layout>
    `;
  }
}