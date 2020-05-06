import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';

class Link extends navigator(LitElement) {
  static get properties() {
    return {
      href: { type: String },
    };
  }

  constructor() {
    super();
    this.href = '';
  }

  render() {
    return html`
      <a href='${this.href}' @click='${this.linkClick}'>
        <slot></slot>
      </a>
    `;
  }

  linkClick(event) {
    event.preventDefault();
    this.navigate(this.href);
    this.dispatchEvent(new CustomEvent('toggle-link'));
  }
}

customElements.define('route-link', Link);
