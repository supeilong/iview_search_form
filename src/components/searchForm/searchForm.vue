<template>
  <div class="search_form">
    <Form ref="form" :model="form" :rules="rules" :label-width="labelWidth" label-colon>
      <Row>
        <Col :span="6" v-for="(item, index) in searchOption" :key="index">
          <FormItem
            :label-width="item.labelWidth"
            :label="item.label"
            :prop="item.value"
          >
            <!-- 输入框 -->
            <Input
              :type="item.optionType || 'text'"
              v-model="form[item.value]"
              :placeholder="item.placeholder"
              :clearable="item.clearable || true"
              v-if="item.type === 'input'"
            >
            </Input>
            <!-- 下拉选择器 -->
            <Select
              v-model="form[item.value]"
              :multiple="item.multiple "
              :placeholder="item.placeholder"
              v-if="item.type === 'select'"
              :filterable="item.filterable"
              :clearable="item.clearable || true"
            >
              <Option v-for="(e, idx) in item.list" :value="e.value" :key="idx">
                {{ e.label }}
              </Option>
            </Select>
            <!-- 日期选择器 -->
            <DatePicker
              style="width: 100%;"
              :format="item.format || 'yyyy-MM-dd'"
              :type="item.optionType || 'date'"
              v-model="form[item.value]"
              :placeholder="item.placeholder"
              v-if="item.type === 'date'"
              :clearable="item.clearable"
            >
            </DatePicker>
          </FormItem>
        </Col>
        <Col :span="searchOption.length % 4 === 0 ? 24 : 6">
          <div class="option">
            <Button type="primary" @click="search">查询</Button>
            <Button @click="reset">重置</Button>
          </div>
        </Col>
      </Row>
    </Form>
  </div>
</template>

<script>
export default {
  props: {
    // label宽度
    labelWidth: {
      type: Number,
      default: 120
    },
    // 搜索条件
    searchOption: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      form: {}
    }
  },
  watch: {
    searchOption: {
      deep: true,
      handler (val) {
        val.forEach(item => {
          this.$set(this.form, item.value, '')
        })
      }
    }
  },
  computed: {
    // 校验规则
    rules () {
      const rules = {}
      this.searchOption.forEach(item => {
        rules[item.value] = [
          { required: item.required, message: '此项为必填项', trigger: item.type === 'input' ? 'blur' : 'change' }
        ]
        if (item.multiple || item.optionType === 'daterange') {
          rules[item.value][0].type = 'array'
        } else if (item.type === 'date') {
          rules[item.value][0].type = 'date'
        }
      })
      console.log(rules)
      return rules
    }
  },
  methods: {
    // 查询
    search () {
      this.$emit('search')
    },
    // 重置
    reset () {
      Object.keys(this.form).forEach(key => {
        this.form[key] = ''
      })
    }
  }
}
</script>

<style scoped>
.option {
  text-align: right;
}
.option button {
  margin-left: 20px;
}
</style>