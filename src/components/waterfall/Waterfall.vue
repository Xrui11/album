<script lang="ts">
import { defineComponent, render } from 'vue';
import type { ImageType } from './waterfall';
import { Waterfall } from './waterfall';

export default defineComponent({
  data() {
    const images: ImageType[] = [];
    return {
      images,
    };
  },
  async mounted() {
    const images: any = [];
    for (let i = 1; i <= 22; i++) {
      images.push({ src: `/src/assets/images/${i}.jpg` });
    }

    const waterfall = new Waterfall({
      container: document.getElementsByClassName('content')[0] as HTMLElement,
      images,
    });

    const renderImages = await waterfall.getRenderImages();
    // 设置图片
    this.images = renderImages;
  },
});
</script>

<template>
  <div class="content">
    <div
      class="img-wrap"
      v-for="image in images"
      :style="`top: ${image.y}px; left: ${image.x}px`"
    >
      <img :src="image.src" alt="这里是一张图片" />
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  height: 2000px;
  position: relative;
}

.img-wrap {
  padding: 10px;
  position: absolute;
}

img {
  width: 240px;
  border-radius: 10%;
}
</style>
