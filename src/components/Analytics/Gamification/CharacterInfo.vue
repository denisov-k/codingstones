<template>
  <div id="character-info">
    <span class="name">{{ userdata.name }}</span>
    <span class="description">{{ userdata.description }}</span>
    <img :src="userdata.avatar" class="avatar" />
  </div>
</template>

<script>
export default {
  name: "CharacterInfo",
  data() {
    return {
      userdata: {
        name: 'Bess Willis',
        description: 'Mage, 25 level',
        avatar: require('@/assets/analytics/gamification/character.png'),
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
  #character-info {
    display: flex;
    flex-direction: column;
    margin: auto;

    .name {
      font-weight: 600;
    }
    .description {

    }
    .avatar {
      width: 15rem;
    }
  }
</style>