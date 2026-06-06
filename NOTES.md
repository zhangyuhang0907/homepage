# 前端项目笔记
## HTML CSS JS 基础
- 1、HTML是超文本标记语言，用于创建网页的结构和内容。head、body、main、footer等标签。
    head：包含网页的元数据，如标题、样式表、脚本等等。是页面不可见的内容。
    title：网页的标题，显示在浏览器标签页上。
    body：包含网页的主要内容。
    main：包含网页的主要内容，通常包含标题、段落、图片等。
    script：包含JavaScript代码，用于添加网页的交互功能和动态效果。
    footer：包含网页的页脚，通常包含版权信息、联系信息等。
- 2、CSS是层叠样式表，用于描述网页的外观和布局。
    root：包含网页的根元素，定义html默认展示的样式。
    body：包含网页的主要内容。
    style：包含CSS代码，用于描述网页的外观和布局。
    link：包含CSS文件的链接，用于引入外部的CSS文件。
- 3、JS是JavaScript，用于添加网页的交互功能和动态效果。通过修改DOM（文档对象模型）来实现网页的交互功能。
## 点击按钮切换主题的链路
- 1、JS中监听了切换按钮的点击事件。
- 2、点击按钮后，JS会判断DOM中是否存在body.dark，如果不存在，则加上body.dark;如果存在，则移除body.dark。用来控制CSS中是用root还是dark。
- 3、点击按钮后，JS还会同时判断isdark，来切换按钮文案为“切换亮色”或“切换暗色”。
- 4、如果刷新页面，DOM会重置，会展示默认的root样式。
## BUG复盘
- 1、当时调试工具显示错误是在JS的第5行，button.addEventListener("click", () => { 中 addEventListener 的对象是null，说明button元素不存在。
- 2、定义button元素的变量在JS的第2行，const button = document.getElementById("theme-toggle"); 而当时的代码中 theme-toggle 拼写错误，导致button元素不存在。发现是toggle 写成了 toggel。
- 3、修复后，点击按钮切换主题的功能正常。
## 我电脑上的文件到别人手机上可以打开的文件经历了哪些
- 1、github创建远程public仓库，用于存储项目代码。
- 2、将本地项目代码上传到远程仓库。并且在设置中build项目。会生成一个静态网址。
- 3、在别人手机上打开浏览器，访问项目地址，即可查看项目。
- 说明：github只支持静态文件的部署，不支持后端服务。


