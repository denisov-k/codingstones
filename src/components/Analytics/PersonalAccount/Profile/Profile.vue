<template>
  <div class="profile">
    <img :src="userdata.avatar" class="avatar" />
    <div class="user-info">
      <span class="name">{{ userdata.firstname }} {{ userdata.surname }}</span>
      <span class="description">{{ userdata.description }}</span>
    </div>
    <div class="stats">
      <div v-for="(stat, index) in userdata.stats" :key="index">
        <span class="name">{{ stat.name }}</span>
        <span class="value">{{ stat.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    userdata: Object
  },
  data() {
    return {
      userData: {
        name: 'Bess Willis',
        description: 'willisbs@gmail.com',
        avatar: '',
        stats: [
          { name: 'blood', value: '-B' },
          { name: 'height', value: '170' },
          { name: 'weight', value: '60' },
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .profile {
    display: flex;
    /*height: 400px;*/
    margin: 0.7rem;
    border: 1px solid #00000052;
    border-radius: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .avatar {
      width: 10rem;
      padding: 0.5rem 0;
      aspect-ratio: 1 / 1;
      border-radius: 10rem;
      box-sizing: border-box;
    }
    .user-info {
      display: flex;
      flex-direction: column;
      padding: 1rem 0;

      .name {
        font-size: 1.25rem;
        font-weight: 600;
      }
      .description {
        font-size: 1rem;
      }
    }
    .stats {
      display: flex;
      padding: 0.5rem 0;

      div {
        display: flex;
        flex-direction: column;
        padding: 0 1rem;

        .name {
          font-weight: 600;
        }
        .value {

        }
      }
    }
  }
</style>