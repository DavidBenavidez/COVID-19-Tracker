import { css } from 'lit-element';

export default css`
  :host {
    min-height: 200px;
    box-sizing: border-box;
    background-color: var(--surface-color);
    border: 5px solid var(--background-color);
    position: relative;
    display: flex;
    min-width: 25%;
    flex-grow: 1;
    flex-flow: column wrap;
    animation: .25s createBox;
    cursor: pointer;
  }

  .stat-box-header {
    display: flex;
    height: 30%;
    width: 100%;
    align-items: center;
  }

  .stat-box-header .stat-country {
    display: flex;
    justify-content: center;
    letter-spacing: 1.5px;
    width: 250px;
    font-family: 'Montserrat', sans-serif;
    color: var(--secondary-color);
    font-size: 16px;
  }

  .stat-box-header .country-flag {
    margin-left: auto;
    margin-right: 20px;
    align-self: center;
  }

  .stat-box-body {
    display: flex;
    height: 70%;
    flex-direction: column;
    align-items: center;
  }

  .stat-box-body_infobox {
    display: flex;
    align-items: center;
    color: var(--secondary-color);
    width: 90%;
    height: 30%;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  .stat-modal-header {
    min-height: 100%;
    min-width: 40%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
  }

  .modal-header_title {
    color: var(--primary-color);
    letter-spacing: 1.5px;
    font-family: 'Montserrat', sans-serif;
  }

  .modal-country-flag {
    align-self: center;
  }

  .stat-modal-body {
    display: flex;
    height: 100%;
    flex-flow: column wrap;
    justify-content: space-around;
    font-size: 16px;
    letter-spacing: 1.5px;
    font-family: 'Roboto', sans-serif;
    padding-left: 20px;
  }

  .stat-modal-body_stat {
    color: var(--secondary-color);
  }

  .stat-modal-body_date {
    font-size: 12px;
    color: var(--secondary-color);
    padding-left: 20px;
    font-style: italic;
  }

  @media only screen and (max-width: 600px) { 
    .stat-modal-body {
      font-size: 12px;
    }

    .stat-modal-body_date {
      font-size: 9px;
    }
  }

  @media only screen and (min-width: 600px) { 
    .stat-modal-body {
      font-size: 12px;
    }

    .stat-modal-body_date {
      font-size: 9px;
    }
  }

  @media only screen and (min-width: 768px) { 
    .stat-modal-body {
      font-size: 16px;
    }

    .stat-modal-body_date {
      font-size: 12px;
    }
  }
  
  @media only screen and (min-width: 992px) { 
    .stat-modal-body {
      font-size: 16px;
    }

    .stat-modal-body_date {
      font-size: 12px;
    }
  }
  
  @media only screen and (min-width: 1200px) { 
    .stat-modal-body {
      font-size: 16px;
    }

    .stat-modal-body_date {
      font-size: 12px;
    }

    .modal-header_title {
      color: var(--green-color);
    }
  }
`;
