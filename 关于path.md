## linux 服务器下node安装make install错误  

利用下载编译后的文件，进行文件的软链处理

下载该版本：

[淘宝镜像](https://npm.taobao.org/mirrors/node)

### 解压缩：
tar xf node-v0.10.36-linux-x64.tar.gz

### 更改目录名称
mv node-v0.10.36-linux-x64 nodejs

### 移动到指定目录
mv nodejs /data/


cd /data/nodejs/bin


### 设置软链接
ln -s /data/nodejs/bin/node /usr/local/bin/node
ln -s /data/nodejs/bin/npm /usr/local/bin/npm



但是会有问题，，安装npm 全局的时候会将全局变量存在设置软链前的链接，，
这时解决方式是修改linux下的$PATH 

cd 到全局变量的存在目录 pwd 得到全局路径 复制

存在~/.bash_profile   修改path