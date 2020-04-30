import { LitElement, html, css } from 'lit-element';
import '@polymer/paper-dialog/paper-dialog.js';
import statModalCSS from '../stylesheets/covid-stat-modal-style.js';

export class CovidStatModal extends LitElement {
  static get properties() {
    return {
      country: { type: Object },
    };
  }

  static get styles() {
    return statModalCSS;
  }

  render() {
    return html`
      <div id="modal-overlay" @click=${this.hideModal}></div>
      <paper-dialog id="stat-modal">
        <div class="modal-header">
          <img class="country-flag" src="https://www.countryflags.io/${this.countryCode ? this.countryCode : 'af'}/flat/64.png">
        </div>
        <paper-dialog-scrollable>

          <div class="modal-body">
            
          </div>
        </paper-dialog-scrollable>
      </paper-dialog>
    `;
  }

  hideModal() {
    this.shadowRoot.getElementById('modal-overlay').style.display = 'none';
  }
}

customElements.define('covid-stat-modal', CovidStatModal);
