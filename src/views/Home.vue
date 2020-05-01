<template>
    <div class="Home">
        <video class="HomeBackgroundVideo" preload="auto" autoplay loop>
            <source src="../assets/videos/front-video.mp4" type="video/mp4" />
        </video>
        <div class="HomeBackgroundVideoOverlay" />
        <div class="HomeBannerContent">
            <h1 class="HomeHeading" v-html="$t('home.heading')" />
            <router-link class="HomeCTA" :to="`${$url('/map')}`">{{ $t('home.cta') }}</router-link>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>

<style lang="scss">
.Home {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    color: #fff;
}

.HomeHeading {
    font-size: 48px;
    margin-top: 0;
    line-height: 1.3;

    > small {
        display: block;
        font-size: 0.5em;
    }
}

.HomeCTA {
    background-color: #42b983;
    padding: 15px 35px;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    transition: 200ms background-color;

    &:hover {
        background-color: #329267;
    }
}

.HomeBackgroundVideo,
.HomeBackgroundVideoOverlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.HomeBackgroundVideoOverlay {
    background-color: rgba(0, 0, 0, 0.3);
}

.HomeBannerContent {
    position: relative;
    text-align: center;
}
</style>
