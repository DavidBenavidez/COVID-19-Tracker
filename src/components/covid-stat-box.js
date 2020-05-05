
import './covid-stat-modal.js';
import { LitElement, html } from 'lit-element';
import '@polymer/paper-button/paper-button.js';
import './progress-bar.js';
import keyframes from '../stylesheets/animation-keyframes.js';
import boxCss from '../stylesheets/covid-stat-box-style.js';
import countriesCode from '../utils/countries.js';

export class CovidStatBox extends LitElement {
  static get properties() {
    return {
      country: { type: Object },
    };
  }

  static get styles() {
    return [keyframes, boxCss];
  }

  render() {
    if (!this.country) return;

    const { code: countryCode } = countriesCode.find(({ name }) => (name.toLowerCase().indexOf(this.country.country.toLowerCase()) !== -1));

    return html`
      ${this._renderModal(countryCode)}
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
          <progress-bar .total=${this.country.deaths.total} .percentage=${this.getPercentage(this.country.deaths.total)} .progressColor=${'var(--red-color)'}></progress-bar>
        </div>
        <div class="stat-box-body_infobox">
          <span class="stat-box-body_infobox_header">Recovered</span>
          <progress-bar .total=${this.country.cases.recovered} .percentage=${this.getPercentage(this.country.cases.recovered)} .progressColor=${'var(--green-color)'}></progress-bar>
        </div>
      </div>
    `;
  }

  _renderModal(countryCode) {
    return html`
      <covid-stat-modal>
        <div class="stat-modal-header" slot="modal-header">
          <img class="modal-country-flag" src="https://www.countryflags.io/${countryCode || 'af'}/flat/64.png">  
          <span class="modal-header_title"> ${this.country.country.toUpperCase()} </span> 
        </div>
        <div class="stat-modal-body" slot="modal-body">
          <span class="stat-modal-body_stat"> <b> Cases: </b> ${this.country.cases.total || 'N.A'} </span>
          <span class="stat-modal-body_stat"> <b> Active Cases: </b> ${this.country.cases.active || 'N.A'} </span>
          <span class="stat-modal-body_stat"> <b> New Cases: </b> ${this.country.cases.new || 'N.A'} </span>
          <span class="stat-modal-body_stat"> <b> Critical: </b> ${this.country.cases.critical || 'N.A'} </span>
          <span class="stat-modal-body_stat"> <b> Deaths: </b> ${this.country.deaths.total || 'N.A'} </span>
          <span class="stat-modal-body_stat"> <b> New Deaths: </b> ${this.country.deaths.new || 'N.A'} </span>
          <span class="stat-modal-body_stat"> <b> Recovered: </b> ${this.country.cases.recovered || 'N.A'}  </span>
          <span class="stat-modal-body_stat"> <b> Tested: </b> ${this.country.tests.total || 'N.A'} </span>
        </div>
        <div slot="modal-footer" class="stat-modal-footer">
          <span class="stat-modal-body_date"> Data as of ${new Date(this.country.day).toLocaleString() || 'N.A'} </span>
        </div>
      </covid-stat-modal>
    `;
  }

  openModal() {
    this.shadowRoot.querySelector('covid-stat-modal').style.display = 'block';
  }

  getPercentage(num) {
    const percentage = (num / this.country.cases.total) * 100;
    return Math.ceil(percentage);
  }
}

customElements.define('covid-stat-box', CovidStatBox);
