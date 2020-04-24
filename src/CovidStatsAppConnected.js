import { CovidStatsApp } from './CovidStatsApp';

export class CovidStatsAppConnected extends CovidStatsApp {
  async _getStatistics(){
    const res = await fetch(
        'https://covid-193.p.rapidapi.com/statistics',
        {
          headers: {
            "x-rapidapi-host": "covid-193.p.rapidapi.com", 
            "x-rapidapi-key": "5af96d14dbmsh51fc4214ae8ceb1p1a3d43jsncd88f5576ae6",
          }
        }
      )
    const data = await res.json();
    this.countries = Array.from(data.response);
  }
}