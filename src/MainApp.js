import { LitElement, html, css } from 'lit-element';
import './components/covid-app-body-connected.js';

export class MainApp extends LitElement {
  static get styles() {
    return css`
      :host {
        --app-primary-color: black;
        --app-secondary-color: white;
        --recovered-color: #ACF39D; 
        --deaths-color: #FF5D73;
        display: block;
      }

      app-header-layout {
        background-color: var(--app-secondary-color);
      }
    `;
  }

  render() {
    return html`
      <covid-app-body-connected></covid-app-body-connected>
    `;
  }
}
