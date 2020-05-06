import { css } from 'lit-element';

export default css`
  .nav-container .main-title {
    align-self: center;
    font-weight: 900px;
    letter-spacing: 1px;
    color: var(--background-color);
  }

  .nav-container_input {
    --paper-input-container-color: var(--surface-color);
    --paper-input-container-focus-color: var(--surface-color);
    --paper-input-container-invalid-color: var(--red-color);
    --paper-input-container-input-color: var(--surface-color);
  }

  #sort-country-input {
    width: 100px;
    height: 40px;
    margin-left: 20px;
    background-color: var(--surface-color-lighter);
    border: none;
    color: var(--on-surface-color);
    font-family: 'Montserrat', sans-serif;
  }

  @media only screen and (max-width: 600px) { 
    .toggle-drawer { display: block; }
    
    .main-title,
    .nav-container_button,
    .nav-container_input,
    #sort-country-input {
      display: none;
    }
  }

  @media only screen and (min-width: 600px) { 
    .toggle-drawer { display: block; }

    .main-title,
    .nav-container_button,
    .nav-container_input,
    #sort-country-input {
      display: none;
    }
  }

  @media only screen and (min-width: 768px) { 
    .toggle-drawer { display: none; }

    .main-title,
    .nav-container_button,
    .nav-container_input,
    #sort-country-input {
      display: block;
    }
  }

  @media only screen and (min-width: 992px) { 
    .toggle-drawer { display: none; }

    .main-title,
    .nav-container_button,
    #sort-country-input,
    .nav-container_input {
      display: block;
    }
  }

  @media only screen and (min-width: 1200px) { 
    .toggle-drawer { display: none; }

    .main-title,
    .nav-container_button,
    .nav-container_input,
    #sort-country-input {
      display: block;
    }
  }

  @media (prefers-color-scheme: dark) {
    .nav-container_input {
      --paper-input-container-color: var(--on-surface-color);
      --paper-input-container-focus-color: var(--on-surface-color);
      --paper-input-container-invalid-color: var(--red-color);
      --paper-input-container-input-color: var(--on-surface-color);
    }

    .nav-container .main-title {
      color: var(--on-surface-color);
    }
  }
`;
