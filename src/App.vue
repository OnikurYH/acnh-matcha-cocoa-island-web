<template>
    <div id="app" :style="{ height: `${rootHeight}px` }">
        <div id="nav" class="TopNav">
            <div class="TopNavContainer">
                <div class="TopNavLeft">
                    <router-link :to="$url('/')">首頁</router-link> |
                    <router-link :to="$url('/map')">地圖</router-link>
                </div>
                <div class="TopNavRight">
                    <router-link :to="changeLanguageUrl">{{ $t('topNav.language') }}</router-link>
                </div>
            </div>
        </div>
        <router-view />
        <footer class="Footer">
            <div class="FooterContainer">
                <p>Copyright &copy; CocoaCaa.work.</p>
                <p>
                    <a href="https://www.nintendo.com.hk/switch/animal_crossing_new_horizons/" rel="noopener"
                        >集合啦！動物森友會</a
                    >
                    是 <a href="https://www.nintendo.com.hk" rel="noopener">Nintendo</a> 版權所有，不屬於本網站
                </p>
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Map extends Vue {
    public rootHeight = 0;

    public get changeLanguageUrl() {
        return `/${this.$lng === 'zh-Hant' ? 'ja-jp' : 'zh-hant'}${this.$route.path.replace(
            `/${this.$lng.toLowerCase()}`,
            '',
        )}`;
    }

    public mounted() {
        window.addEventListener('resize', this.handleResize.bind(this));
        this.handleResize();
    }

    public beforeDestroy() {
        window.removeEventListener('resize', this.handleResize.bind(this));
    }

    public handleResize() {
        this.rootHeight = window.innerHeight;
    }
}
</script>

<style lang="scss">
@import '~normalize.css';

#app {
    font-family: 'Manrope', 'Noto Sans HK', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
}

.TopNav {
    background-color: #2c3e50;
    padding: 30px 0;
    color: #ffffff;

    a {
        font-weight: bold;
        color: #ffffff;
        text-decoration: none;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.TopNavContainer {
    display: flex;
    margin: 0 auto;
    max-width: 1140px;
}

.TopNavRight {
    margin-left: auto;
}

.Footer {
    color: #fff;
    background-color: #2c3e50;
    padding-top: 5px;

    p {
        font-size: 12px;
        margin-top: 0;
        margin-bottom: 5px;
    }

    a {
        color: #42b983;
        text-decoration: none;
    }
}

.FooterContainer {
    margin: 0 auto;
    max-width: 1140px;
}
</style>
