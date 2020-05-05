<template>
    <div class="map" @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp">
        <div class="map-info">
            <div v-if="selectedLocation">
                <h2>{{ selectedLocation.text }}</h2>
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
            <div class="map-scroll" :style="{ transform: `scale(${this.scale})` }">
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

@Component({
    components: {
        MapLocationBuilding,
        MapLocationArea,
    },
})
export default class Map extends Vue {
    public areas: LocationArea[] = [
        {
            name: 'shopping',
            text: this.$t('map.areas.shopping.text'),
            address: '中央區',
            x: 38.4,
            y: 61,
            type: 'street',
            width: 14.8,
            height: 14.8,
            color: 'rgba(187, 255, 239, 0.5)',
        },
        {
            name: 'cultural-exchange',
            text: this.$t('map.areas.cultural-exchange.text'),
            address: '中央區',
            x: 38.4,
            y: 76.5,
            type: 'street',
            width: 8.8,
            height: 7.8,
            color: 'rgba(255, 255, 255, 0.5)',
        },
        {
            name: 'public-arts-stage',
            text: this.$t('map.areas.public-arts-stage.text'),
            address: '中央區',
            x: 47.9,
            y: 76.5,
            type: 'street',
            width: 4.9,
            height: 7.8,
            color: 'rgba(167, 167, 167, 0.5)',
        },
        {
            name: 'university',
            text: this.$t('map.areas.university.text'),
            address: '中央區大學道 2-3 號',
            x: 67,
            y: 75.2,
            type: 'street',
            width: 16.8,
            height: 8.8,
            color: 'rgba(255, 187, 187, 0.5)',
        },
        {
            name: 'car-park',
            text: this.$t('map.areas.car-park.text'),
            address: '中央區大學道 1 號',
            x: 56.9,
            y: 75.2,
            type: 'street',
            width: 9.8,
            height: 8.8,
            color: 'rgba(255, 237, 187, 0.5)',
        },
        {
            name: 'toilet',
            text: this.$t('map.areas.toilet.text'),
            address: '中央區大學道 4 號 / 中央區中間道 1 號',
            x: 68.4,
            y: 59.8,
            type: 'street',
            width: 3.8,
            height: 6.9,
            color: 'rgba(193, 143, 0, 0.5)',
        },
        {
            name: 'shop',
            text: this.$t('map.areas.shop.text'),
            address: '中央區大學道 5 號 / 中央區中間道 2 - 3 號',
            x: 72.9,
            y: 59.8,
            type: 'street',
            width: 10.9,
            height: 6.9,
            color: 'rgba(82, 255, 167, 0.5)',
            description: '全店免費，歡迎帶走物品，每天 24 小時營業',
        },
        {
            name: 'restaurant',
            text: this.$t('map.areas.restaurant.text'),
            address: '中央區中間道 4 - 6 號',
            x: 68.4,
            y: 41.8,
            type: 'street',
            width: 15.4,
            height: 5.5,
            color: 'rgba(255, 82, 226, 0.5)',
        },
        {
            name: 'coastal-park',
            text: this.$t('map.areas.coastal-park.text'),
            address: '中央區傑克街 3 號',
            x: 13.1,
            y: 74.6,
            type: 'street',
            width: 21.4,
            height: 20,
            color: 'rgba(255, 82, 226, 0.5)',
        },
        {
            name: 'peaches',
            text: this.$t('map.areas.peaches.text'),
            address: '農場',
            x: 80.1,
            y: 12.6,
            type: 'street',
            width: 8.4,
            height: 24,
            color: 'rgba(255, 153, 233, 0.5)',
        },
        {
            name: 'apples',
            text: this.$t('map.areas.apples.text'),
            address: '農場',
            type: 'street',
            x: 68.1,
            y: 27.6,
            width: 11.4,
            height: 9,
            color: 'rgba(255, 153, 153, 0.5)',
        },
        {
            name: 'oranges',
            text: this.$t('map.areas.oranges.text'),
            address: '農場',
            type: 'street',
            x: 53.1,
            y: 27.6,
            width: 14.4,
            height: 9,
            color: 'rgba(255, 191, 153, 0.5)',
        },
        {
            name: 'flowers',
            text: this.$t('map.areas.flowers.text'),
            address: '半山區農場',
            type: 'street',
            x: 59.1,
            y: 12.6,
            width: 20.4,
            height: 12,
            color: 'rgba(230, 96, 255, 0.5)',
        },
        {
            name: 'bridge-home',
            text: this.$t('map.areas.bridge-home.text'),
            address: '住宅區',
            x: 35.2,
            y: 71.6,
            type: 'bridge',
            width: 2.5,
            height: 1.5,
        },
        {
            name: 'bridge-home-2',
            text: this.$t('map.areas.bridge-home-2.text'),
            address: '住宅區',
            x: 44.1,
            y: 49.2,
            type: 'bridge',
            width: 2.5,
            height: 1.5,
        },
        {
            name: 'bridge-center',
            text: this.$t('map.areas.bridge-center.text'),
            address: '住宅區',
            x: 61.3,
            y: 43.7,
            type: 'bridge',
            width: 2.5,
            height: 1.5,
        },
    ];

