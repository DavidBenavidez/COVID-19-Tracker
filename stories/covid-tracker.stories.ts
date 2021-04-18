import { html, TemplateResult } from 'lit-html';
import '../src/covid-tracker.js';

export default {
  title: 'CovidTracker',
  component: 'covid-tracker',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({
  title,
  backgroundColor = 'white',
}: ArgTypes) => html`
  <covid-tracker
    style="--covid-tracker-background-color: ${backgroundColor}"
    .title=${title}
  ></covid-tracker>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
