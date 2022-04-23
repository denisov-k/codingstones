<template>
  <div class="profile"></div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      userData: {
        name: ''
      }
    }
  }
}
</script>

<style scoped>
  .profile {
    height: 400px;
    margin: 10px;
    border: 1px solid #00000052;
    border-radius: 20px;
  }
</style>