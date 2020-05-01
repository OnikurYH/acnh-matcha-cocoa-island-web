import Vue, { VueConstructor } from 'vue';
import i18next from 'i18next';

import zhHantTranslation from './locales/zh-hant';
import jaJpTranslation from './locales/ja-jp';

i18next.init({
    lng: 'zh-Hant',
    fallbackLng: 'zh-Hant',
    resources: {
        'zh-Hant': {
            translation: zhHantTranslation,
        },
        'ja-JP': {
            translation: jaJpTranslation,
        },
    },
});

class I18NextPlugin {
    public static install(vue: VueConstructor<Vue>) {
        vue.prototype.$t = i18next.t.bind(i18next);

        Object.defineProperty(vue.prototype, '$lng', {
            get: function() {
                return i18next.language;
            },
        });

        vue.prototype.$url = function(path: string) {
            return `/${this.$lng.toLowerCase()}${path}`;
        };
    }
}

Vue.use(I18NextPlugin);
