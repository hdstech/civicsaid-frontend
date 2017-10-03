import { configure } from '@kadira/storybook';
import '../src/styles/Main.css';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
