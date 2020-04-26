<template>
  <div :class="['map-location', `_${name}`]">
    <div class="map-location__bubble">
      <div class="map-location__bubble-text">{{ text }}</div>
      <img
        class="map-location__bubble-arrow"
        src="../assets/images/map/bubble-arrow.svg"
      />
    </div>
    <img class="map-location__image" :src="`locations/location-${name}.svg`" />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MapLocation extends Vue {
  @Prop() private name!: string;
  @Prop() private text!: string;
}
</script>
<style lang="scss">
$bubble-arrow-size: 10%;

.map-location {
  cursor: pointer;
  position: absolute;
  width: calc((58 / 998) * 100vw);
  height: calc((58 / 998) * 100vw);

  &:hover {
    .map-location__bubble {
      opacity: 1;
      transform: scale(1) translateY(0);
      transition: 0.2s opacity, 0.2s transform;
    }
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
  font-size: calc((25 / 998) * 100vw);
  white-space: nowrap;
  color: #6b6b69;
  font-weight: bold;
  opacity: 0;
  transform: scale(0) translateY(100%);
}

.map-location__bubble-text {
  position: relative;
  background-color: rgba(214, 198, 160, 0.7);
  border-radius: 0.4em;
  padding: calc((10 / 998) * 100vw) calc((15 / 998) * 100vw);
}

.map-location__bubble-arrow {
  width: calc((15 / 998) * 100vw);
  margin-left: calc((15 / 998) * 100vw);
  opacity: 0.7;
}
</style>
