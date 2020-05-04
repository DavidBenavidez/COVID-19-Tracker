import { css } from 'lit-element';

export default css`
    .nav-container .main-title {
      align-self: center;
      font-weight: 900px;
      letter-spacing: 1px;
      color: var(--green-color)
    }

    .nav-container_button {
      --paper-icon-button-ink-color: var(--secondary-color);
    }

    .nav-container_input,
    .nav-container_dropdown {
      --paper-input-container-color: var(--secondary-color);
      --paper-input-container-focus-color: var(--secondary-color);
      --paper-input-container-invalid-color: var(--red-color);
      --paper-input-container-input-color: var(--secondary-color);
    }

    .nav-container_dropdown {
      margin-left: 8px;
    }

    @media only screen and (max-width: 600px) { 
      .toggle-drawer { display: block; }
      
      .main-title,
      .nav-container_button,
      .nav-container_input,
      .nav-container_dropdown {
        display: none;
      }
    }

    @media only screen and (min-width: 600px) { 
      .toggle-drawer { display: block; }

      .main-title,
      .nav-container_button,
      .nav-container_input,
      .nav-container_dropdown {
        display: none;
      }
    }

    @media only screen and (min-width: 768px) { 
      .toggle-drawer { display: none; }

      .main-title,
      .nav-container_button,
      .nav-container_input,
      .nav-container_dropdown {
        display: block;
      }
    }

    @media only screen and (min-width: 992px) { 
      .toggle-drawer { display: none; }

      .main-title,
      .nav-container_button,
      .nav-container_input,
      .nav-container_dropdown {
        display: block;
      }
    }

    @media only screen and (min-width: 1200px) { 
      .toggle-drawer { display: none; }

      .main-title,
      .nav-container_button,
      .nav-container_input,
      .nav-container_dropdown {
        display: block;
      }
    }
  `;
