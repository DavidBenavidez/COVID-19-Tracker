import { css } from 'lit-element';

export default css`
    :host {
      display: none;
    }

    #modal-overlay {
      position: fixed; /* Sit on top of the page content */
      width: 100%; /* Full width (cover the whole page) */
      height: 100%; /* Full height (cover the whole page) */
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.5); /* Black background with opacity */
      z-index: 1; /* Specify a stack order in case you're using a different order for other elements */
      cursor: default;
    }

    .modal-container {
      background-color: var(--surface-color-lighter);
      position: fixed;
      height: 50vh;
      width: 400px;
      left: 50%;
      margin-left: -200px;
      bottom: 20%;
      justify-content: center;
      flex-flow: row wrap;
      cursor: default;
      z-index: 2;
      animation: .25s createBox;
    }

    .modal-header {
      height: 20%;
      width: 100%;
    }
    
    .modal-body {
      height: 60%;
      width: 100%;
    }

    .modal-footer {
      height: 20%;
      width: 100%;
    }

    .modal-close {
      color: var(--secondary-color);
      position: absolute;
      right: 0;
    }

    @media only screen and (max-width: 600px) { 
      .modal-container { 
        height: 300px;
        width: 300px;
        margin-left: -150px;
        bottom: 30%;
      }
    }

    @media only screen and (min-width: 600px) { 
      .modal-container { 
        height: 300px;
        width: 400px;
        margin-left: -200px;
        bottom: 30%;
      } 
    }

    @media only screen and (min-width: 768px) { 
      .modal-container { 
        height: 500px;
        width: 400px;
        margin-left: -200px;
        bottom: 10%;
      } 
    }

    @media only screen and (min-width: 992px) { 
      .modal-container { 
        height: 500px; 
        bottom: 10%;
        width: 400px;
        margin-left: -200px;
      } 
    }

    @media only screen and (min-width: 1200px) { 
      .modal-container { 
        height: 500px; 
        bottom: 10%;
        width: 400px;
        margin-left: -200px;
      } 
    }

    @media (prefers-color-scheme: dark) {
      .modal-container {
        background-color: var(--surface-color);
      }
    }
  `;
