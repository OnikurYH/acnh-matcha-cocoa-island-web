<template>
    <div id="app" :style="{ height: `${rootHeight}px` }">
        <div id="nav" class="TopNav">
            <div class="TopNavContainer">
                <router-link to="/">首頁</router-link> |
                <router-link to="/map">地圖</router-link>
            </div>
        </div>
        <router-view />
        <footer class="footer">
            <p>Copyright &copy; CocoaCaa.work.</p>
            <p>
                <a href="https://www.nintendo.com.hk/switch/animal_crossing_new_horizons/" rel="noopener"
                    >集合啦！動物森友會</a
                >
                是 <a href="https://www.nintendo.com.hk" rel="noopener">Nintendo</a> 版權所有，不屬於本網站
            </p>
        </footer>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Map extends Vue {
    public rootHeight = 0;

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
    margin: 0 auto;
    max-width: 1140px;
}

.footer {
    color: #fff;
    background-color: #2c3e50;
    padding: 5px 15px 0 15px;

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
</style>
