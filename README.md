# test

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```


### 引用安装插件

```
yarn add egg-view-nunjucks --save
```

### 启用插件

```
// config/plugin.js
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks'
}
```

### 配置插件

```
// config/config.default.js
const path = require('path')
module.exports = appInfo => {
    const config = {}
    config.view = {
        // 模板文件的根目录，默认为app/view，支持多目录（以,分割，会从多目录中查找文件）
        root: [
            path.join(appInfo.baseDir, 'app/view'),
            path.join(appInfo.baseDir, 'path/to/another'),
        ].join(','),
        // 是否开启缓存，开启后，下次渲染同样路径的模板时不会重新查找
        cache: true,
        // 指定使用的模板引擎
        // 当渲染时，就会根据后缀名查找使用相应的模板引擎渲染
        // 如：await ctx.render('home.html')
        mapping: {
            '.html': 'nunjucks'
        },
        // 可以设置默认的模板引擎
        defaultViewEngine: 'nunjucks',
        // 设置默认的模板引擎后缀，设置后就可以在调用时省略
        // 如：await ctx.render('home')
        defaultExtension: '.html'
    }
    return config
}
```

### 往 html 中传入变量或数据

```
// 在controller控制器配置
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let title = "我是首页"; //向模板传入数据
    await this.ctx.render('index',{
      title: title
    });
  }
}
module.exports = HomeController;
```

### 常用的模板语法

```
1、普通数据
{{ title }}

2、for循环
{% for item in list %}
  {{ item.id }}
{% endfor %}

3、if语句，多条件使用：and, or, not
{% if i < 0 %}
  条件内容
{% elif i >=0 and i < 100 %}
  条件内容
{% else %}
  条件内容
{% endif %}

4、三目运算
{{ "是" if isVip == 1 else "否" }}

5、引入其他模板
{% include "../header.html" %}
```

