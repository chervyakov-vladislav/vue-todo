<template lang="pug">
div.margin
  h3 просмотр задачи: {{$route.params.todo}}
  button(
    @click="goBack"
  ).view-btn &larr; Назад к Todo листу
</template>

<script>
export default {
 methods: {
  goBack() {
    this.$router.go(-1)
  }
 }
}
</script>

<style scoped>
.margin {
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  height: 35px;
  align-items: center;
  padding: 5px 10px;
}
</style>