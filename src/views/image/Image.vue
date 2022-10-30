<script lang="ts">
import { defineComponent } from 'vue';
import { Waterfall } from '../../components/waterfall';
import { ImageService } from '../../services/image-service';

export default defineComponent({
  data() {
    return {
      images: [],
    };
  },
  async setup() {
    const dir = window.localStorage.getItem('folder');
    if (dir) {
    }
    const res = await ImageService.getImages(dir);
    console.log('images', res);
  },
  components: {
    Waterfall,
  },
});
</script>

<template><waterfall /></template>
