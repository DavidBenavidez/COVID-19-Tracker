
import { LitElement, html } from 'lit-element';
import '@polymer/paper-button/paper-button.js';

import countryCodes from '../countries.js';
import './covid-feat-stat-modal-ph.js';
import './covid-feat-progress-bar-ph.js';
import keyframes from '../stylesheets/animation-keyframes.js';
import boxCss from '../stylesheets/stat-box-style.js';
import { getPercentage, numberWithCommas } from '../utils/utils.js';


export class StatBox extends LitElement {
  static get properties() {
    return {
      country: { type: Object },
      isModalOpen: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.country = {};
    this.isModalOpen = false;
  }

  static get styles() {
    return [keyframes, boxCss];
  }

  render() {
    if (!this.country || !this.country.country) return;

    const { code: countryCode } = countryCodes.find(({ name }) => (name.toLowerCase().indexOf(this.country.country.toLowerCase()) !== -1));

    return html`
      ${this.isModalOpen ? this._renderModal(countryCode) : null}
      <div class="stat-box-header" @click=${this.toggleModal}> 
        <span class="stat-country"> ${this.country.country.toUpperCase()} </span> 
        <img class="country-flag" alt=${countryCode} src="https://www.countryflags.io/${countryCode || 'af'}/flat/64.png">
      </div>
      <div class="stat-box-body" @click=${this.toggleModal}>
        <div class="stat-box-body_infobox">
          <span class="stat stat-header stat-cases">Cases</span>
          <span class="stat stat-cases">${numberWithCommas(this.country.cases.total)}</span>
        </div>
        <div class="stat-box-body_infobox">
          <span class="stat stat-header stat-deaths">Deaths</span>
          <progress-bar .total=${numberWithCommas(this.country.deaths.total)} .percentage=${getPercentage(this.country.deaths.total, this.country.cases.total)} .progressColor=${'var(--red-color)'}></progress-bar>
        </div>
        <div class="stat-box-body_infobox">
          <span class="stat-box-body_infobox_header">Recovered</span>
          <progress-bar .total=${numberWithCommas(this.country.cases.recovered)} .percentage=${getPercentage(this.country.cases.recovered, this.country.cases.total)} .progressColor=${'var(--green-color)'}></progress-bar>
        </div>
      </div>
    `;
  }

  _renderModal(countryCode) {
    return html`
      <stat-modal ?shown=${this.isModalOpen} @close=${this.toggleModal}>
        <div class="stat-modal-header" slot="modal-header">
          <img class="modal-country-flag" src="https://www.countryflags.io/${countryCode || 'af'}/flat/64.png">  
          <span class="modal-header_title"> ${this.country.country.toUpperCase()} </span> 
        </div>
        <div class="stat-modal-body" slot="modal-body">
          <span class="stat-modal-body_stat"> <b> Cases: </b> ${numberWithCommas(this.country.cases.total || 'N.A')} </span>
          <span class="stat-modal-body_stat"> <b> Active Cases: </b> ${numberWithCommas(this.country.cases.active || 'N.A')} </span>
          <span class="stat-modal-body_stat"> <b> New Cases: </b> ${numberWithCommas(this.country.cases.new || 'N.A')} </span>
          <span class="stat-modal-body_stat"> <b> Critical: </b> ${numberWithCommas(this.country.cases.critical || 'N.A')} </span>
          <span class="stat-modal-body_stat"> <b> Deaths: </b> ${numberWithCommas(this.country.deaths.total || 'N.A')} </span>
          <span class="stat-modal-body_stat"> <b> New Deaths: </b> ${numberWithCommas(this.country.deaths.new || 'N.A')} </span>
          <span class="stat-modal-body_stat"> <b> Recovered: </b> ${numberWithCommas(this.country.cases.recovered || 'N.A')}  </span>
          <span class="stat-modal-body_stat"> <b> Tested: </b> ${numberWithCommas(this.country.tests.total || 'N.A')} </span>
        </div>
        <div slot="modal-footer" class="stat-modal-footer">
          <span class="stat-modal-body_date"> Data as of ${new Date(this.country.day).toLocaleString() || 'N.A'} </span>
        </div>
      </stat-modal>
    `;
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
}

customElements.define('stat-box', StatBox);