    public isDragging = false;
    public selectedLocationKey: string | null = null;
    public scale = 1.0;

    public get buildings(): Location[] {
        return [
            {
                name: 'street-home-1-2',
                text: this.$t('map.buildings.street-home-1-2.text'),
                address: '住宅區',
                x: 13,
                y: 70.7,
                width: 203,
            },
            {
                name: 'street-home-3-4',
                text: this.$t('map.buildings.street-home-3-4.text'),
                address: '住宅區',
                x: 13,
                y: 60,
                width: 123,
            },
            {
                name: 'street-home-5-10',
                text: this.$t('map.buildings.street-home-5-10.text'),
                address: '住宅區',
                x: 13,
                y: 48.5,
                width: 285,
            },
            {
                name: 'street-home-center',
                text: this.$t('map.buildings.street-home-center.text'),
                address: '住宅區',
                x: 26.4,
                y: 32.5,
                width: 30,
            },
            {
                name: 'street-university-road',
                text: this.$t('map.buildings.street-university-road.text'),
                address: '中央區',
                x: 53.4,
                y: 67.5,
                width: 286,
            },
            {
                name: 'street-airport-road',
                text: this.$t('map.buildings.street-airport-road.text'),
                address: '中央區',
                x: 53.4,
                y: 75.2,
                width: 30,
            },
            {
                name: 'street-farm-road',
                text: this.$t('map.buildings.street-farm-road.text'),
                address: '中央區',
                x: 63.8,
                y: 43.3,
                width: 42,
            },
            {
                name: 'street-east-coastal-road',
                text: this.$t('map.buildings.street-east-coastal-road.text'),
                address: '中央區',
                x: 84.5,
                y: 42,
                width: 30,
            },
            {
                name: 'street-center-road',
                text: this.$t('map.buildings.street-center-road.text'),
                address: '中央區',
                x: 68.4,
                y: 48,
                width: 148,
            },
            {
                name: 'street-museum-road',
                text: this.$t('map.buildings.street-museum-road.text'),
                address: '中央區',
                x: 47.2,
                y: 43.1,
                width: 129,
            },
            {
                name: 'center',
                text: this.$t('map.buildings.center.text'),
                address: '中間道 1 號',
                x: 55.5,
                y: 60.5,
            },
            {
                name: 'airport',
                text: this.$t('map.buildings.airport.text'),
                address: '機場道 1 號',
                x: 55.5,
                y: 87.5,
            },
            {
                name: 'shop',
                text: this.$t('map.buildings.shop.text'),
                address: '中央區商店街 1 號',
                x: 45.5,
                y: 61.5,
                description: '出售各式各樣商品，高價收購 2 件物品，每天 8:00am ～ 10:00pm 營業',
            },
            {
                name: 'museum',
                text: this.$t('map.buildings.museum.text'),
                address: '山頂博物館道 1 號',
                x: 51.5,
                y: 13.5,
            },
            {
                name: 'cloth',
                text: this.$t('map.buildings.cloth.text'),
                address: '中央區商店街 2 號',
                x: 38.9,
                y: 61.5,
                description: '出售成衣，每天 9:00am ～ 9:00pm 營業',
            },
            {
                name: 'camp',
                text: this.$t('map.buildings.camp.text'),
                address: '居民中間街 1 號',
                x: 30,
                y: 51.5,
            },
            {
                name: 'ship',
                text: this.$t('map.buildings.ship.text'),
                address: '後岸海灘',
                x: 47,
                y: 1.5,
            },
            {
                name: 'home',
                text: this.$t('map.buildings.home-raymond.text'),
                suffix: '1',
                address: '傑克街 1 號',
                x: 14,
                y: 65.5,
            },
            {
                name: 'home',
                text: this.$t('map.buildings.home-chrissy.text'),
                suffix: '2',
                address: '傑克街 2 號',
                x: 22,
                y: 65.5,
            },
            {
                name: 'home',
                text: this.$t('map.buildings.home-bettina.text'),
                suffix: '3',
                address: '丸阿街 1 號',
                x: 14,
                y: 53,
            },
            {
                name: 'home',
                text: this.$t('map.buildings.home-walker.text'),
                suffix: '4',
                address: '丸阿街 2 號',
                x: 22,
                y: 53,
            },
            {
                name: 'home',
                text: this.$t('map.buildings.home-plucky.text'),
                suffix: '5',
                address: '橫民街 1 號',
                x: 14,
                y: 40,
            },
            {
                name: 'home',
                text: this.$t('map.buildings.home-marshal.text'),
                suffix: '6',
                address: '橫民街 2 號',
                x: 22,
                y: 40,
            },
            {
                name: 'home',
                text: this.$t('map.buildings.home-agent-s.text'),
                suffix: '7',
                address: '居民中間街 2 號',
                x: 20,
                y: 33,
            },
            {
                name: 'home',
                text: this.$t('map.buildings.home-hamlet.text'),
                suffix: '8',
                address: '居民中間街 3 號',
                x: 32,
                y: 33,
            },
            {
                name: 'home',
                text: this.$t('map.buildings.home-biskit.text'),
                suffix: '9',
                address: '橫民街 3 號',
                x: 30,
                y: 40,
            },
            {
                name: 'home',
                text: this.$t('map.buildings.home-kidd.text'),
                suffix: '10',
                address: '橫民街 4 號',
                x: 39,
                y: 40,
            },
            {
                name: 'my-home',
                text: this.$t('map.buildings.home-cocoacaa.text'),
                suffix: '10',
                address: '半山區',
                x: 25,
                y: 13,
            },
        ];
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

    public handleMouseMove(ev: MouseEvent) {
        if (!this.isDragging) {
            return;
        }
        const mapContent = this.$refs.mapContent as HTMLElement;
        mapContent.scrollLeft -= ev.movementX;
        mapContent.scrollTop -= ev.movementY;
    }

    public handleMouseUp() {
        this.isDragging = false;
    }

    public handleClickLocation(key: string) {
        this.selectedLocationKey = key;
    }

    public handleZoomIn() {
        this.scale = Math.min(this.scale + 0.1, 2.0);
    }

    public handleZoomReset() {
        this.scale = 1.0;
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
    touch-action: manipulation;

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
    overflow: auto;
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
    cursor: move;
    transform-origin: left;
}

.map__heading-container {
    margin-top: 30px;
    margin-bottom: 60px;

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
