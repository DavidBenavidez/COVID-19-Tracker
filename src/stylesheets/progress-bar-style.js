import { css } from 'lit-element';

export default css`
  :host {
    height: 30%;
    display: flex;
    align-items: center;
    background-color: gray;
    width: 60%;
  }

  .progress-bar-container {
    height: 100%;
    position: relative;
  }

  .progress-bar_label {
    font-size: 10px;
    position: absolute;
    color: black;    
    left: 60%;
  }
  `;
