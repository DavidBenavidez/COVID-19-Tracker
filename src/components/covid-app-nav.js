import { LitElement, html } from 'lit-element';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import navCss from '../stylesheets/covid-app-nav-style.js';

export class CovidAppNav extends LitElement {
  static get properties() {
    return {
      typingTimer: { type: Number },
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
        <paper-icon-button class="toggle-drawer" icon="menu" @click=${this.toggleDrawer}></paper-icon-button>
        <div main-title class="main-title">COVID-19 Tracker</div>

        <paper-icon-button class="nav-container_button" icon="search"></paper-icon-button>
        <paper-input class="nav-container_input" always-float-label label="Country Name" name="country" @keyup=${this.searchCountryKeyUp} @keydown=${this.searchCountryKeyDown}></paper-input>
        <paper-dropdown-menu class="nav-container_dropdown" label="Sort By">
          <paper-listbox slot="dropdown-content" class="dropdown-content" @iron-select=${this.updateSorter}>
            <paper-item value="Default">Default</paper-item>
            <paper-item value="Cases">Cases</paper-item>
            <paper-item value="Recovered">Recovered</paper-item>
            <paper-item value="Deaths">Deaths</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>
      </app-toolbar>
    `;
  }

  toggleDrawer() {
    const event = new CustomEvent('toggleDrawer');
    this.dispatchEvent(event);
  }

  searchCountryKeyUp() {
    const searchValue = this.shadowRoot.querySelector('paper-input[name=country]').value;
    const event = new CustomEvent('keyboardUp', {
      detail: {
        filterValue: searchValue,
      },
    });

    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => this.dispatchEvent(event), 300);
  }

  searchCountryKeyDown() {
    clearTimeout(this.typingTimer);
  }

  updateSorter(e) {
    const sorterValue = e.target.selectedItem.getAttribute('value');
    this.dispatchEvent(new CustomEvent('updateSorter', {
      detail: {
        sorterValue,
      },
    }));
  }
}


customElements.define('covid-app-nav', CovidAppNav);
