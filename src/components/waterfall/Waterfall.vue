<script lang="ts">
import { defineComponent } from 'vue';
import type { ImageType, ColumnType } from './waterfall';
import { Waterfall } from './waterfall';

export default defineComponent({
  data() {
    const renderImages: ImageType[] = [];
    return {
      renderImages,
    };
  },
  props: ['images'],
  mounted() {
    this.waterfall();
    window.addEventListener('resize', this.waterfall);
  },
  unmounted() {
    window.removeEventListener('resize', this.waterfall);
  },
  methods: {
    async waterfall() {
      const waterfall = new Waterfall({
        container: document.getElementsByClassName('content')[0] as HTMLElement,
        images: this.$props.images,
      });

      // 设置图片
      this.renderImages = await waterfall.getRenderImages();
    },
  },
});
</script>

<template>
  <div class="content">
    <div
      class="img-wrap"
      v-for="image in renderImages"
      :style="`top: ${image.y}px; left: ${image.x}px;`"
    >
      <img
        :src="image.src"
        :style="`width: ${image.width}px; height: ${image.height}px`"
        alt="这里是一张图片"
      />
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  position: relative;
}

.img-wrap {
  position: absolute;
}

img {
  border-radius: 10px;
}
</style>
