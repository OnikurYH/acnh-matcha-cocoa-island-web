<template>
    <MapLocationBase
        :value="value"
        @select="$emit('select', { ...value })"
        :extra-style="{ width: `${value.width}%`, height: `${value.height}%` }"
    >
        <div
            :class="['MapLocationArea', `_${value.name}`, `_${value.type}`]"
            :style="{ 'background-color': value.color }"
        />
    </MapLocationBase>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { LocationArea } from '../../types';
import MapLocationBase from './Base.vue';

@Component({
    components: {
        MapLocationBase,
    },
})
export default class MapLocationArea extends Vue {
    @Prop() private value!: LocationArea;
}
</script>
<style lang="scss">
.MapLocation {
    &:hover {
        .MapLocationArea {
            animation: map-location-area-hover steps(1, start) 1s forwards infinite;
        }
    }
}

.MapLocationArea {
    width: 100%;
    height: 100%;
    border: 3px solid rgb(255, 212, 93);

    &._bridge {
        border: 3px solid #91937c;
        background-color: #7c7d6d;
    }
}

@keyframes map-location-area-hover {
    0% {
        border-color: rgb(255, 212, 93);
    }

    50% {
        border-color: rgb(255, 237, 187);
    }

    100% {
        border-color: rgb(255, 212, 93);
    }
}
</style>
