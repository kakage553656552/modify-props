<template>
  <div id="app">
    <div>{{ formData }}</div>
    <HelloWorld :data="formData" @updateData="updateFormData">
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      formData: {}
    }
  },
  methods: {
    // 更新 formData 对象
    updateFormData(newData) {
      this.formData = newData
    }
  }
}
</script>

<style>
</style>
