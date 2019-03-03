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
// import modalDom from 'componenta/modal/modal'
import { getUsers } from 'api/users'
import SStorage from 'utils/SStorage'
import { objDeepClone, convertUTCTimeToLocalTime } from 'utils/globalCommon'

export default {
  data() {
    return {
      columns: [
        {
          title: 'Name',
          key: 'username',
          align: 'center'
        }, {
          title: 'Email',
          key: 'email',
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
        }, {
          title: 'Actions',
          key: 'actions',
          align: 'center',
          render: (h, params) => {
              return h('div', [
                  h('icon', {
                      props: {
                          type: 'md-create',
                          size: '15'
                      },
                      style: {
                          marginRight: '5px'
                      },
                      on: {
                          click: () => {
                              // this.show(params.index)
                              console.log(params)
                          }
                      }
                  }),
                  h('icon', {
                      props: {
                          type: 'md-trash',
                          size: '15'
                      },
                      style: {
                          marginLeft: '5px'
                      },
                      on: {
                          click: () => {
                              // this.show(params.index)
                              console.log(params)
                          }
                      }
                  })
              ]);
          }
        }
      ],
      tableData: []
    }
  },
  created() {
    // console.log(SStorage.getItem('myToken'))
    this.getUsersData()
  },
  methods: {
    getUsersData() {
      let token = SStorage.getItem('myToken')
      getUsers(token).then(resp => {
        let data = resp.data.data
        this.tableData = objDeepClone(data)
        this.tableData.map((val, index) => {
          val.last_login_time = '-'
          val.create_time = convertUTCTimeToLocalTime(val.create_time)
        })
        console.log(this.tableData)
        console.log(data)

      })
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


