import { LitElement, html, css } from 'lit-element';
import './components/covid-app-body-connected.js';

export class MainApp extends LitElement {
  static get styles() {
    return css`
      :host {
        --background-color: #121212;
        --surface-color: #1E1E1E;
        --primary-color: #61B1D4;

        --secondary-color: rgb(256, 256, 256, 0.87);
        --green-color: #03DAC6;
        --red-color: #CF6679;
        display: block;
      }
    `;
  }

  render() {
    return html`
      <covid-app-body-connected></covid-app-body-connected>
    `;
  }
}
