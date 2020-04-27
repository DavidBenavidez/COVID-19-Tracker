import { LitElement, html, css } from 'lit-element';

export class CovidStatBox extends LitElement {
  static get properties() {
    return {
      country: { type: String },
      countryCode: { type: String },
      cases: { type: Number },
      newCases: { type: Number },
      deaths: { type: Number },
      recovered: { type: Number },
    };
  }

  static get styles() {
    return css`
      :host {
        max-height: 250px;
        box-sizing: border-box;
        border: 5px solid white;
        opacity: 1;
        
        position: relative;
        display: flex;
        flex-basis: 25%;
        flex-flow: column wrap;
      }

      :host(:hover) {
        cursor: pointer;
        transition: 0.3s;
        opacity: 1;
      }

      .stats {
        margin-top: auto;
      }

      .country-flag-container {
        overflow: hidden;
        height: 75%;
        display: flex;
        justify-content: center;
      }

      .country-flag-overlay {
        position: absolute;
        background-image: linear-gradient(180deg, rgba(0,0,0,1) 8%, rgba(161,161,171,0) 22%);

        opacity: 0.5;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
      }

      .country-flag-overlay:hover {
        transition: 0.5s;
        opacity: 0;
      }

      .country-flag-container .country-flag {
        width: 100%;
        align-self: center;
      }

      .stats-container {
        display: flex;
        font-family: roboto;
        height: 25%;
        width: 100%;
      }

      .stats-container .mini-stat-box {
        display: flex;
        background-color: black;
        opacity: 0.7;
        width: 33.3%;
        height: 100%;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
      }

      .stat-country {
        position: absolute;
        margin-top: 8px;
        display: flex;
        justify-content: center;
        letter-spacing: 1.5px;
        width: 200px;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        color: white;
        z-index: 2;
      }

      .stat { 
        font-weight: 400;
        color: white; 
      }

      .stat-header { 
        letter-spacing: 1px;
        font-weight: 600;
      }

      .stat-deaths { color: var(--light-rose-color); }
      .stat-recovered { color: var(--light-green-color); }

      @media only screen and (max-width: 600px) {
        :host { flex-basis: unset; }
      }

      @media only screen and (min-width: 600px) {
        :host { flex-basis: unset; }
      }

      @media only screen and (min-width: 768px) {
        :host { flex-basis: 25%; }
      } 

      @media only screen and (min-width: 992px) {
        :host { flex-basis: 25%; }
      } 

      @media only screen and (min-width: 1200px) {
        :host { flex-basis: 25%; }
      }
    `;
  }

  render() {
    return html`
    <div class="country-flag-container">
      <div class="stat-country"> 
        <span> ${this.country} </span> 
      </div>
      <div class="country-flag-overlay"></div>
      <img class="country-flag" src="https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/${this.countryCode ? this.countryCode : 'af'}.png">
    </div>
    <div class="stats-container">
      <div class="mini-stat-box">
        <span class="stat stat-header stat-cases">Cases</span>
        <span class="stat stat-cases">${this.cases}</span>
      </div>
      <div class="mini-stat-box">
        <span class="stat stat-header stat-deaths">Deaths</span>
        <span class="stat stat-deaths">${this.deaths}</span>
      </div>
      <div class="mini-stat-box">
        <span class="stat stat-header stat-recovered">Recovered</span>
        <span class="stat stat-recovered">${this.recovered}</span>
      </div>
    </div>
    `;
  }
}

customElements.define('covid-stat-box', CovidStatBox);
