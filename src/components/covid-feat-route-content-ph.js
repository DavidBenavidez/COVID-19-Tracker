import { LitElement, html } from 'lit-element';
import { outlet } from 'lit-element-router';

class Main extends outlet(LitElement) {
  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('route-content', Main);
