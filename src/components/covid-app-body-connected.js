import { CovidAppBody } from './covid-app-body.js';

export class CovidAppBodyConnected extends CovidAppBody {
  async getStatistics() {
    this.isLoading = true;
    const res = await fetch(
      'https://covid-193.p.rapidapi.com/statistics',
      {
        headers: {
          'x-rapidapi-host': 'covid-193.p.rapidapi.com',
          'x-rapidapi-key': '5af96d14dbmsh51fc4214ae8ceb1p1a3d43jsncd88f5576ae6',
        },
      },
    ).catch((e) => { console.error(e.message); });
    const data = await res.json().catch((e) => { console.error(e.message); });
    this.countries = data.response;
    this.isLoading = false;
  }

  async getCountryNames() {
    this.isLoading = true;
    const res = await fetch(
      'https://covid-193.p.rapidapi.com/countries',
      {
        headers: {
          'x-rapidapi-host': 'covid-193.p.rapidapi.com',
          'x-rapidapi-key': 'b2eb29a8c8msh39eb42de810dfdfp1b502cjsn7ac5f54822d6',
        },
      },
    ).catch((e) => { console.error(e.message); });

    const data = await res.json().catch((e) => { console.error(e.message); });
    this.countryNames = data.response;
    this.isLoading = false;
  }
}

customElements.define('covid-app-body-connected', CovidAppBodyConnected);
