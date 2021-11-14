<template>
  <h2>我是Vue渲染出來的</h2>
  <h2>title</h2>
  <hello-world></hello-world>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
export default {
  components: {
    // HelloWorld: HelloWorld,
    HelloWorld,
  },
  data() {
    return {
      title: 'Hello world',
      message: '哈哈哈',
    }
  },
}
</script>

<style>
h2 {
  color: red;
}
</style>
