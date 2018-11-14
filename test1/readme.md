## nodejs 优势
1. 采用js语法，打破js只能在浏览器中运行的局面。
2. 超强高并发能力。
3. 实现高性能服务器。
4. 开发周期短，成本低。

## nodejs适合开发什么类型的网站
-  开发各种类型的动态网站
-  即时通讯
- ...

## webstorm node开发配置

## HTTP服务器 url模块
如果使用PHP来编写后端的代码，需要Apache或者Nginx的HTTP服务器，来处理客户端的请求响应。

对于NodeJs来说，他不仅仅在实现一个应用，同时还实现了整个HTTP服务器。

## url模块
   解析url: url.parse()
   
   替换二级地址： url.resolve()
## supervisor 自动重启服务器   
    npm i -g supervisor
    //supervisor代替node启动web服务
    supervisor app.js
    
## CommonJs
主要为了弥补js没有标准库的缺陷。
   
   不仅可以利用js开发客户端应用，还可以编写：
     - 服务器端js应用程序
     - 命令行工具
     - 桌面图形界面应用程序
     
 ## node模块，分为两类    
 ### 核心模块
 - 核心模块在Node源代码编译过程中，编译进了二进制执行文件。在Node进程启动时，部分核心模块就被直接加载进内存中，所以这部分核心模块引入时，文件定位和编译执行这两个步骤可以省略掉，并且在路径分析中优先判断，所以它的加载速度是最快的。
 
 **如：HTTP模块，URL模块，Fs模块...**
 
 ### 文件模块
 - 文件模块是在运行时动态加载，需要完整的路径分析，文件定位，编译执行过程，速度比核心模块慢一些，但是用的非常多。这些模块需要我们自己定义。
 
 ## nodejs自定义模块
 1. 把公共功能抽离单独的js文件，默认情况下这个模块的方法和属性是无法访问的。需要通过exports或者module.exports暴露属性或者方法。
 2. 使用模块，通过require的方式引入这个模块。就可以使用这个模块的方法和属性了。   
 
 ### 引入node_modulse文件
 1. 要引用的js文件直接在node_modules目录下，可以直接用文件名引入，不用写路径。
    
    因为node在当前目录没有找到该文件时，就会自动在node_modules文件夹里面找。
    
 2.  要引用的js文件放在一个文件夹里，然后一起放入node_modules。
 
        这时我们要通过js文件名直接引入文件的话，就要使用 `cnpm init yes` 生成一个`package.json`文件。
        
        node会找`package.json`文件的`main`指向的js文件。   
## fs模块

1. fs.stat 检测是文件还是目录   
       
        fs.stat('xx',(err,stats) =>{
            stats.isFile();
            stats.isDirectory();
        })
2. fs.readFileSync()   
 同步获取文件内容
        
   
   
    
    
    
