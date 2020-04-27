import { CovidAppBody } from './covid-app-body.js';

export class CovidAppBodyConnected extends CovidAppBody {
  async getStatistics() {
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
  }
}

customElements.define('covid-app-body-connected', CovidAppBodyConnected);
