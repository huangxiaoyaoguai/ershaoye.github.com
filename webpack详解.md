##webapck 详细实验，，放在这里以免忘掉##




详细教程：http://www.th7.cn/web/js/201507/109843.shtml


var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js'); 提取公共部分


-文件入口

entry:  文件的入口，这个值是一个对象，对象的key值，输出的文件名，后面的value值是文件的路径

-文件出口

output: {

	path  ：     文件的输出路径，输出的文件名

	filename："[name].js"   输出的文件名字，name的值是一个entry 中的key值



}

-使用加载器

module: {
	loader:[]
}

-有时候我们希望某些模块走CDN并以'script'的形式挂载到页面上来加载，但又希望能在 webpack 的模块中使用上

externals: {
      'react': 'window.React',
      'react/addons': 'window.React',
      'jquery': 'window.jQuery',
      'jQuery': 'window.jQuery',
      'underscore': 'window._',
      //'module_path/modal/Modal.jsx': 'window.XD.Modal',
      'pubsub-js': 'window.PubSub'
    },




-使用路径，，让路径看起来更装逼

resolve{
	alias：{
		'base_path': path.resolve(__dirname + '/app/'),要使用绝对路径，，
	}

	root：“”   优先查找开始路径
	extensions: ['', '.js', '.jsx']   后缀默认
	
}



-插件项

plugins ：[];这是一个数组结构


-一些有用的插件


on-build-webpack  在webpack中使用可以提取报错消息


 new WebpackOnBuildPlugin(function(stats) {
            var compilation = stats.compilation;
            var errors = compilation.errors;
            if (errors.length > 0) {
                var error = errors[0];
                pushNotification(error.name, error.message, 'Glass');
            }
            else {
                var message = 'takes ' + (stats.endTime - stats.startTime) + 'ms';

                var warningNumber = compilation.warnings.length;
                if (warningNumber > 0) {
                    message += ', with ' + warningNumber + ' warning(s)';
                }

                pushNotification('webpack building done', message);
            }
        })






webpack 优化插件

[webpack使用优化](http://web.jobbole.com/84847/)

最小化 ：new webpack.optimize.OccurenceOrderPlugin()    webpack就能够比对id的使用频率和分布来得出最短的id分配给使用频率高的模块 

去重：new webpack.optimize.DedupePlugin()

压缩：webpack.optimize.UglifyJsPlugin

对于chunks的优化：new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15})   
                new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000})


改变生产环境和线上环境：new webpack.DefinePlugin


单页：
  Webpack 是为单页应用量身定做的 你可以把app拆成很多chunk，这些chunk由路由来加载。入口模块仅仅包含路由和一些库，没有别的内容。这么做在用户通过导航浏览表现很好，但是初始化页面加载的时候你需要2个网络请求：一个是请求路由，一个是加载当前内容。
  如果你利用HTML5的HistoryAPI 来让URL影响当前内容页的话。你的服务器可以知道那个内容页面将被客户端请求。为了节约请求数，服务端可以把要请求的内容模块放到响应头里面：以script标签的形式来添加，浏览器将并行的加载这俩请求。


多页共享代码：
  当编译一个多页面的app时，你想要在页面之间共享一些代码。这在webpack看来很简单的：只需要和多个入口文件一起编译就好
    new CommonsChunkPlugin("commons.chunk.js")


HtmlWebpackPlugin：[链接](https://www.npmjs.com/package/html-webpack-plugin)














