# 百度前端大作业项目

**201250063 靳琦清**

### 项目简介

一个基于Vue开发的简单的员工管理系统，包含职位管理和员工管理两个模块。

### 运行环境

- node v16.14.2

- npm v8.5.0

以上环境是作者编写和测试时使用的环境，不代表不支持其他环境。

### 使用说明

命令行进入项目根目录下，输入npm run dev启动项目，访问http://localhost:8080使用（具体端口视命令行内的提示）

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### 代码说明

#### 1. 数据劫持

#### 2. 发布订阅模式

#### 3. 单向绑定

**方式一：插值形式**

使用{{data}}的方法完成单向绑定，一但model中的值发生改变，view中相应改变。

例如：对于职位的显示，model中addPost会改变postList的值，使得view中对postList的显示相应改变。

```html
<table class="gridtable" width="200">
  <thead>
     <tr>
       <th class="column">职位列表</th>
     </tr>
  </thead>
  <tbody>
     <tr v-for="item in postList" :key="item">
       <td>{{item}}</td>
     </tr>
   </tbody>
</table>

<script>
export default {
    name: 'EmployeeManagement',
    data(){
      return{
          postList: ['后勤人员', '销售人员', '财务人员', '经理'],
          postInfo: null
      }
    }
    methods:{
      addPost () {
      	this.postList.push(this.postInfo);
      }
    }
}
</script>
```

**方式二：v-bind形式**

使用{{data}}的方法完成单向绑定，一但model中的值发生改变，view中相应改变。

例如，对于标题"员工管理"的颜色，使用v-bind绑定到model中的titleColor，当改变titleColor时，view中标题的颜色就会改变。

```html
<button v-on:click="changeTitleColor">修改标题颜色</button>
 
<h2 v-bind:class="titleColor">员工管理</h2>

<script>
export default {
    name: 'EmployeeManagement',
    data(){
      return{
       titleColor: 'black'
      }
    }
    methods: {
      changeTitleColor () {
          if (this.titleColor === 'black') {
            this.titleColor = 'red'
          } else if (this.titleColor === 'red') {
            this.titleColor = 'black'
      }
    }
}
</script>
<style>
  .black{
    color: black;
  }
  .red {
    color: red;
  }
</style>
```



### 4. 双向绑定

使用v-model完成双向绑定，view中修改数据会改变model中的值，同样在model中修改数据也会改变view中的值。

例如：对于新增职位一项，view中输入的数据与model中的postInfo绑定，再调用addPost，将postInfo的值加入postList中。

```html
<div>
	<input type="text" class="inputItem" size="10px" v-model = "postInfo">   
	<button v-on:click="addPost">新增职位</button>  
</div>

<script>
export default {
    name: 'EmployeeManagement',
    data(){
      return{
          postList: ['后勤人员', '销售人员', '财务人员', '经理'],
          postInfo: null
      }
    }
    methods:{
      addPost () {
      	this.postList.push(this.postInfo);
      }
    }
}
</script>
```

