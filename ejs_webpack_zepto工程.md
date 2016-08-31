

##用webpack 和ejs ，express ,zepto简单的搭起前端工程##


 - 这个工程的当时的目的是为了学习webpack 和ejs模板

思想：用express和ejs模板生成相对应的页面，在express中渲染时根据路由的不同加载不同的js

在webpack，和fs，path中生成router.json到分别指向dist生成的文件中，但是这中间解析文件的路径需要注意一些路径的内容

path.join(__dirname,文件名)，__dirname到服务开启的路径

fs.writeFile 只能写字符串的东西，，JSON.stringify(routers,null,4)转成字符串

webpack 的 module,这个是加载一些模板的对象，

css 的时候是要安装css-loader、style-loader.这些基础模板

loaders:[
			{test:/\.css$/,loader:"style!css!less"}
		] 