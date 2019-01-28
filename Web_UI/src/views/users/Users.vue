<template>
  <div class="user-table">
    <div class="header">
      <div class="search">
        <Input search placeholder="Enter something..." size="small"/>
      </div>
      <div class="operation">
        <Button type="primary" size="small" class="btn-primary-compass">Add</Button>
        <Button type="primary" size="small" class="btn-primary-compass">Delete</Button>
        <Button type="primary" size="small" class="btn-primary-compass">Edit</Button>
      </div>
    </div>
    <table-dom :columns="columns" :tableData="tableData"></table-dom>
  </div>
</template>

<script>
import tableDom from 'components/table/GlobalTable'

export default {
  data() {
    return {
      columns: [
        {
          title: 'Name',
          key: 'name',
          align: 'center'
        }, {
          title: 'Email',
          key: 'e_mail',
          align: 'center'
        }, {
          title: 'Role',
          key: 'role',
          align: 'center'
        }, {
          title: 'Create Time',
          key: 'create_time',
          align: 'center'
        }, {
          title: 'last Login Time',
          key: 'last_login_time',
          align: 'center'
        }
      ],
      tableData: [
        {
          name: "tt",
          e_mail: '1111111111@qq.com',
          role: 'ADMIN',
          create_time: '',
          last_login_time: ''
        },{
          name: "ll",
          e_mail: '222222222@qq.com',
          role: 'ADMIN',
          create_time: '',
          last_login_time: ''
        }
      ]
    }
  },
  components: {
    tableDom
  }
}
</script>

<style lang="less" scoped> 
.header{
  display: flex;
  justify-content: space-between;
  padding: 30px;

  .ivu-btn{
    margin-left: 10px;
  }
}
</style>


