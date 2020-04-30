
import './covid-stat-modal.js';
import { LitElement, html } from 'lit-element';
import '@polymer/paper-button/paper-button.js';
import './progress-bar.js';
import boxCss from '../stylesheets/covid-stat-box-style.js';
import countriesCode from '../utils/countries.js';

export class CovidStatBox extends LitElement {
  static get properties() {
    return {
      country: { type: Object },
    };
  }

  static get styles() {
    return boxCss;
  }

  render() {
    if (!this.country) return;

    const { code: countryCode } = countriesCode.find(({ name }) => (name.toLowerCase().indexOf(this.country.country.toLowerCase()) !== -1));

    return html`
      <covid-stat-modal .countryCode=${countryCode}></covid-stat-modal>
      <div class="stat-box-header" @click=${this.openModal}> 
        <span class="stat-country"> ${this.country.country.toUpperCase()} </span> 
        <img class="country-flag" src="https://www.countryflags.io/${countryCode || 'af'}/flat/64.png">
      </div>
      <div class="stat-box-body" @click=${this.openModal}>
        <div class="stat-box-body_infobox">
          <span class="stat stat-header stat-cases">Cases</span>
          <span class="stat stat-cases">${this.country.cases.total}</span>
        </div>
        <div class="stat-box-body_infobox">
          <span class="stat stat-header stat-deaths">Deaths</span>
          <progress-bar .total=${this.country.deaths.total} .percentage=${this.getPercentage(this.country.deaths.total)} .progressColor=${'var(--deaths-color)'}></progress-bar>
        </div>
        <div class="stat-box-body_infobox">
          <span class="stat-box-body_infobox_header">Recovered</span>
          <progress-bar .total=${this.country.cases.recovered} .percentage=${this.getPercentage(this.country.cases.recovered)} .progressColor=${'var(--recovered-color)'}></progress-bar>
        </div>
      </div>
    `;
  }

  openModal() {
    const modal = this.shadowRoot.querySelector('covid-stat-modal').shadowRoot.getElementById('stat-modal');
    modal.open();
    const overlay = this.shadowRoot.querySelector('covid-stat-modal').shadowRoot.getElementById('modal-overlay');
    overlay.style.display = 'block';
  }

  getPercentage(num) {
    const percentage = (num / this.country.cases.total) * 100;
    return Math.ceil(percentage);
  }
}

customElements.define('covid-stat-box', CovidStatBox);
