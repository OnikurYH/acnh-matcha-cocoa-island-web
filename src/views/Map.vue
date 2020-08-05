<template>
    <div class="map">
        <div class="map-info">
            <div v-if="selectedLocation">
                <img
                    class="map-info__icon"
                    v-if="selectedLocation.haveIcon"
                    :src="
                        `/location-icons/${selectedLocation.name}${
                            selectedLocation.suffix ? `-${selectedLocation.suffix}` : ''
                        }.png`
                    "
                />
                <h2 class="map-info__text">
                    {{ selectedLocation.text }}
                </h2>
                <dl class="map-info__detail-list">
                    <dt>{{ $t('map.info.address') }}</dt>
                    <dd>{{ $t('islandName') }}{{ selectedLocation.address }}</dd>
                    <dt v-if="selectedLocation.description">{{ $t('map.info.details') }}</dt>
                    <dd v-if="selectedLocation.description">{{ selectedLocation.description }}</dd>
                </dl>
            </div>
            <div v-else>
                <h2>{{ $t('map.info.noSelect') }}</h2>
            </div>
        </div>
        <div class="map-content" ref="mapContent">
            <div class="map-scroll" ref="mapScroll" :style="{ transform: `scale(${scale}) translate(${x}px, ${y}px)` }">
                <div class="map__heading-container">
                    <h1 class="map__heading">{{ $t('islandName') }}{{ $t('map.name') }}</h1>
                </div>
                <div class="map-container">
                    <img class="map-background" src="../assets/images/map/background.svg" />
                    <MapLocationArea
                        v-for="area in areas"
                        :key="area.text"
                        :value="area"
                        @select="handleClickLocation(area.text)"
                    />
                    <MapLocationBuilding
                        v-for="building in buildings"
                        :key="building.text"
                        :value="building"
                        @select="handleClickLocation(building.text)"
                    />
                </div>
            </div>
            <div class="MapZoom">
                <button class="MapZoomButton _plus" @click="handleZoomIn"><FontAwesomeIcon icon="plus" /></button>
                <button class="MapZoomButton _reset" @click="handleZoomReset">
                    <FontAwesomeIcon icon="circle" />
                </button>
                <button class="MapZoomButton _minus" @click="handleZoomOut"><FontAwesomeIcon icon="minus" /></button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MapLocationBuilding from '../components/MapLocation/Building.vue';
import MapLocationArea from '../components/MapLocation/Area.vue';
import { Location, LocationArea } from '../types';
import { throttle } from '../utils';
import * as config from '../config';

@Component({
    components: {
        MapLocationBuilding,
        MapLocationArea,
    },
})
export default class Map extends Vue {
    public isDragging = false;
    public selectedLocationKey: string | null = null;
    public scale = 1.0;

    public x = 0;
    public y = 0;

    public get areas(): LocationArea[] {
        return config.getAreas(this.$t);
    }

    public get buildings(): Location[] {
        return config.getBuildings(this.$t);
    }

    public throttleHandleScroll!: (event: unknown) => void;

    public mounted() {
        this.throttleHandleScroll = throttle(this.handleScroll.bind(this), 60 / 1000);
        this.$el.addEventListener('wheel', this.throttleHandleScroll);

        this.$el.addEventListener('pointerdown', this.handleMouseDown.bind(this));
        window.addEventListener('pointermove', this.handleMouseMove.bind(this));
        this.$el.addEventListener('pointerup', this.handleMouseUp.bind(this));
        window.addEventListener('pointercancel', () => console.log('fff'));
    }

    public beforeDestroy() {
        this.$el.removeEventListener('wheel', this.throttleHandleScroll);

        this.$el.removeEventListener('pointerdown', this.handleMouseDown.bind(this));
        window.removeEventListener('pointermove', this.handleMouseMove.bind(this));
        this.$el.removeEventListener('pointerup', this.handleMouseUp.bind(this));
    }

