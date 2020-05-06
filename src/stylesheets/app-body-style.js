import { css } from 'lit-element';

export default css`
  #app-body-loader,
  #lazy-loading-loader {
    --height: 100px;
    --width: 100px;
    --color1: var(--primary-color);
    --color2: var(--secondary-color);
  }

  #lazy-loading-loader {
    --height: 50px;
    --width: 50px;
  }

  app-drawer {
    z-index: 3;
  }

  #route-link {
    height: 30px;
    width: auto;
    margin-right: 10px;
  }

  #route-link:hover {
    filter: brightness(1.75);
  }

  .nav-container {
    color: var(--background-color);
    background-color: var(--on-surface-color);    
  }
  
  #home-content {
    display: flex;
    flex-flow: row wrap;
  }

  #sentinel {
    width: 100%;
    height: 1px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }

  .filter-modal-header,
  .statistics-modal-header {
    padding-left: 20px;
    color: var(--primary-color);
  } 

  .filter-modal-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .filter-modal-footer_button {
    color: var(--primary-color);
  }

  .filter-modal-body,
  .statistics-modal-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-left: 20px;
    color: var(--on-surface-color);
    overflow: auto;
  }
  
  .world-stat_value {
    font-weight: bold;
    font-size: 32px;
  }

  .world-stat_label {
    color: var(--primary-color);
  }

  .world-stat_date {
    font-size: 12px;
    font-style: italic;
  }

  #search-country-input,
  #sort-country-input {
    --paper-input-container-color: var(--on-surface-color);
    --paper-input-container-focus-color: var(--on-surface-color);
    --paper-input-container-invalid-color: var(--red-color);
    --paper-input-container-input-color: var(--on-surface-color);
    align-self: flex-start;
  }

  #country-suggestions {
    margin-left: 5%;
    color: black
  }

  #sort-country-input {
    width: 150px;
    height: 40px;
    margin-top: 30px;
    background-color: var(--surface-color-lighter);
    border: none;
    color: var(--on-surface-color);
    font-family: 'Montserrat', sans-serif;
  }

  @media only screen and (max-width: 600px) { .main-content { flex-flow: column wrap; } }
  @media only screen and (min-width: 600px) { .main-content { flex-flow: column wrap; } }
  @media only screen and (min-width: 768px) { .main-content { flex-flow: column wrap; } }
  @media only screen and (min-width: 992px) { .main-content { flex-flow: row wrap; } }
  @media only screen and (min-width: 1200px) { .main-content { flex-flow: row wrap; } }
  
  @media (prefers-color-scheme: dark) {
    .nav-container {
      color: var(--on-surface-color);
      background-color: var(--background-color);
    }

    .filter-modal-footer_button {
      color: var(--primary-color);
    }
  }
`;
