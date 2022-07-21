<template>
  <div>
    <button v-on:click="changeTitleColor">修改标题颜色</button>
    <Title title="员工管理"></Title>
    <div>
      <h2 v-bind:class="titleColor">职位管理</h2>
      <input type="text" class="inputItem" size="10px" v-model = "postInfo">
      <button v-on:click="addPost">新增职位</button>
    </div>
    <br>
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
    <br>
    <br>
    <br>

    <div>
      <h2 v-bind:class="titleColor">员工管理</h2>
      <label>姓名</label>
      <input type="text" class="inputItem" size="10px" v-model = "employeeInfo.name">
      <label>性别</label>
      <select type="text" class="inputItem" v-model = "employeeInfo.gender">
        <option>男</option>
        <option>女</option>
      </select>
      <label>出生日期</label>
      <input type="date" class="inputItem" v-model = "employeeInfo.birthday">
      <label>职位</label>
      <select type="text" class="inputItem" v-model = "employeeInfo.post">
        <option v-for= "item in postList" :key="item">
          {{item}}
        </option>
      </select>
      <label>薪资</label>
      <input type="number" class="inputItem"  placeholder="0" v-model = "employeeInfo.salary">

      <button v-on:click="addEmployee">新增员工</button>
    </div>
    <br>

    <table class="gridtable" width="1000px">
      <thead>
        <tr>
          <th width="30px">编号</th>
          <th>姓名</th>
          <th>性别</th>
          <th>出生日期</th>
          <th>职位</th>
          <th>月薪资（单位：元）</th>
        </tr>
      </thead>
      <tbody id="employee-list">
        <tr v-for="item in employeeList" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.gender}}</td>
          <td>{{item.birthday}}</td>
          <td>{{item.post}}</td>
          <td>{{item.salary}}</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
export default {
  name: 'EmployeeManagement',
  data () {
    return {
      titleColor: 'black',
      postList: ['后勤人员', '销售人员', '财务人员', '经理'],
      postInfo: null,
      employeeId: 1,
      employeeList: [{id: 1, name: '张三', gender: '男', birthday: '2000-01-01', post: '经理', salary: 30000}],
      employeeInfo: {
        id: null,
        name: null,
        gender: null,
        birthday: null,
        post: null,
        salary: null
      }
    }
  },
  methods: {
    changeTitleColor () {
      if (this.titleColor === 'black') {
        this.titleColor = 'red'
      } else if (this.titleColor === 'red') {
        this.titleColor = 'black'
      }
    },
    addPost () {
      this.postList.push(this.postInfo)
    },
    addEmployee () {
      let employeeInfo = this.employeeInfo
      this.employeeId = this.employeeId + 1
      employeeInfo.id = this.employeeId
      this.employeeList.push(employeeInfo)
      this.employeeInfo = this.$options.data().employeeInfo
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

  table.gridtable {
    position: relative;
    margin: 0px auto;
    font-family: verdana,arial,sans-serif;
    font-size:11px;
    color:#333333;
    border-width: 1px;
    border-color: #666666;
    border-collapse: collapse;
  }
  table.gridtable th {
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #666666;
    background-color: #dedede;
  }
  table.gridtable td {
    border-width: 1px;
    adding: 8px;
    border-style: solid;
    border-color: #666666;
    background-color: #ffffff;
  }
</style>
