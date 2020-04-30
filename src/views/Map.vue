<template>
    <div class="map" @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp">
        <div v-if="selectedLocation" class="map-info">
            <h2>{{ selectedLocation.text }}</h2>
            <dl class="map-info__detail-list">
                <dt>地址</dt>
                <dd>抹茶可可島{{ selectedLocation.address }}</dd>
            </dl>
        </div>
        <div class="map-content" ref="mapContent">
            <div class="map-scroll">
                <div class="map__heading-container">
                    <h1 class="map__heading">抹茶可可島地圖</h1>
                </div>
                <div class="map-container">
                    <img class="map-background" src="../assets/images/map/background.svg" />
                    <MapLocationArea
                        v-for="area in areas"
                        :key="area.text"
                        :value="area"
                        @click="handleClickLocation"
                    />
                    <MapLocationBuilding
                        v-for="building in buildings"
                        :key="building.text"
                        :value="building"
                        @click="handleClickLocation"
                    />
                </div>
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
    public buildings: Location[] = [
        {
            name: 'street-home-1-2',
            text: '傑克街',
            address: '住宅區',
            x: 13,
            y: 70.7,
            width: 203,
        },
        {
            name: 'street-home-3-4',
            text: '丸阿街',
            address: '住宅區',
            x: 13,
            y: 60,
            width: 123,
        },
        {
            name: 'street-home-5-10',
            text: '橫民街',
            address: '住宅區',
            x: 13,
            y: 48.5,
            width: 285,
        },
        {
            name: 'street-home-center',
            text: '居民中間街',
            address: '住宅區',
            x: 26.4,
            y: 32.5,
            width: 30,
        },
        {
            name: 'street-university-road',
            text: '大學道',
            address: '中央區',
            x: 53.3,
            y: 67,
            width: 320,
        },
        {
            name: 'street-airport-road',
            text: '機場道',
            address: '中央區',
            x: 53.4,
            y: 74.9,
            width: 30,
        },
        {
            name: 'street-farm-road',
            text: '農場道',
            address: '中央區',
            x: 63.8,
            y: 43,
            width: 42,
        },
        {
            name: 'street-east-coastal-road',
            text: '東海岸大道',
            address: '中央區',
            x: 84.5,
            y: 42,
            width: 30,
        },
        {
            name: 'street-center-road',
            text: '中間道',
            address: '中央區',
            x: 68.4,
            y: 48,
            width: 148,
        },
        {
            name: 'street-museum-road',
            text: '博物館道',
            address: '中央區',
            x: 47.2,
            y: 43.1,
            width: 129,
        },
        {
            name: 'center',
            text: '服務處',
            address: '中間道 1 號',
            x: 55.5,
            y: 60.5,
        },
        {
            name: 'airport',
            text: '機場',
            address: '機場道 1 號',
            x: 55.5,
            y: 87.5,
        },
        {
            name: 'shop',
            text: '商店',
            address: '中間道 2 號',
            x: 45.5,
            y: 61.5,
        },
        {
            name: 'museum',
            text: '博物館',
            address: '中間道 3 號',
            x: 38.5,
            y: 61.5,
        },
        {
            name: 'cloth',
            text: '裁縫屋',
            address: '中間道 4 號',
            x: 47.5,
            y: 66.5,
        },
        {
            name: 'camp',
            text: '露營地',
            address: '居民中間街 1 號',
            x: 30,
            y: 51.5,
        },
        {
            name: 'ship',
            text: '狐利',
            address: '後岸海灘',
            x: 47,
            y: 1.5,
        },
        {
            name: 'home',
            text: '傑克家',
            suffix: '1',
            address: '傑克街 1 號',
            x: 14,
            y: 65.5,
        },
        {
            name: 'home',
            text: '克莉琪家',
            suffix: '2',
            address: '傑克街 2 號',
            x: 22,
            y: 65.5,
        },
        {
            name: 'home',
            text: '丸子家',
            suffix: '3',
            address: '丸阿街 1 號',
            x: 14,
            y: 53,
        },
        {
            name: 'home',
            text: '阿笨家',
            suffix: '4',
            address: '丸阿街 2 號',
            x: 22,
            y: 53,
        },
        {
            name: 'home',
            text: '帕塔雅家',
            suffix: '5',
            address: '橫民街 1 號',
            x: 14,
            y: 40,
        },
        {
            name: 'home',
            text: '朱祿家',
            suffix: '6',
            address: '橫民街 2 號',
            x: 22,
            y: 40,
        },
        {
            name: 'home',
            text: '阿二家',
            suffix: '7',
            address: '居民中間街 2 號',
            x: 20,
            y: 33,
        },
        {
            name: 'home',
            text: '哈姆家',
            suffix: '8',
            address: '居民中間街 3 號',
            x: 32,
            y: 33,
        },
        {
            name: 'home',
            text: '羅賓家',
            suffix: '9',
            address: '橫民街 3 號',
            x: 30,
            y: 40,
        },
        {
            name: 'home',
            text: '文青家',
            suffix: '10',
            address: '橫民街 4 號',
            x: 39,
            y: 40,
        },
        {
            name: 'my-home',
            text: 'CocoaCaa 家',
            suffix: '10',
            address: '半山區',
            x: 25,
            y: 13,
        },
    ];

    public areas: LocationArea[] = [
        {
            name: 'shopping',
            text: '商店街',
            address: '中央區',
            x: 38.4,
            y: 61,
            type: 'street',
            width: 14.8,
            height: 14.8,
            color: 'rgba(187, 255, 239, 0.5)',
        },
        {
            name: 'university',
            text: '抹茶可可大學',
            address: '中央區大學道 2-3 號',
            x: 67,
            y: 74.9,
            type: 'street',
            width: 16.8,
            height: 8.8,
            color: 'rgba(255, 187, 187, 0.5)',
        },
        {
            name: 'car-park',
            text: '公眾停車場',
            address: '中央區大學道 1 號',
            x: 56.7,
            y: 74.9,
            type: 'street',
            width: 9.8,
            height: 8.8,
            color: 'rgba(255, 237, 187, 0.5)',
        },
        {
            name: 'toilet',
            text: '公共廁所',
            address: '中央區大學道 4 號 / 中央區中間道 1 號',
            x: 68.4,
            y: 59.8,
            type: 'street',
            width: 3.8,
            height: 6.5,
            color: 'rgba(193, 143, 0, 0.5)',
        },
        {
            name: 'shop',
            text: '便利店',
            address: '中央區大學道 5 號 / 中央區中間道 2 - 3 號',
            x: 72.9,
            y: 59.8,
            type: 'street',
            width: 10.9,
            height: 6.5,
            color: 'rgba(82, 255, 167, 0.5)',
        },
        {
            name: 'restaurant',
            text: '餐廳',
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
            text: '海岸公園',
            address: '中央區傑克街 3 號',
            x: 13.1,
            y: 74.6,
            type: 'street',
            width: 21.4,
            height: 10,
            color: 'rgba(255, 82, 226, 0.5)',
        },
        {
            name: 'bridge-home',
            text: '居民橋',
            address: '住宅區',
            x: 35.2,
            y: 71.6,
            type: 'bridge',
            width: 2.5,
            height: 1.5,
        },
        {
            name: 'bridge-home-2',
            text: '新居民橋',
            address: '住宅區',
            x: 44.1,
            y: 49.2,
            type: 'bridge',
            width: 2.5,
            height: 1.5,
        },
        {
            name: 'bridge-center',
            text: '中央橋',
            address: '住宅區',
            x: 61.3,
            y: 43.7,
            type: 'bridge',
            width: 2.5,
            height: 1.5,
        },
    ];

    public isDragging = false;
    public selectedLocation: Location | null = null;

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

    public handleClickLocation(location: Location) {
        this.selectedLocation = location;
    }
}
</script>
<style lang="scss">
.map {
    background-color: #76c8b5;
    display: flex;
    overflow: hidden;

    * {
        user-select: none;
        -webkit-user-drag: none;
    }
}

.map-info {
    min-width: 200px;
    width: 10vw;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 0 30px;
}

.map-info__detail-list {
    dt {
        font-weight: bold;
        margin-bottom: 5px;
    }

    dd {
        margin-left: 0;
    }
}

.map-content {
    flex: 1;
    padding-top: 30px;
    overflow: auto;
    height: calc(100vh - 108px);
}

.map-scroll {
    width: 921px;
    cursor: move;
    transform-origin: left;
}

.map__heading-container {
    margin-top: 0;
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
}
</style>
