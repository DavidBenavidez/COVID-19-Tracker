import { html, fixture, expect } from '@open-wc/testing';

import { CovidTracker } from '../src/CovidTracker.js';
import '../src/covid-tracker.js';

describe('CovidTracker', () => {
  let element: CovidTracker;
  beforeEach(async () => {
    element = await fixture(html`<covid-tracker></covid-tracker>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
