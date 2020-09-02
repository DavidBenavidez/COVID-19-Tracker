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

  connectedCallback() {
    super.connectedCallback();

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

          <button @click=${this.signIn}> Sign in </buttton>
        ` : ''}

        </app-toolbar>
    `;
  }
  signIn() {
  const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_SignUpIn",
        forgotPassword: "B2C_1_PasswordRest"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://ingcampaignbuilder.b2clogin.com/ingcampaignbuilder.onmicrosoft.com/B2C_1_SignUpIn/",
        },
        forgotPassword: {
            authority: "https://ingcampaignbuilder.b2clogin.com/ingcampaignbuilder.onmicrosoft.com/B2C_1_PasswordRest",
        },
    },
  }

    const msalConfig = {
      auth: {
        clientId: "b62e15a3-f4be-466a-af1d-b11e1e3dcc47",
        authority: b2cPolicies.authorities.signUpSignIn.authority,
        validateAuthority: false,
        redirectUri: "http://localhost:8000",
      },
      cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false // Set this to "true" to save cache in cookies to address trusted zones limitations in IE (see: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/Known-issues-on-IE-and-Edge-Browser)
      }
    };
    const myMSALObj = new Msal.UserAgentApplication(msalConfig);

    /**
     * Scopes you enter here will be consented once you authenticate. For a full list of available authentication parameters,
     * visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
     */
    const loginRequest = {
      // scopes: ["openid", "profile"],
    };

    function signInFunc() {
      myMSALObj.loginRedirect(loginRequest);
    }

    const result = signInFunc();

    console.log('result');
    console.log(result);
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
