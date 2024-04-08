# JavaScript处理文件

## `URL.createObjectURL(file)`

> 将文件域转 URL，可用于本地预览

```html
<input type="file" id="flie" />
<script>
  const file = document.querySelector("#flie");
  file.onchange = function () {
    console.log(URL.createObjectURL(this.files[0]));
  };
</script>
```

## FileReader

> FileReader 对象允许 Web 应用程序以异步方式读取存储在用户计算机上的文件(或原始数据缓冲区)的内容
>
> 使用 File 或 Blob 对象指定要读取的文件或数据。

```js
videoInput.addEventListener('change', function (e) {
  let chosenVideo = this.files[0] // 默认选第一个文件
  // 判断是不是视频文件
  if(!chosenVideo.type.includes('video')){
    alert("抱歉，该文件不是视频，不能进行播放")
    return false
  }
  const fr = new FileReader()
  //加载文件后的回调函数
  fr.onload = (function (avid) {
    return function (e) {
      isLoading(false)
      setPlaybackRate(1)
      console.log(e, e.target)
      avid.src = e.target.result
    }
  })(video)
  isLoading(true)
  // 文件读取操作加载文件
  fr.readAsDataURL(chosenVideo)
})
```

