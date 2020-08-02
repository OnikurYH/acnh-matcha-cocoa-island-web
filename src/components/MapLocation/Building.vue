<template>
    <MapLocationBase
        class="MapLocationBuilding"
        :value="value"
        :is-hovering="isHovering"
        @select="$emit('select', { ...value })"
    >
        <div ref="img" :class="['MapLocationBuildingImage', `_${value.name}`]" v-html="value.svg" />
    </MapLocationBase>
</template>
<script lang="ts">
import { Component, Prop, Vue, Ref } from 'vue-property-decorator';
import { Location } from '../../types';
import MapLocationBase from './Base.vue';

@Component({
    components: {
        MapLocationBase,
    },
})
export default class MapLocationBuilding extends Vue {
    @Prop() private value!: Location;
    @Ref('img') private img!: HTMLDivElement;

    private isHovering = false;

    public mounted() {
        this.img.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
        this.img.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
    }

    public beforeDestroy() {
        this.img.removeEventListener('mouseenter', this.handleMouseEnter.bind(this));
        this.img.removeEventListener('mouseleave', this.handleMouseLeave.bind(this));
    }

    public handleMouseEnter() {
        this.isHovering = true;
    }

    public handleMouseLeave() {
        this.isHovering = false;
    }
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

.MapLocationBuilding {
    pointer-events: none;

    path,
    circle {
        pointer-events: visibleFill;
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
