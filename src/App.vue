<template>
    <div id="app" :style="{ height: `${rootHeight}px` }">
        <div id="nav">
            <router-link to="/">首頁</router-link> |
            <router-link to="/map">地圖</router-link>
        </div>
        <router-view />
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

#nav {
    background-color: #2c3e50;
    padding: 30px;
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
</style>
