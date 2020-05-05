import { css } from 'lit-element';

export default css`
  mil-pulse-spinner {
    --height: 100px;
    --width: 100px;
    --color1: var(--primary-color);
    --color2: var(--secondary-color);
  }

  app-drawer {
    z-index: 3;
  }

  .nav-container {
    height: 60px;
    color: var(--background-color);
    background-color: var(--primary-color);    
  }

  #main-content {
    display: flex;
    flex-flow: row wrap;
    background-color: var(--background-color)
  }

  #sentinel {
    width: 1px;
    height: 1px;
    margin-bottom: 20px;
  }

  #filter-modal {
    color: white;
  }

  .filter-modal-header {
    padding-left: 20px;
    color: var(--secondary-color);
  } 

  .filter-modal-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .filter-modal-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-left: 20px;
  }

  .search-country-input,
  .sort-country-input {
    --paper-input-container-color: var(--secondary-color);
    --paper-input-container-focus-color: var(--secondary-color);
    --paper-input-container-invalid-color: var(--red-color);
    --paper-input-container-input-color: var(--secondary-color);
    align-self: flex-start;
  }

  nega-autocomplete.styled {
    width: 50%;
    color: var(--primary-color);
  }

  .dropdown-content {
    --paper-listbox-background-color: var(--surface-color);
    --paper-listbox-color: var(--secondary-color)
  }

  @media only screen and (max-width: 600px) { .main-content { flex-flow: column wrap; } }
  @media only screen and (min-width: 600px) { .main-content { flex-flow: column wrap; } }
  @media only screen and (min-width: 768px) { .main-content { flex-flow: column wrap; } }
  @media only screen and (min-width: 992px) { .main-content { flex-flow: row wrap; } }
  @media only screen and (min-width: 1200px) { .main-content { flex-flow: row wrap; } }

  
  @media (prefers-color-scheme: dark) {
    .nav-container {
      color: var(--secondary-color);
      background-color: var(--background-color);
    }

    nega-autocomplete.styled {
      color: var(--secondary-color);
    }
  }
`;
