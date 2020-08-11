<template>
    <div v-if="isShowing" :class="{ Modal: true, _show: cssShow }" @click="handleClose">
        <div class="ModalContent" @click.stop>
            <button class="ModalClose" @click="handleClose">
                <FontAwesomeIcon icon="times" />
            </button>
            <slot />
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { asyncTimeout } from '../utils';

@Component
export default class SlideShow extends Vue {
    @Prop()
    public show!: boolean;

    public isShowing = false;
    public cssShow = false;

    @Watch('show')
    public async handleShow(current: boolean) {
        if (current) {
            this.isShowing = true;
            await asyncTimeout(1).promise;
            this.cssShow = true;
        }
    }

    public async handleClose() {
        this.cssShow = false;
        await asyncTimeout(200).promise;
        this.isShowing = false;
        this.$emit('close');
    }
}
</script>

<style lang="scss">
.Modal {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 200ms background-color;
    will-change: background-color;

    &._show {
        background-color: rgba(0, 0, 0, 0.5);

        .ModalContent {
            transform: scale(1);
            opacity: 1;
        }
    }
}

.ModalContent {
    max-width: 1140px;
    max-height: 100vh;
    position: relative;
    border: 1px solid #fff;
    line-height: 0;
    transform: scale(0.9);
    opacity: 0;
    transition: 200ms transform, 200ms opacity;
    will-change: transform, opacity;
}

.ModalClose {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    padding: 10px;
    color: #fff;
    background-color: #2c3e50;
    border: 0;
    line-height: 0;
    cursor: pointer;

    > svg {
        width: 1em !important;
    }
}
</style>
