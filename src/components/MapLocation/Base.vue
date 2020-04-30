<template>
    <div
        :class="['MapLocation', `_${value.name}`]"
        :style="{
            left: `${value.x}%`,
            top: `${value.y}%`,
            width: `${value.width}px`,
            ...extraStyle,
        }"
        @click="$emit('select', { ...value })"
        @touchstart="$emit('select', { ...value })"
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
    >
        <MapBubble :value="value.text" :show="isHover" />
        <slot />
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Location } from '../../types';
import MapBubble from './../MapBubble.vue';

@Component({
    components: {
        MapBubble,
    },
})
export default class MapLocation extends Vue {
    @Prop() private value!: Location;
    @Prop() private extraStyle!: CSSStyleDeclaration;

    private isHover = false;
}
</script>
<style lang="scss">
.MapLocation {
    cursor: pointer;
    position: absolute;
    line-height: 0;
}
</style>