    public get selectedLocation() {
        const location =
            this.buildings.find(b => b.text === this.selectedLocationKey) ||
            this.areas.find(a => a.text === this.selectedLocationKey);

        return location;
    }

    public handleMouseDown() {
        this.isDragging = true;
    }

    public handleMouseMove(ev: PointerEvent) {
        if (!this.isDragging) {
            return;
        }

        this.x += ev.movementX;
        this.y += ev.movementY;
    }

    public handleMouseUp() {
        this.isDragging = false;

        // const mapContent = this.$refs.mapContent as HTMLDivElement;
        // const mapScroll = this.$refs.mapScroll as HTMLDivElement;

        // const cBounding = mapContent.getBoundingClientRect();
        // const sBounding = mapScroll.getBoundingClientRect();

        // if (sBounding.x < cBounding.x) {
        //     this.x = sBounding.width / 2 - cBounding.width / 2;
        // } else if (sBounding.x + sBounding.width > cBounding.x + cBounding.width) {
        //     this.x = cBounding.width - (sBounding.width / 2 + cBounding.width / 2);
        // }

        // if (sBounding.y + sBounding.height < cBounding.y + cBounding.height) {
        //     this.y -= sBounding.y + sBounding.height - (cBounding.y + cBounding.height);
        // } else if (sBounding.y > cBounding.y) {
        //     this.y += cBounding.y - sBounding.y;
        // }
    }

    public handleClickLocation(key: string) {
        this.selectedLocationKey = key;
    }

    public handleScroll(ev: MouseWheelEvent) {
        this.scale = Math.max(Math.min(this.scale + 0.1 * (ev.deltaY < 0 ? 1 : -1), 2.0), 0.5);
    }

    public handleZoomIn() {
        this.scale = Math.min(this.scale + 0.1, 2.0);
    }

    public handleZoomReset() {
        this.scale = 1.0;
        this.x = 0;
        this.y = 0;
    }

    public handleZoomOut() {
        this.scale = Math.max(this.scale - 0.1, 0.5);
    }
}
</script>
<style lang="scss">
.map {
    flex: 1;
    background-color: #76c8b5;
    display: flex;
    overflow: hidden;
    flex-direction: column-reverse;
    width: 100vw;
    touch-action: none;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }

    .map-content * {
        user-select: none;
        -webkit-user-drag: none;
    }
}

.map-info {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 0 30px;
    padding-bottom: env(safe-area-inset-bottom);

    @media screen and (min-width: 768px) {
        width: 10vw;
        min-width: 200px;
    }
}

.map-info__icon {
    margin-top: 16px;
    width: 50px;
    height: auto;
}

.map-info__text {
    margin-top: 16px;
    margin-bottom: 16px;
}

.map-info__detail-list {
    line-height: 1.6;

    dt {
        font-weight: bold;
        margin-bottom: 5px;
    }

    dd {
        margin-left: 0;
        margin-bottom: 5px;
    }
}

.map-content {
    position: relative;
    flex: 1;
    overflow: hidden;
}

.MapZoom {
    position: fixed;
    right: 35px;
    top: 100px;
    display: flex;
    flex-direction: column;
    text-align: center;
}

.MapZoomButton {
    cursor: pointer;
    background-color: #eee;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    line-height: 1;
    padding: 10px;
    font-size: 14px;

    &._plus {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    &._minus {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    &._reset {
        border-radius: 0;
    }
}

.map-scroll {
    width: 921px;
    min-width: 921px;
    cursor: move;
    margin: 0 auto;
}

.map__heading-container {
    padding-top: 30px;
    margin-bottom: 0;

    text-align: center;
}

.map__heading {
    color: #837362;
    display: inline-block;
    background-repeat: no-repeat;
    background-size: 100% auto;
    padding: 20px 50px 40px 50px;
    margin: 0;
    background-image: url('../assets/images/map/heading-background.svg');
}

.map-container {
    position: relative;
    height: 768px;
}

.map-background {
    width: 100%;
    pointer-events: none;
}
</style>
