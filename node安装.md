##node 安装 服务器


#1.直接用wget 安装然后gcc编译  时间比较长
	wget node地址 .tar.gz
	./congigure
	make install
#2.直接下载编译好的文件，然后设置软链/path

	利用
	ln -s /data/nodejs/bin/node /usr/local/bin/node
	ln -s /data/nodejs/bin/npm /usr/local/bin/npm
	设置软链

	但是设置软链后npm全局安装的npm包将在下载的node的文件下
	这时全局将找不到，，
	需要修改$path

	path文件目录  vi ~/.bash_profile

	记得在后面接上系统自带的PATH    :$PATH


	重启 文件 生效
	 source .bash_profile
	

	
#3.通过yum安装
