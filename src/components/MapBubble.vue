<template>
    <div :class="['MapBubble', show && '_show']">
        <div class="MapBubbleText">{{ value }}</div>
        <img class="MapBubbleArrow" src="../assets/images/map/bubble-arrow.svg" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MapLocation extends Vue {
    @Prop({ required: true })
    private value!: string;

    @Prop({ default: false })
    private show!: boolean;
}
</script>

<style lang="scss">
.MapBubble {
    pointer-events: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    bottom: 100%;
    left: 0%;
    font-size: 25px;
    white-space: nowrap;
    color: #6b6b69;
    font-weight: bold;
    opacity: 0;
    transform: scale(0) translateY(100%);
    z-index: 1000;
    line-height: 1;

    &._show {
        opacity: 1;
        transform: scale(1) translateY(0);
        transition: 0.2s opacity, 0.2s transform;
    }
}

.MapBubbleText {
    position: relative;
    background-color: rgba(214, 198, 160, 0.9);
    border-radius: 0.4em;
    padding: 10px 15px;
}

.MapBubbleArrow {
    width: 15px;
    margin-left: 15px;
    opacity: 0.7;
}
</style>
