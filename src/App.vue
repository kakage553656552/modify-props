<template>
  <div id="app">
    <div>{{ formData }}</div>
    <HelloWorld :data="formData" @updateData="updateFormData">
    </HelloWorld>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      formData: {}
    }
  },
  methods: {
    updateFormData(newData) {
      this.formData = newData
    }
  }
}
</script>

<style>
</style>
