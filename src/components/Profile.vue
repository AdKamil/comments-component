<template>
  <div class="profile">
    <div class="profile__header"></div>
    <div class="profile__content">
      <User />
      <Comments />
    </div>
    <AddComment />
  </div>
</template>

<script>
import User from '@/components/User.vue';
import Comments from '@/components/Comments.vue';
import AddComment from '@/components/AddComment.vue';

export default {
  name: 'Profile',
  components: {
    User,
    Comments,
    AddComment,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.profile {
  margin: 0 auto;
  width: 320px;
  max-width: 700px;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    width: 500px;
  }

  &__header {
    width: 100%;
    height: 95px;
    background-color: #002c71;
    border-radius: 5px 5px 0 0;
  }

  &__content {
    box-shadow: 0px 0px 4px 0px rgba(172, 172, 172, 0.5);
    background-color: #ffffff;
    padding: 36px 18px 0;
    border-radius: 0 0 5px 5px;
  }
}
</style>
