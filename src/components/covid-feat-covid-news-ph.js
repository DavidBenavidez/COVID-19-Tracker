import { LitElement, html } from 'lit-element';
import countryCodes from '../countries.js';
import covidNewsCss from '../stylesheets/covid-news-style.js';
import keyframes from '../stylesheets/animation-keyframes.js';

export class CovidNews extends LitElement {
  static get properties() {
    return {
      countryNames: { type: Array },
      isLoading: { type: Boolean },
      loadedDropdown: { tpye: Number },
      loadedNews: { type: Number },
      news: { type: Array },
      sorter: { type: String },
      url: { type: String },
    };
  }

  constructor() {
    super();
    this.countryNames = [];
    this.isLoading = false;
    this.loadedNews = 3;
    this.news = [];
    this.sorter = '';
    this.url = '';
  }

  connectedCallback() {
    super.connectedCallback();
    this.getTopNewsAll();
  }

  updated(changedProps) {
    if (super.updated) {
      super.updated(changedProps);
    }

    if (changedProps.has('news')) {
      this.isLoading = false;
    }

    const sentinel = this.shadowRoot.getElementById('sentinel');

    if (sentinel) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            setTimeout(() => {
              this.loadedNews += 3;
            }, 500);
          }
        });
      });

      observer.observe(sentinel);
    }

    const ac = this.shadowRoot.getElementById('news-search_suggestions');

    if (ac) {
      ac.target = this.shadowRoot.getElementById('news-search_input');
      ac.source = this.countryNames;
    }
  }

  static get styles() {
    return [keyframes, covidNewsCss];
  }

  render() {
    return html`
      <h1 class="main-title"> Top News </h1>
      
      <div class="news-search">
        <paper-input @change=${this.applyFilter} id="news-search_input" always-float-label label="Country Name" name="country"></paper-input>\
        <paper-autocomplete id="news-search_suggestions"></paper-autocomplete>
      </div>
      ${this._renderNews()}
    `;
  }

  _renderNews() {
    const news = this.news.slice(0, this.loadedNews);

    if (this.isLoading) {
      return html`<mil-pulse-spinner id="lazy-loading-loader"></mil-pulse-spinner>`;
    }

    if (news.length <= 0) {
      return html`<h2 class="empty-placeholder">No Articles Found</h2>`;
    }

    return news.map((article, index) => {
      if (index === (this.loadedNews - 1)) {
        return html`<div id="sentinel">
          <mil-pulse-spinner id="lazy-loading-loader"></mil-pulse-spinner>
        </div>`;
      }

      const content = article.content ? article.content.replace(/\s*\[[^)]*\]/gi, '') : 'No Content Available';

      return html`
        <div class="article-container">
          <a class="article-title" href=${article.url}><h3>${article.title.toUpperCase()}</h3></a>
          <span class="article-date">${new Date(article.publishedAt).toLocaleString()}</span>
          <div class="article-content">
            <span class="article-content_content">${content}</span>
          </div>
        </div>
      `;
    });
  }

  applyFilter(e) {
    const { value } = e.target;

    this.isLoading = true;

    if (value === 'default') {
      this.getTopNewsAll();
      return;
    }

    // Get Country Code
    const { code: countryCode } = countryCodes.find(({ name }) => (name.toLowerCase().indexOf(value.toLowerCase()) !== -1));

    this.getTopNewsPerCountry(countryCode.toLowerCase());
  }

  getTopNewsAll() {
    console.log('Fetch all news');
  }

  getTopNewsPerCountry() {
    console.log('Fetch news per country');
  }
}

customElements.define('covid-news', CovidNews);
