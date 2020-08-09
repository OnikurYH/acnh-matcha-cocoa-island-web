<template>
    <div class="SlideShowContainer">
        <div class="SlideShow">
            <button class="SlideShowNav" :disabled="currentPage === 0" @click="handlePrevious">
                <FontAwesomeIcon icon="caret-left" />
            </button>
            <div :class="{ SlideShowScroller: true, _transition: transitionCancelToken > -1 }">
                <div
                    class="SlideShowItem"
                    v-for="(item, itemIdx) in currentDisplayItems"
                    :key="itemIdx"
                    :style="{ 'min-width': `${itemWidthPercentage}%`, width: `${itemWidthPercentage}%` }"
                    @click="handleExpend(item)"
                >
                    <div class="SlideShowItemOverlay">
                        <FontAwesomeIcon icon="search" />
                    </div>
                    <img v-if="item" class="SlideShowItemImage" :src="item.thumbnail" />
                </div>
            </div>
            <button class="SlideShowNav" :disabled="currentPage >= maxPage" @click="handleNext">
                <FontAwesomeIcon icon="caret-right" />
            </button>
        </div>
        <Modal :show="!!showingItem" @close="showingItem = null">
            <img v-if="showingItem" class="SlideShowDetailsModalImage" :src="showingItem.original" />
        </Modal>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { throttle, asyncTimeout } from '../utils';
import Modal from './Modal.vue';

export interface SlideShowValueItem {
    id: string;
    thumbnail: string;
    original: string;
}

@Component({
    components: {
        Modal,
    },
})
export default class SlideShow extends Vue {
    @Prop()
    public value!: SlideShowValueItem[];

    public itemPerRowDesktop = 3;
    public itemPerRowTablet = 2;
    public itemPerRowMobile = 1;
    public currentItemPerRow = 0;
    public throttleHandleWindowResize!: (event: unknown) => void;

    public currentPage = 0;
    public isDoingTransition = false;
    public transitionCancelToken = -1;

    public showingItem: SlideShowValueItem | null = null;

    public get itemWidthPercentage(): number {
        return 100 / this.currentItemPerRow;
    }

    public get maxPage(): number {
        return Math.floor(this.value.length / this.currentItemPerRow);
    }

    public get currentDisplayItems(): SlideShowValueItem[] {
        return this.value.slice(
            this.currentPage * this.currentItemPerRow,
            this.currentPage * this.currentItemPerRow + this.currentItemPerRow,
        );
    }

    public mounted() {
        this.throttleHandleWindowResize = throttle(this.handleWindowResize.bind(this), 60 / 1000);
        window.addEventListener('resize', this.throttleHandleWindowResize);
        this.handleWindowResize();
    }

    public beforeDestroy() {
        window.removeEventListener('resize', this.throttleHandleWindowResize);
    }

    public handleWindowResize() {
        if (window.innerWidth >= 768) {
            this.currentItemPerRow = this.itemPerRowDesktop;
        } else if (window.innerWidth > 425) {
            this.currentItemPerRow = this.itemPerRowTablet;
        } else {
            this.currentItemPerRow = this.itemPerRowMobile;
        }

        if (this.currentPage > this.maxPage) {
            this.currentPage = this.maxPage;
        }
    }

    public async handleNext() {
        await this.doTransition();
        this.currentPage += 1;
    }

    public async handlePrevious() {
        await this.doTransition();
        this.currentPage -= 1;
    }

    public handleExpend(item: SlideShowValueItem) {
        this.showingItem = item;
    }

    private async doTransition() {
        if (this.transitionCancelToken > -1) {
            clearTimeout(this.transitionCancelToken);
        }
        const { cancelToken, promise } = asyncTimeout(200);
        this.transitionCancelToken = cancelToken;
        await promise;
        this.transitionCancelToken = -1;
    }
}
</script>

<style lang="scss">
.SlideShow {
    display: flex;
}

.SlideShowNav {
    border: 0;
    padding: 0 10px;
    background-color: #2c3e50;
    color: #fff;
    font-size: 50px;
    cursor: pointer;

    &:disabled {
        background-color: #ccc;
        color: #2c3e50;
        cursor: not-allowed;
    }
}

.SlideShowScroller {
    flex: 1;
    position: relative;
    display: flex;
    overflow: auto;
    width: 100%;
    transition: 200ms opacity;
    will-change: opacity;

    &._transition {
        opacity: 0;
    }
}

.SlideShowRow {
    min-width: 100%;
    display: flex;
}

.SlideShowItem {
    padding: 0 5px;
    cursor: zoom-in;
    position: relative;

    &:hover {
        .SlideShowItemOverlay {
            opacity: 1;
        }
    }
}

.SlideShowItemOverlay {
    opacity: 0;
    transition: 200ms opacity;
    will-change: opacity;
    position: absolute;
    left: 5px;
    top: 0;
    right: 5px;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.SlideShowItemImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.SlideShowDetailsModalImage {
    width: 100%;
    object-fit: cover;
    pointer-events: none;
    user-select: none;
}
</style>
