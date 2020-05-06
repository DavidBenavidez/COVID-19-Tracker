import { css } from 'lit-element';

export default css`
  :host {
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    background-color: var(--background-color);
  }

  #covid-news-loader,
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

  #sentinel, #sentinel-dropdown {
    width: 100%;
    height: 1px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }

  #news-search_input {
    --paper-input-container-color: var(--on-surface-color);
    --paper-input-container-focus-color: var(--on-surface-color);
    --paper-input-container-invalid-color: var(--red-color);
    --paper-input-container-input-color: var(--on-surface-color);
    max-width: 100%;
    height: 40px;
    margin-left: 20px;
    margin-bottom: 20px;
    font-family: 'Montserrat', sans-serif;
  }

  .news-search {
    position: relative;
  }

  #news-search_suggestions {
    color: black;
    margin-left: 5%;
  }

  .main-title {
    color: var(--on-surface-color);
    font-weight: 400;
    margin-left: 20px;
    width: 100%;
  }

  .empty-placeholder {
    color: var(--on-surface-color);
    vertical-align: middle;
    text-align: center;
    margin: unset;
    margin-left: 20px;
    margin-top: 35px;
    padding: unset;
  }

  .article-container {
    display: flex;
    align-items: flex-start;
    flex-flow: column wrap;
    background-color: var(--surface-color);
    color: var(--on-surface-color);
    width: 100%;
    min-height: 30vh;
    margin: 20px;
    padding: 20px;
    animation: .25s createBox;
  }

  .article-content {
    display: flex;
    flex-direction: row;
    justify-content: space-around; 
    align-items: center;
  }

  .article-title {
    text-decoration: none;
    pointer: cursor;
    font-weight: 400;
    color: var(--primary-color);
  }

  .article-date {
    font-size: 12px;
    font-style: italic;
    margin: -10px 0 10px 0;
  }

  .article-content_content {
    max-width: 750px;
    margin: 10px 0;
    display: block;
    text-align: justify;
  }

  
  @media only screen and (max-width: 600px) {
    .article-content_image {
      max-width: 200px;
    }

    .article-container {
      align-items: center;
    }

    .article-content {
      flex-direction: column;
      align-items: center;
    }
  }

  @media only screen and (min-width: 600px) { 
    .article-container {
      align-items: center;
    }

    .article-content {
      flex-direction: column;
      align-items: center;
    }
  }

  @media only screen and (min-width: 768px) {
    .article-container {
      align-items: center;
    }

    .article-content {
      flex-direction: row;
      align-items: flex-start;
    }
  }

  @media only screen and (min-width: 992px) { 
    .article-container {
      align-items: flex-start;
    }

    .article-content {
      flex-direction: row;
      align-items: flex-start;
    }
  }

  @media only screen and (min-width: 1200px) { 
    .article-container {
      align-items: flex-start;
    }

    .article-content {
      flex-direction: row;
    }
  }
`;
