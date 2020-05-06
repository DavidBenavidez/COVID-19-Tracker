import { LitElement, html, css } from 'lit-element';
import '../components/covid-feat-app-body-ph-connected.js';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';

export class MainApp extends LitElement {
  constructor() {
    super();
    setPassiveTouchGestures(true);
  }

  static get styles() {
    return css`
      :host {
        --background-color: #f4f2f7;
        --surface-color: rgb(256, 256, 256, 0.87);
        --surface-color-lighter: #f9f9f9;
        --on-surface-color: #27242c;
        
        --primary-color: #7117ea;
        --secondary-color: #ea6060;

        --green-color: #03DAC6;
        --red-color: #CF6679;
        display: block;
      }

      @media (prefers-color-scheme: dark) {
        :host {
          --background-color: #121212;
          --surface-color: #1E1E1E;
          --surface-color-lighter: #2E2E2E;
          --on-surface-color: rgb(256, 256, 256, 0.87);
        }
      }
    `;
  }

  render() {
    return html`
      <app-body-connected></app-body-connected>
    `;
  }
}

customElements.define('main-app', MainApp);
