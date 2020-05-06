import { LitElement, html } from 'lit-element';

import keyframes from '../stylesheets/animation-keyframes.js';
import statModalCSS from '../stylesheets/stat-modal-style.js';

export class StatModal extends LitElement {
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
    this.dispatchEvent(new CustomEvent('close'));
  }
}

customElements.define('stat-modal', StatModal);
