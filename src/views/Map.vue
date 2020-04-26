<template>
  <div
    class="map"
    @mousedown="handleMouseDown"
    @mousemove="handleMouseMove"
    @mouseup="handleMouseUp"
  >
    <div class="map-info"></div>
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
    },
    {
      name: "street-home-3-4",
      text: "丸阿街",
    },
    {
      name: "street-home-5-10",
      text: "橫民街",
    },
    {
      name: "street-home-center",
      text: "居民中間街",
    },
    {
      name: "street-center-road",
      text: "中間道",
    },
    {
      name: "street-airport-road",
      text: "機場道",
    },
    {
      name: "center",
      text: "服務處",
    },
    {
      name: "airport",
      text: "機場",
    },
    {
      name: "shop",
      text: "商店",
    },
    {
      name: "museum",
      text: "博物館",
    },
    {
      name: "cloth",
      text: "裁縫屋",
    },
    {
      name: "camp",
      text: "露營地",
    },
    {
      name: "ship",
      text: "狐利",
    },
    {
      name: "home",
      text: "傑克",
      suffix: "1",
    },
    {
      name: "home",
      text: "克莉琪",
      suffix: "2",
    },
    {
      name: "home",
      text: "丸子",
      suffix: "3",
    },
    {
      name: "home",
      text: "阿笨",
      suffix: "4",
    },
    {
      name: "home",
      text: "帕塔雅",
      suffix: "5",
    },
    {
      name: "home",
      text: "朱祿",
      suffix: "6",
    },
    {
      name: "home",
      text: "阿二",
      suffix: "7",
    },
    {
      name: "home",
      text: "哈姆",
      suffix: "8",
    },
    {
      name: "home",
      text: "羅賓",
      suffix: "9",
    },
    {
      name: "home",
      text: "文青",
      suffix: "10",
    },
  ];

  public isDragging = false;

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
    console.log(location);
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
  background-color: rgba(255, 255, 255, 0.5);
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
