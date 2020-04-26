<template>
  <div
    :class="[
      'map-location',
      `_${value.name}`,
      `_${value.name}${value.suffix ? `-${value.suffix}` : ''}`,
    ]"
    @click="$emit('click', { ...value })"
  >
    <div class="map-location__bubble">
      <div class="map-location__bubble-text">{{ value.text }}</div>
      <img
        class="map-location__bubble-arrow"
        src="../assets/images/map/bubble-arrow.svg"
      />
    </div>
    <img
      class="map-location__image"
      :src="`locations/location-${value.name}.svg`"
    />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Location } from "../types";

@Component
export default class MapLocation extends Vue {
  @Prop() private value!: Location;
}
</script>
<style lang="scss">
$bubble-arrow-size: 10%;
$public-building-width: 58;
$home-building-width: 37;

.map-location {
  cursor: pointer;
  position: absolute;
  width: calc((#{$public-building-width} / 921) * 100vw);

  &:hover {
    .map-location__bubble {
      opacity: 1;
      transform: scale(1) translateY(0);
      transition: 0.2s opacity, 0.2s transform;
    }

    .map-location__image {
      animation: map-location-hover steps(1, start) 1s forwards infinite;
    }
  }

  &._home {
    width: calc((#{$home-building-width} / 921) * 100vw);
  }
}

@keyframes map-location-hover {
  0% {
    filter: hue-rotate(0) saturate(1);
  }

  50% {
    filter: hue-rotate(7deg) saturate(180);
  }

  100% {
    filter: hue-rotate(0) saturate(1);
  }
}

.map-location__image {
  width: 100%;
}

.map-location__bubble {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  bottom: 100%;
  left: 0%;
  font-size: calc((25 / 921) * 100vw);
  white-space: nowrap;
  color: #6b6b69;
  font-weight: bold;
  opacity: 0;
  transform: scale(0) translateY(100%);
  z-index: 1000;
}

.map-location__bubble-text {
  position: relative;
  background-color: rgba(214, 198, 160, 0.7);
  border-radius: 0.4em;
  padding: calc((10 / 921) * 100vw) calc((15 / 921) * 100vw);
}

.map-location__bubble-arrow {
  width: calc((15 / 921) * 100vw);
  margin-left: calc((15 / 921) * 100vw);
  opacity: 0.7;
}
</style>
