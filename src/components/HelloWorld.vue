<template>
  <div>
    <input v-model="localData.field1" placeholder="字段1" />
    <input v-model="localData.field2" placeholder="字段2" />
    <input v-model="localData.field3" placeholder="字段3" />
    <input v-model="localData.field4" placeholder="字段4" />
    <input v-model="localData.field5" placeholder="字段5" />
    <input v-model="localData.field6" placeholder="字段6" />
    <input v-model="localData.field7" placeholder="字段7" />
    <input v-model="localData.field8" placeholder="字段8" />
    <input v-model="localData.field9" placeholder="字段9" />
    <input v-model="localData.field10" placeholder="字段10" />
    <!-- 其他字段 -->
  </div>
</template>

<script>
import { isEqual, cloneDeep } from 'lodash-es'; // 引入 lodash 的深度比较和克隆方法

export default {
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({}) // 默认值为空对象
    }
  },
  data() {
    return {
      localData: cloneDeep(this.data) // 初始化本地数据
    };
  },
  watch: {
    localData: {
      handler(newVal) {
        this.$emit('updateData', newVal); // 当本地数据变化时，通知父组件
      },
      deep: true // 深度监听
    },
    data(newVal) {
      // 使用 isEqual 比较对象
      if (!isEqual(newVal, this.localData)) {
        this.localData = cloneDeep(newVal); // 使用深拷贝更新本地数据
      }
    }
  }
}
</script>
