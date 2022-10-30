<script lang="ts">
import { defineComponent } from 'vue';
import { DialogService } from '../../services/dialog-service';

export default defineComponent({
  beforeMount() {
    if (window.localStorage.getItem('folder')) {
      this.$router.push('/image');
    }
  },
  methods: {
    async chooseFolder() {
      const dir: string = await DialogService.selectImageDir();
      window.localStorage.setItem('folder', dir);
      this.$router.push('/image');
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
  height: 100vh;
}
</style>
