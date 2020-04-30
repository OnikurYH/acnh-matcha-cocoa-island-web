<template>
    <MapLocationBase :value="value" @click="$emit('click', { ...value })">
        <img :class="['MapLocationBuildingImage', `_${value.name}`]" :src="`locations/location-${value.name}.svg`" />
    </MapLocationBase>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Location } from '../../types';
import MapLocationBase from './Base.vue';

@Component({
    components: {
        MapLocationBase,
    },
})
export default class MapLocationBuilding extends Vue {
    @Prop() private value!: Location;
}
</script>
<style lang="scss">
$public-building-width: 58;
$home-building-width: 37;

.MapLocation {
    width: #{$public-building-width}px;

    &:hover {
        .MapLocationBuildingImage {
            animation: map-location-hover steps(1, start) 1s forwards infinite;
        }
    }

    &._home {
        width: #{$home-building-width}px;
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
</style>
