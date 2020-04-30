<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">首頁</router-link> |
            <router-link to="/map">地圖</router-link>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss">
@import '~normalize.css';

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
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
