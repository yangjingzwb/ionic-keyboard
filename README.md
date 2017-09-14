### 描述:
模拟iOS数字键盘。

插件适用于 `ionic v1.x.x`。

###  效果图:

![效果图](demo.gif)

### 安装:

1. git download安装
	
	>git clone https://github.com/yangjingzwb/ionic-keyboard.git
	
	>下载所有文件放到`www/lib`目录下
	
	>这种方式可以进行自定义数据[参考目录结构](#tree)
	
2. 引入文件
	在 `index.html`文件中引入 `ionic-keyword.min.js`
	
````html
<script src="lib/ionic-keyword/dist/ionic-keyword.min.js"></script>

3. 在 `app.js`里写入文件依赖

````html
angular.module('myApp', ['ionic-keyword'])

4.  html部分，需要城市选择的地方写入
	
````html
<input ionic-key-word >

5.  js部分demo`controller.js`
	
````js
app.controller('cityCtrl', function($scope) {
		console.log($scope.keyword.num);
  }
})
````
###目录结构

````html
|_bower.json
|_dist
| |_ionic-keyword.min.js 合成后的js，含js、css、html
|_gulpfile.js gulp文件
|_licence.txt
|_package.json
|_README.md
|_src
| |_js
| | |_ionic-keyword.js 主js
| |_style
| | |_ionic-keyword.css 样式部分
| |_templates
| | |_ionic-keyword.html

> cd ionic-keyword && npm install && bower install

自定义自己的需要的样式、数据，在`src `下面进行修改，修改完成后执行`gulp`合成`dist/ionic-keyword.min.js`


