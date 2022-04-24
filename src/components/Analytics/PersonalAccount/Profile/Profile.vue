<template>
  <div class="profile">
    <img :src="avatar" />
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      userData: {
        name: '',
        avatar: ''
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