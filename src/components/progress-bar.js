import { LitElement, html, css } from 'lit-element';
import progressBarCss from '../stylesheets/progress-bar-style.js';

export class ProgressBar extends LitElement {
  static get properties() {
    return {
      percentage: { type: Number },
      progressColor: { type: String },
    };
  }

  static get styles() {
    return progressBarCss;
  }

  constructor() {
    super();
    this.percentage = 0;
  }

  render() {
    return html`
      <div class="progress-bar-container" style="width: ${this.percentage}%; background-color:${this.progressColor};">
      </div>
      <span class="progress-bar_label">${this.total} (${this.percentage}%)</span>
    `;
  }
}

customElements.define('progress-bar', ProgressBar);
