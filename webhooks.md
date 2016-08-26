
配上webhooks,这是一个感觉很神奇的东西，但是配好感觉好一般


就是一个请求过来，接受请求，完后shell脚本的运行

node  child_process

callfile.exec('sh gitpull.sh',function(data,err){
    console.log(data,err)
  })
 ######################################

遇到坑，关于response   本来模模糊糊的response 看一遍
一切有点明了
关于response 我感觉比较详细的教程
http://www.html-js.cn/details/EyoCRHgi.html


顺便延伸 到request