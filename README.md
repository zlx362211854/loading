## loading 
> 1 引入文件 

```aidl
<script src="./index.js"></script>
<link rel="stylesheet" href="./index.css">
```
> 2 创建容器 
```
<div id="container"></div>

```

> 3 执行

```aidl

var loading = new Loading();

loading.init('container').start(['#5fc6b3', '#d3be87', '#e86c73']);

setTimeout(function () {
    // some ajax
//    loading.end()
}, 5000)

```

### 只有三个api

>  ```init() // 参数为容器的id （必须）```

>  ```start() // 参数为由颜色组成的数组 （非必须）```

>  ```end() // 无参数```

### 效果

![效果](http://g.recordit.co/FeueBsSsDW.gif)