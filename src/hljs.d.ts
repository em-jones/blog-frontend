/* tslint:disable */
import Vue from 'vue';

declare module 'vue/types/vue' {
    // 3. Declare augmentation for Vue
    interface Vue {
        $hljs: {
            highlightBlock: (element: Element) => void
        }
    }
}
