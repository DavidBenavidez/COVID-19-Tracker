import { css } from 'lit-element';

export default css`
  mil-pulse-spinner {
    --height: 100px;
    --width: 100px;
    --color1: var(--app-primary-color);
    --color2: gray;
  }

  .nav-container {
    height: 60px;
    color: var(--app-secondary-color);
    background-color: var(--app-primary-color);
    z-index: 2;
  }

  #main-content {
    display: flex;
    flex-flow: row wrap;
  }

  #sentinel {
    width: 1px;
    height: 1px;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 600px) { .main-content { flex-flow: column wrap; } }
  @media only screen and (min-width: 600px) { .main-content { flex-flow: column wrap; } }
  @media only screen and (min-width: 768px) { .main-content { flex-flow: column wrap; } }
  @media only screen and (min-width: 992px) { .main-content { flex-flow: row wrap; } }
  @media only screen and (min-width: 1200px) { .main-content { flex-flow: row wrap; } }
`;
