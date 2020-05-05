import { LitElement, html, css } from 'lit-element';
import './components/covid-app-body-connected.js';

export class MainApp extends LitElement {
  static get styles() {
    return css`
      :host {
        --background-color: #f4f2f7;
        --surface-color: rgb(256, 256, 256, 0.87);
        --surface-color-lighter: #f9f9f9;
        --primary-color: #27242c;

        --secondary-color: #27242c;
        --green-color: #03DAC6;
        --red-color: #CF6679;
        display: block;
      }

      @media (prefers-color-scheme: dark) {
        :host {
          --background-color: #121212;
          --surface-color: #1E1E1E;
          --surface-color-lighter: #2E2E2E;
          --primary-color: #61B1D4;
          --secondary-color: rgb(256, 256, 256, 0.87);
        }
      }
    `;
  }

  render() {
    return html`
      <covid-app-body-connected></covid-app-body-connected>
    `;
  }
}
