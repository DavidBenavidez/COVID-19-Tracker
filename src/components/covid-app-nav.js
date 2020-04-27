import { LitElement, html, css } from 'lit-element';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';

export class CovidAppNav extends LitElement {
  static get properties() {
    return {
      typingTimer: { type: String },
    };
  }

  static get styles() {
    return css`
      app-header {
        height: 60px;
        color: var(--app-secondary-color);
        background-color: var(--app-primary-color);
        z-index: 2;
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
    `;
  }

  render() {
    return html`
      <app-header slot="header" fixed effects="waterfall">
        <app-toolbar>
          <div main-title>COVID-19 Tracker</div>
          <a class="link-to-map" name="map" href="/map"><paper-icon-button icon="track-changes"></paper-icon-button></a>
          
          <paper-icon-button icon="search"></paper-icon-button>
          <paper-input always-float-label label="Country Name" name="country" @keyup=${this.searchCountryKeyUp} @keydown=${this.searchCountryKeyDown}></paper-input>
          <paper-dropdown-menu label="Sort By">
            <paper-listbox slot="dropdown-content" id="sort_countries_dropdown" @iron-select=${this.updateSorter}>
              <paper-item value="Default">Default</paper-item>
              <paper-item value="Cases">Cases</paper-item>
              <paper-item value="Recovered">Recovered</paper-item>
              <paper-item value="Deaths">Deaths</paper-item>
            </paper-listbox>
          </paper-dropdown-menu>
        </app-toolbar>
      </app-header>
    `;
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
    const sorterValue = e.target.selectedItem.innerText;
    this.dispatchEvent(new CustomEvent('updateSorter', {
      detail: {
        sorterValue,
      },
    }));
  }
}


customElements.define('covid-app-nav', CovidAppNav);
