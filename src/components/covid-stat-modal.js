import { LitElement, html, css } from 'lit-element';
import keyframes from '../stylesheets/animation-keyframes.js';
import statModalCSS from '../stylesheets/covid-stat-modal-style.js';

export class CovidStatModal extends LitElement {
  static get properties() {
    return {
      country: { type: Object },
    };
  }

  static get styles() {
    return [keyframes, statModalCSS];
  }

  render() {
    return html`
      <div id="modal-overlay" @click=${this.closeModal}></div>
      
      <div class="modal-container">
        <div class="modal-header">
          <paper-icon-button class="modal-close" icon="close" @click=${this.closeModal}></paper-icon-button>
          <slot name="modal-header"></slot>
        </div>
        <div class="modal-body">
          <slot name="modal-body"></slot>
        </div>
        <div class="modal-footer">
          <slot name="modal-footer"></slot>
        </div>
      </div>      
    `;
  }

  closeModal() {
    this.style.display = 'none';
  }
}

customElements.define('covid-stat-modal', CovidStatModal);
