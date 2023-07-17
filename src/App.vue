<template>
  <div id="app">
    <SeachForm :searchOption="searchOption"/>
  </div>
</template>

<script>
import SeachForm from './components/searchForm/searchForm.vue'

export default {
  name: 'App',
  components: {
    SeachForm
  },
  data () {
    return {
      searchOption: [
        {
          type: 'input',
          value: 'name',
          label: '姓名',
          placeholder: '请输入姓名',
          required: true
        },
        {
          type: 'input',
          value: 'age',
          label: '年龄',
          placeholder: '请输入年龄',
          required: true
        },
        {
          type: 'date',
          value: 'birthday',
          label: '生日',
          placeholder: '请输入生日',
          required: true
        },
        {
          type: 'select',
          value: 'hobby',
          label: '爱好',
          placeholder: '请选择爱好',
          list: [
            {
              label: '唱',
              value: '1'
            },
            {
              label: '跳',
              value: '2'
            },
            {
              label: 'rap',
              value: '3'
            }
          ],
          required: true
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
