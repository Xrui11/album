<script lang="ts">
import { defineComponent } from 'vue';
import { DialogService } from '../../services/dialog-service';

export default defineComponent({
  methods: {
    async chooseFolder() {
      let dir: string = '';
      try {
        dir = await DialogService.selectImageDir();
      } catch (err) {
        console.error(err);
      }
      if (!dir) return;

      this.$router.push({
        path: '/image',
        query: { folder: encodeURIComponent(dir) },
      });
    },
  },
});
</script>

<template>
  <div class="empty-page">
    <button type="button" @click="chooseFolder()">选择图片目录</button>
  </div>
</template>

<style scoped>
.empty-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 20px);
}
</style>
