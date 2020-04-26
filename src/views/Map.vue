<template>
  <div
    class="map"
    @mousedown="handleMouseDown"
    @mousemove="handleMouseMove"
    @mouseup="handleMouseUp"
  >
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
          <img
            class="map-background"
            src="../assets/images/map/background.svg"
          />
          <MapLocation
            v-for="location in locations"
            :key="location.text"
            :value="location"
            @click="handleClickLocation"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MapLocation from "../components/MapLocation.vue";
import { Location } from "../types";

@Component({
  components: {
    MapLocation,
  },
})
export default class Map extends Vue {
  public locations: Location[] = [
    {
      name: "street-home-1-2",
      text: "傑克街",
      address: "住宅區",
    },
    {
      name: "street-home-3-4",
      text: "丸阿街",
      address: "住宅區",
    },
    {
      name: "street-home-5-10",
      text: "橫民街",
      address: "住宅區",
    },
    {
      name: "street-home-center",
      text: "居民中間街",
      address: "住宅區",
    },
    {
      name: "street-center-road",
      text: "中間道",
      address: "中央區",
    },
    {
      name: "street-airport-road",
      text: "機場道",
      address: "中央區",
    },
    {
      name: "center",
      text: "服務處",
      address: "中間道 1 號",
    },
    {
      name: "airport",
      text: "機場",
      address: "機場道 1 號",
    },
    {
      name: "shop",
      text: "商店",
      address: "中間道 2 號",
    },
    {
      name: "museum",
      text: "博物館",
      address: "中間道 3 號",
    },
    {
      name: "cloth",
      text: "裁縫屋",
      address: "中間道 4 號",
    },
    {
      name: "camp",
      text: "露營地",
      address: "居民中間街 1 號",
    },
    {
      name: "ship",
      text: "狐利",
      address: "後岸海灘",
    },
    {
      name: "home",
      text: "傑克家",
      suffix: "1",
      address: "傑克街 1 號",
    },
    {
      name: "home",
      text: "克莉琪家",
      suffix: "2",
      address: "傑克街 2 號",
    },
    {
      name: "home",
      text: "丸子家",
      suffix: "3",
      address: "丸阿街 1 號",
    },
    {
      name: "home",
      text: "阿笨家",
      suffix: "4",
      address: "丸阿街 2 號",
    },
    {
      name: "home",
      text: "帕塔雅家",
      suffix: "5",
      address: "橫民街 1 號",
    },
    {
      name: "home",
      text: "朱祿家",
      suffix: "6",
      address: "橫民街 2 號",
    },
    {
      name: "home",
      text: "阿二家",
      suffix: "7",
      address: "居民中間街 2 號",
    },
    {
      name: "home",
      text: "哈姆家",
      suffix: "8",
      address: "居民中間街 3 號",
    },
    {
      name: "home",
      text: "羅賓家",
      suffix: "9",
      address: "橫民街 3 號",
    },
    {
      name: "home",
      text: "文青家",
      suffix: "10",
      address: "橫民街 4 號",
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
  overflow-x: auto;
  height: calc(100vh - 108px);
}

.map-scroll {
  width: 921px;
  cursor: move;
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
  background-image: url("../assets/images/map/heading-background.svg");
}

.map-container {
  position: relative;
}

.map-background {
  width: 100%;
}

.map-location {
  &._center {
    left: 55.5%;
    top: 60.5%;
  }

  &._airport {
    left: 55.5%;
    top: 87.5%;
  }

  &._shop {
    left: 45.5%;
    top: 61.5%;
  }

  &._museum {
    left: 38.5%;
    top: 61.5%;
  }

  &._cloth {
    left: 47.5%;
    top: 66.5%;
  }

  &._camp {
    left: 30%;
    top: 51.5%;
  }

  &._ship {
    left: 47%;
    top: 1.5%;
  }

  &._home-1 {
    left: 14%;
    top: 65.5%;
  }

  &._home-2 {
    left: 22%;
    top: 65.5%;
  }

  &._home-3 {
    left: 14%;
    top: 53%;
  }

  &._home-4 {
    left: 22%;
    top: 53%;
  }

  &._home-5 {
    left: 14%;
    top: 40%;
  }

  &._home-6 {
    left: 22%;
    top: 40%;
  }

  &._home-7 {
    left: 20%;
    top: 33%;
  }

  &._home-8 {
    left: 32%;
    top: 33%;
  }

  &._home-9 {
    left: 30%;
    top: 40%;
  }

  &._home-10 {
    left: 39%;
    top: 40%;
  }

  &._street-home-1-2 {
    width: 203px;
    left: 13%;
    top: 74%;
  }

  &._street-home-3-4 {
    width: 130px;
    left: 13%;
    top: 62%;
  }

  &._street-home-5-10 {
    width: 278px;
    left: 13%;
    top: 49%;
  }

  &._street-home-center {
    width: 16px;
    left: 27%;
    top: 32.5%;
  }

  &._street-center-road {
    width: 320px;
    left: 53.7%;
    top: 71%;
  }

  &._street-airport-road {
    width: 16px;
    left: 53.7%;
    top: 73%;
  }
}
</style>
