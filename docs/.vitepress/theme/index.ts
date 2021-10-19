import DefaultTheme from 'vitepress/theme';

import MoButton from '../../../packages/components/button/src/button.vue';
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component('MoButton', MoButton)
  }
}