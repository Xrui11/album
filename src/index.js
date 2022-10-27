window.onload = function () {
  //1.获取主容器的宽度
  let content = document.getElementsByClassName('content')[0];
  let contentWidth = content.offsetWidth;
  console.log(contentWidth);

  //2.获取单个图片的宽度
  let imgs = content.children;
  let imgsWidth = imgs[0].offsetWidth;
  console.log(imgsWidth);

  //3.第一行可以排列多少照片
  let nums = parseInt(contentWidth / imgsWidth);
  console.log(nums);

  //4.收集第一排的所有高度
  let arrHeight = [];
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
};
