import { html } from 'lit';
import '../src/meme-card-2.js';

export default {
  title: 'MemeCard2',
  component: 'meme-card-2',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <meme-card-2
      style="--meme-card-2-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </meme-card-2>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
