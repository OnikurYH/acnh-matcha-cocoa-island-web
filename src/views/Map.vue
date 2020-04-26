<template>
  <div class="map">
    <div class="map__heading-container">
      <h1 class="map__heading">抹茶可可島地圖</h1>
    </div>
    <div class="map-container">
      <img class="map-background" src="../assets/images/map/background.svg" />
      <MapLocation name="center" text="服務處" />
      <MapLocation name="airport" text="機場" />
      <MapLocation name="shop" text="商店" />
      <MapLocation name="museum" text="博物館" />
      <MapLocation name="cloth" text="裁縫屋" />
      <MapLocation name="camp" text="露營地" />
      <MapLocation name="ship" text="狐利" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MapLocation from "../components/MapLocation.vue";

@Component({
  components: {
    MapLocation,
  },
})
export default class Map extends Vue {}
</script>
<style lang="scss">
.map {
  background-color: #76c8b5;
  padding-top: 30px;
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
}
</style>
