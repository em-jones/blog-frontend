import _Vue from 'vue';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);
document.querySelectorAll('pre code').forEach((block: Element) => {
    hljs.highlightBlock(block);
});

export function VueHLJS(Vue: typeof _Vue) {
    Vue.prototype.$hljs = hljs;
}
