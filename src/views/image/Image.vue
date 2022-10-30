<script lang="ts">
import { defineComponent } from 'vue';
import { convertFileSrc } from '@tauri-apps/api/tauri';
import { Waterfall } from '../../components/waterfall';
import type { ImageType } from '../../components/waterfall';
import { ImageService } from '../../services/image-service';

export default defineComponent({
  data() {
    return {
      images: [],
    };
  },
  async mounted() {
    const dir = window.localStorage.getItem('folder');
    if (!dir) {
      const images: any = [];
      for (let i = 1; i <= 22; i++) {
        images.push({ src: `/src/assets/images/${i}.jpg` });
      }
      this.images = images;
    }
    const res: any = await ImageService.getImages(dir as string);
    this.images = res.map((img: ImageType) => {
      img.src = convertFileSrc(img.src);
      return img;
    });
    console.log('images', res);
  },
  components: {
    Waterfall,
  },
});
</script>

<template><waterfall :images="images" /></template>
