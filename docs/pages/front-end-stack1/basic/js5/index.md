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

