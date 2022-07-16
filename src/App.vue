<template lang="pug">
.container
  router-view
</template>

<script>

import todo from "./components/todo"

export default {
  name: 'App',
  components: {
    todo
  }
}
</script>

<style>

  body {
    font-family: "Helvetica Neue" , Helvetica, sans-serif;
    font-size: 24px;
    line-height: 1.42;
    -webkit-font-smooting: antialiased;
    font-weight: 300;
    background: #f5f5f5;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  .container {
    width: 660px;
    margin: 0 auto;
  }
</style>
