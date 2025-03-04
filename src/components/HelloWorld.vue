<template>
  <div>
    <input v-model="localData.field1" placeholder="字段1" />
    <input v-model="localData.field2" placeholder="字段2" />
    <!-- 其他字段 -->
  </div>
</template>

<script>
import { isEqual } from 'lodash-es'; // 引入 lodash 的 isEqual 方法

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      localData: { ...this.data } // 初始化本地数据
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
        this.localData = { ...newVal }; // 更新本地数据
      }
    }
  }
}
</script>
