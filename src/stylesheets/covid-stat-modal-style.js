import { css } from 'lit-element';

export default css`
    #modal-overlay {
      position: fixed; /* Sit on top of the page content */
      display: none; /* Hidden by default */
      width: 100%; /* Full width (cover the whole page) */
      height: 100%; /* Full height (cover the whole page) */
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.5); /* Black background with opacity */
      z-index: 3; /* Specify a stack order in case you're using a different order for other elements */
      cursor: pointer;
    }

    #stat-modal {
      color: red;
      height: 700px;
      width: 500px;
      background-color: #363946;
      display: flex;
      justify-content: center;
      flex-flow: row wrap;
      cursor: default;
    }

    .modal-header {
      background-color: white;
      height: 30%;
      width: 85%;
    }
    
    .modal-body {
      background-color: white;
      height: 70%;
      width: 85%;
    }
  `;
