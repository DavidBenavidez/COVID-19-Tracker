import { css } from 'lit-element';

export default css`
    .nav-container .main-title {
      align-self: center;
      font-weight: 900px;
      letter-spacing: 1px;
    }

    .nav-container .nav-container_button {
      --paper-icon-button-ink-color: var(--app-secondary-color);
    }

    .nav-container .nav-container_input {
      --paper-input-container-color: var(--app-secondary-color);
      --paper-input-container-focus-color: var(--app-secondary-color);
      --paper-input-container-invalid-color: red;
      --paper-input-container-input-color: var(--app-secondary-color);
    }

    .nav-container .nav-container_dropdown {
      margin-left: 8px;
      --paper-input-container-color: white;
      --paper-input-container-focus-color: white;
      --paper-input-container-invalid-color: red;
      --paper-input-container-input-color: white;
    }
  `;
