import { LitElement, html, css } from 'lit-element';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import './components/covid-app-body-connected.js';

export class MainApp extends LitElement {
  static get styles() {
    return css`
      :host {
        --app-primary-color: black;
        --app-secondary-color: white;
        --light-green-color: #ACF39D; 
        --light-rose-color: #FF5D73;
        display: block;
      }

      app-heaeder-layout {
        background-color: white;
      }
    `;
  }

  render() {
    return html`
      <app-header-layout has-scrolling-region fullbleed>
        <covid-app-body-connected></covid-app-body-connected>
      </app-header-layout>
    `;
  }
}
