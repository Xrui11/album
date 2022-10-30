<script lang="ts">
import { defineComponent } from 'vue';
import { DialogService } from '../../services/dialog-service';

export default defineComponent({
  methods: {
    async chooseFolder() {
      await DialogService.selectImageDir();
    },
  },
});
</script>

<template>
  <div class="empty-page">
    <button type="button" @click="chooseFolder()">选择图片目录</button>
  </div>
</template>
