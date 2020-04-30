import { css } from 'lit-element';

export default css`
  :host {
    min-height: 200px;
    box-sizing: border-box;
    background-color: #363946;
    border: 1.5px solid white;
    position: relative;
    display: flex;
    flex-basis: 25%;
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
    color: white;
    z-index: 2;
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
    color: white;
    width: 90%;
    height: 30%;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  @keyframes createBox {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;
