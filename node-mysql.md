用node对mysql数据库进行操作

https://www.npmjs.com/package/mysql




[详解](http://www.oschina.net/translate/node-mysql-tutorial?utm_source=tuicool&utm_medium=referral)

原生sql语句

如：table名：xinjian
	-------------------------------------
	|  id    |   name |  year  |  sex   |
	-------------------------------------
	|
	|
	
	增加：insert into xinjian set id=5,name='frrs',year=20,sex='女';
	
	删除：delete from xinjian where id = 5;

	修改：update xinjian set name='women',year=40 where id = 2;

	查询 ：select * from xinjian where name='xinge';


