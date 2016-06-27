# phoenix-styles
  
  望名生义，该组件库仅仅是个样式库。所谓样式库。。。。不多说了，你就认为和bootstrap一样好了。   
  可以单独使用该样式库，省去手动布局样式等工作量。   
  不过，**推荐配合我们的组件库phoenix-ui使用效果更佳**，抛个入口https://github.com/future-team/phoenix-ui。   

       
## 关于phoenix-styles
  
  相较而言，phoenix-styles的特别之处在于：  
  
  *首先作为一个样式库基本的要求：  
     提供了简洁风格的布局样式和组件，赋予常见基本控件新的表现形式，例如input，radio等。   
         
  *默认的样式风格你不满意？那就自己去做吧。不要怕，当然不会让你全部重写。    
     针对有这种需求的小伙伴，我们提供了换肤功能，打开skin.css找到你要改的元素样式，随便修改它，然后引入skin.css。就这么简单。    
   
  *前面就说到，我们不仅仅是提供样式库，全家桶有时候也是可以有的。   
     推荐配合我们的**基于React.js组件库phoenix-ui**来使用，会事半功倍滴。    
     什么？你说不用React，别怕我们还有一套基于Jquery的组件库phoenix-ui，不过要耐心等待一下，正在玩命开发。      
  
  *完善的文档和示例：   
     作为一个样式库，当然还是要简单易用的，为了使用方便所以我们还是有完善的文档和示例的   
     详情请拉项目，然后找到example/index.html。打开之后一目了然。    
            
## 使用

   如果你已经迫不及待，那还是要等待一下的。到底怎么在项目中引入phoenix-styles呢？我知道你知道，但我还是认为你有些不知道好了    
      
   *简单粗暴：    
      git拉下来代码，直接项目引入css。这样当然可以，不过万一我们要是更新了呢。。。。 
       
   * 通过bower安装，简单几步
   ```
         $ sudo npm install bower -g
         $ cd phoenix-styles
         $ bower install phoenix-styles --save
         //更新
         $ bower update
    ```
   然后,好像没然后了引进来就好了。     
   
   * 通过npm/cnpm安装：
   
    ```
          $ npm install phoenix-styles --save
        
    ```      
    引用方式如同下面几种
   
   * 如果你只需要某一部分的样式，这样我们还是支持的：    
   ```
      //首先通过git submodule的方式引入phoenix-styles
      $ git submodule add https://github.com/future-team/phoenix-styles.git
   ```
   然后，如果想只引入部分less，你可以这样：
   ```
      @import '../../phoenix-styles/less/public.less';
   ```
   具体模块对应名称详见文档首页 ./example/index.html  
   
   当然也可以直接<link 引入dist下完整的css>
  

## Command
   ```
       //生成文件
       $ npm run build
       // gulp less
       $ npm run less
       //dev 
       $ npm run dev
   ```


