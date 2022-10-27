<script setup lang="ts">
import { ref, onMounted } from 'vue';

onMounted(() => {
  //1.获取主容器的宽度
  let content: any = document.getElementsByClassName('content')[0];
  let contentWidth: any = content.offsetWidth;
  console.log(contentWidth);

  //2.获取单个图片的宽度
  let imgs = content.children;
  let imgsWidth: any = imgs[0].offsetWidth;
  console.log(imgsWidth);

  //3.第一行可以排列多少照片
  let nums: any = Math.floor(contentWidth / imgsWidth);
  console.log(nums);

  //4.收集第一排的所有高度
  let arrHeight: any = [];
  for (let i = 0; i < imgs.length; i++) {
    if (i < nums) {
      //这里是第一排的图片高度
      arrHeight.push(imgs[i].offsetHeight);
    } else {
      //创建下一排第一个元素的对象
      let obj = {
        minH: arrHeight[0],
        minImg: 0,
      };
      for (let j = 0; j < arrHeight.length; j++) {
        if (arrHeight[j] < obj.minH) {
          obj.minH = arrHeight[j];
          obj.minImg = j;
        }
      }
      console.log(obj);
      imgs[i].style.position = 'absolute';
      imgs[i].style.left = imgs[obj.minImg].offsetLeft + 'px';
      imgs[i].style.top = obj.minH + 'px';
      arrHeight[obj.minImg] = arrHeight[obj.minImg] + imgs[i].offsetHeight;
    }
  }
  console.log(arrHeight);
});
</script>

<template>
  <div class="content">
    <div class="img-wrap">
      <img src="../../assets/images/1.jpg" alt="这里是一张图片" />
    </div>
    <div class="img-wrap">
      <img src="../../assets/images/2.jpg" alt="这里是一张图片" />
    </div>
    <div class="img-wrap">
      <img src="../../assets/images/3.jpg" alt="这里是一张图片" />
    </div>
    <div class="img-wrap">
      <img src="../../assets/images/4.jpg" alt="这里是一张图片" />
    </div>
    <div class="img-wrap">
      <img src="../../assets/images/5.jpg" alt="这里是一张图片" />
    </div>
    <div class="img-wrap">
      <img src="../../assets/images/6.jpg" alt="这里是一张图片" />
    </div>
    <div class="img-wrap">
      <img src="../../assets/images/7.jpg" alt="这里是一张图片" />
    </div>
    <div class="img-wrap">
      <img src="../../assets/images/8.jpg" alt="这里是一张图片" />
    </div>
    <div class="img-wrap">
      <img src="../../assets/images/9.jpg" alt="这里是一张图片" />
    </div>
    <div class="img-wrap">
      <img src="../../assets/images/10.jpg" alt="这里是一张图片" />
    </div>
    <div class="img-wrap">
      <img src="../../assets/images/11.jpg" alt="这里是一张图片" />
    </div>
    <div class="img-wrap">
      <img src="../../assets/images/12.jpg" alt="这里是一张图片" />
    </div>
    <div class="img-wrap">
      <img src="../../assets/images/13.jpg" alt="这里是一张图片" />
    </div>
    <div class="img-wrap">
      <img src="../../assets/images/14.jpg" alt="这里是一张图片" />
    </div>
    <div class="img-wrap">
      <img src="../../assets/images/15.jpg" alt="这里是一张图片" />
    </div>
    <div class="img-wrap">
      <img src="../../assets/images/16.jpg" alt="这里是一张图片" />
    </div>
    <div class="img-wrap">
      <img src="../../assets/images/17.jpg" alt="这里是一张图片" />
    </div>
    <div class="img-wrap">
      <img src="../../assets/images/18.jpg" alt="这里是一张图片" />
    </div>
    <div class="img-wrap">
      <img src="../../assets/images/19.jpg" alt="这里是一张图片" />
    </div>
    <div class="img-wrap">
      <img src="../../assets/images/20.jpg" alt="这里是一张图片" />
    </div>
    <div class="img-wrap">
      <img src="../../assets/images/21.jpg" alt="这里是一张图片" />
    </div>
    <div class="img-wrap">
      <img src="../../assets/images/22.jpg" alt="这里是一张图片" />
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  height: 200px;
  left: 50%;
  margin-left: 110px;
}

.img-wrap {
  float: left;
  padding: 10px;
}

img {
  width: 240px;
  border-radius: 10%;
}
</style>
