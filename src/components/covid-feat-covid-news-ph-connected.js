import { CovidNews } from './covid-feat-covid-news-ph.js';

export class CovidNewsConnected extends CovidNews {
  async getTopNewsAll() {
    const res = await fetch('https://newsapi.org/v2/top-headlines?q=COVID-19&apiKey=bbc0af84b4664b8a9638caa6865c20b9');
    const data = await res.json();
    this.news = data.articles;
  }

  async getTopNewsPerCountry(countryCode) {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?q=COVID-19&country=${countryCode}&apiKey=bbc0af84b4664b8a9638caa6865c20b9`);
    const data = await res.json();
    this.news = data.articles;
  }
}

customElements.define('covid-news-connected', CovidNewsConnected);
