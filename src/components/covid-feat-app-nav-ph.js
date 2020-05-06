import { LitElement, html } from 'lit-element';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-icons/iron-icons.js';
import 'shibui-dropdown-menu/shibui-dropdown-menu.js';

import navCss from '../stylesheets/app-nav-style.js';
import { addDebounce } from '../utils/utils.js';

export class AppNav extends LitElement {
  static get properties() {
    return {
      typingTimer: { type: Number },
      route: { type: String },
    };
  }

  constructor() {
    super();
    this.typingTimer = 0;
  }

  static get styles() {
    return navCss;
  }

  render() {
    return html`
      <app-toolbar class="nav-container">
        ${(this.route === 'home') ? html`
          <paper-icon-button class="toggle-drawer" icon="menu" @click=${this.toggleDrawer} aria-label="Menu"></paper-icon-button>
        ` : ''}
        
        <div main-title class="main-title">COVID-19 Tracker</div>

        <slot name="route-link"></slot>

        ${(this.route === 'home') ? html`
          <paper-icon-button class="nav-container_button" aria-label="World Statistics" icon="language" @click=${this.showStatisticsModal}></paper-icon-button>
          <paper-icon-button class="nav-container_button" aria-label="Search Country" icon="search"></paper-icon-button>
          <paper-input class="nav-container_input" always-float-label label="Country Name" name="country" @value-changed=${this.searchCountryHandler}></paper-input>
          
          <label for="sort-country-input">
            <select id="sort-country-input" @change=${this.updateSorter}>
              <option value="" disabled selected hidden>Sort By</option>  
              <option value="Default">Default</option>
              <option value="Cases">Cases</option>
              <option value="Recovered">Recovered</option>
              <option value="Deaths">Deaths</option>
            </select>
          </label>
        ` : ''}
      
        </app-toolbar>
    `;
  }

  showStatisticsModal() {
    this.dispatchEvent(new CustomEvent('show-stat-modal'));
  }

  toggleDrawer() {
    const event = new CustomEvent('toggle-drawer');
    this.dispatchEvent(event);
  }

  searchCountryHandler() {
    const searchValue = this.shadowRoot.querySelector('paper-input[name=country]').value;
    const event = new CustomEvent('update-filter', {
      detail: {
        filterValue: searchValue,
      },
    });

    addDebounce(this.typingTimer, 600, () => this.dispatchEvent(event));
  }

  updateSorter(e) {
    const sorterValue = e.target.value;
    this.dispatchEvent(new CustomEvent('update-sorter', {
      detail: {
        sorterValue,
      },
    }));
  }
}


customElements.define('app-nav', AppNav);
