import Vue from 'vue';
import { TFunction } from 'i18next';

declare module 'vue/types/vue' {
    interface Vue {
        $t: TFunction;
        $lng: string;
        $url: (path: string) => string;
    }
}
