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

-有时候我们希望某些模块走CDN并以<script>的形式挂载到页面上来加载，但又希望能在 webpack 的模块中使用上

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


















