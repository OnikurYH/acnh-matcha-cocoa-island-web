<template>
    <div class="HomeContainer">
        <div class="HomeHeader">
            <div class="HomeHeaderUpper">
                <video class="HomeHeaderBackgroundVideo" muted autoplay loop playsinline>
                    <source src="../assets/videos/home-video.mp4" type="video/mp4" />
                </video>
                <div class="HomeHeaderBackgroundVideoOverlay" />
                <div class="HomeHeaderBannerContent">
                    <h1 class="HomeHeaderHeading" v-html="$t('home.heading')" />
                    <div class="HomeHeaderDreamId">
                        {{ $t('home.dreamId.label') }}
                        <span class="HomeHeaderDreamIdValue">{{ $t('home.dreamId.value') }}</span>
                    </div>
                    <div class="HomeHeaderButtons">
                        <router-link class="HomeHeaderCTA" :to="`${$url('/map')}`">{{ $t('home.cta') }}</router-link>
                        <button class="HomeHeaderSecondButton" @click="handleGoToLearnMore">
                            {{ $t('home.learnMore') }}
                        </button>
                    </div>
                </div>
            </div>
            <div class="HomeHeaderLower">
                <FontAwesomeIcon class="HomeHeaderLowerArrow" icon="arrow-down" />
            </div>
        </div>
        <div class="HomeMediaSection ContentContainer" ref="learnMore">
            <img class="HomeMediaSectionLeft" src="/static/images/home/intro.png" />
            <div class="HomeMediaSectionRight">
                <h2 class="HomeMediaSectionHeading">{{ $t('home.intro.heading') }}</h2>
                <p>{{ $t('home.intro.content') }}</p>
            </div>
        </div>
        <div class="HomePreviewSection">
            <div class="ContentContainer">
                <h2 class="HomePreviewSectionHeading">{{ $t('home.preview.heading') }}</h2>
                <SlideShow :value="slideShowValue" />
            </div>
        </div>
        <div class="HomeFullBackgroundSection HomeEventSection">
            <div class="ContentContainer">
                <h2 class="HomeFullBackgroundSectionHeading">{{ $t('home.events.heading') }}</h2>
                <p class="HomeFullBackgroundSectionContent">{{ $t('home.events.content') }}</p>
            </div>
        </div>
        <div class="HomeMediaSection ContentContainer">
            <img class="HomeMediaSectionLeft" src="/static/images/home/cocoacaa.png" />
            <div class="HomeMediaSectionRight">
                <h2 class="HomeMediaSectionHeading">{{ $t('home.cocoacaa.heading') }}</h2>
                <p>{{ $t('home.cocoacaa.content') }}</p>
            </div>
        </div>
        <div class="HomeVisitNowSection">
            <div class="ContentContainer">
                <h2 class="HomeVisitNowSectionHeading" v-html="$t('home.visitNow.heading')" />
                <div class="HomeVisitNowSectionViaDreameTitle">{{ $t('home.visitNow.viaDream.title') }}</div>
                <div class="HomeVisitNowSectionViaDreameId">{{ $t('home.visitNow.viaDream.id') }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SlideShow, { SlideShowValueItem } from '../components/SlideShow.vue';

@Component({
    components: {
        SlideShow,
    },
})
export default class Home extends Vue {
    public slideShowValue: SlideShowValueItem[] = [];

    public mounted() {
        this.slideShowValue = [1, 2, 3, 4, 5, 6, 7].map((id) => ({
            id: `${id}`,
            thumbnail: `/static/images/home/envs/env-${id}-thumbnail.png`,
            original: `/static/images/home/envs/env-${id}.png`,
        }));
    }

    public handleGoToLearnMore() {
        const learnMore = this.$refs.learnMore as HTMLElement;
        this.$el.scrollTo(0, learnMore.offsetTop - 120);
    }
}
</script>

<style lang="scss">
.HomeContainer {
    flex: 1;
    overflow: auto;
    scroll-behavior: smooth;
}

.HomeHeader {
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
}

.HomeHeaderUpper {
    position: relative;
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 30px 0;
}

.HomeHeaderLower {
    text-align: center;
    padding: 10px 0;
    text-align: center;
    font-size: 26px;
    color: #42b983;
}

.HomeHeaderLowerArrow {
    animation: HomeHeaderLowerArrow 1s forwards infinite;
}

@keyframes HomeHeaderLowerArrow {
    0% {
        transform: translateY(-5px);
    }

    50% {
        transform: translateY(5px);
    }

    100% {
        transform: translateY(-5px);
    }
}

.HomeHeaderHeading {
    font-size: 48px;
    margin-top: 0;
    line-height: 1.3;
    margin-bottom: 10px;

    > small {
        display: block;
        font-size: 0.5em;
    }
}

.HomeHeaderDreamId {
    font-size: 16px;
    margin-bottom: 10px;
}

.HomeHeaderDreamIdValue {
    color: #39c2dc;
    font-weight: bold;
    margin-left: 10px;
    font-size: 18px;

    @media screen and (min-width: 768px) {
        font-size: 24px;
    }
}

.HomeHeaderCTA,
.HomeHeaderSecondButton {
    display: inline-block;
    padding: 15px 35px;
    border-radius: 5px;
    font-size: 20px;
    text-decoration: none;
    line-height: 1.3;
    cursor: pointer;
}

.HomeHeaderButtons {
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
}

.HomeHeaderCTA {
    background-color: #42b983;
    color: #fff;
    transition: 200ms background-color;
    will-change: background-color;

    &:hover {
        background-color: #329267;
    }
}

.HomeHeaderSecondButton {
    border: 1px solid #42b983;
    color: #42b983;
    background-color: #fff;
    transition: 200ms background-color, 200ms color;
    will-change: background-color, color;
    margin-top: 10px;

    &:hover {
        background-color: #42b983;
        color: #fff;
    }

    @media screen and (min-width: 768px) {
        margin-top: 0;
        margin-left: 10px;
    }
}

.HomeHeaderBackgroundVideo,
.HomeHeaderBackgroundVideoOverlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.HomeHeaderBackgroundVideoOverlay {
    background-color: rgba(0, 0, 0, 0.3);
}

.HomeHeaderBannerContent {
    position: relative;
    text-align: center;
}

.HomePreviewSection {
    background-color: rgb(232, 243, 255);
    padding-top: 20px;

    @media screen and (min-width: 768px) {
        padding-top: 60px;
        padding-bottom: 60px;
    }
}

.HomePreviewSectionHeading {
    line-height: 1;
    margin-left: 20px;
    margin-right: 20px;

    @media screen and (min-width: 768px) {
        margin-left: 0;
        margin-right: 0;
    }
}

.HomeMediaSection {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;

    &._invert {
        flex-direction: column-reverse;
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;
        margin-bottom: 60px;

        &._invert {
            flex-direction: row;
        }
    }
}

.HomeMediaSection:not(._invert) .HomeMediaSectionLeft,
.HomeMediaSection._invert .HomeMediaSectionRight {
    width: 100%;
    min-width: 100%;
    height: auto;
    overflow: hidden;
    margin-top: 0;

    @media screen and (min-width: 768px) {
        width: 400px;
        min-width: 400px;
        border-radius: 5px;
    }
}

.HomeMediaSectionRight {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;

    @media screen and (min-width: 768px) {
        margin-right: 0;
    }
}

.HomeMediaSection._invert .HomeMediaSectionLeft {
    flex: 1;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;

    @media screen and (min-width: 768px) {
        margin-top: 0;
        margin-left: 0;
        margin-right: 0;
    }
}

.HomeFullBackgroundSection {
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    padding-top: 60px;
    padding-bottom: 60px;
    margin-bottom: 20px;
    text-align: center;

    @media screen and (min-width: 768px) {
        margin-bottom: 60px;
    }
}

.HomeFullBackgroundSectionHeading {
    color: #fff !important;
    text-shadow: 1px 1px 0 #000;
}

.HomeFullBackgroundSectionContent {
    display: block;
    margin: 0 auto;
    max-width: 500px;
    text-shadow: 1px 1px 0 #000;

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }
}

.HomeEventSection {
    background-image: url('/static/images/home/night-2.png');
    color: #fff;
    margin-bottom: 0;

    @media screen and (min-width: 768px) {
        min-height: 300px;
        margin-bottom: 60px;
    }
}

.HomeVisitNowSection {
    text-align: center;
    background-color: #442e42;
    padding-top: 20px;
    color: #fff;

    @media screen and (min-width: 768px) {
        padding-top: 60px;
        padding-bottom: 60px;
    }
}

.HomeVisitNowSectionHeading {
    color: #fff !important;
}

.HomeVisitNowSectionViaDreameTitle {
    font-size: 20px;
}

.HomeVisitNowSectionViaDreameId {
    font-size: 30px;
    color: #39c2dc;
    font-weight: bold;
}

.HomeMediaSectionHeading,
.HomePreviewSectionHeading,
.HomeFullBackgroundSectionHeading,
.HomeVisitNowSectionHeading {
    margin-top: 0;
    color: #2c3e50;
    font-size: 24px;
    line-height: 1;

    @media screen and (min-width: 768px) {
        font-size: 30px;
    }
}
</style>
