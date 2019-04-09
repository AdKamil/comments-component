<template>
  <div class="user">
    <a class="user__share-btn" href>
      <i class="fas fa-share-square"></i>
    </a>
    <div class="user-info">
      <img class="user-info__img" :src="getImgPath(data.profile_img)" alt="profile image">
      <div class="user-info__data">
        <h2>
          {{ `${data.name} ${data.last_name}`}}
          <a v-on:click="toggleLike()">
            <i class="far fa-heart" v-bind:class="{ liked: liked }"></i>
          </a>
        </h2>
        <h3>{{ `${data.city}, ${data.country}` }}</h3>
      </div>
    </div>
    <div class="user-stats">
      <div class="user-stats__data-wrapper">
        <div class="info-wrapper">
          <span class="info-wrapper__number">{{ data.likes }}</span>
          <span class="info-wrapper__description">Likes</span>
        </div>
        <div class="info-wrapper">
          <span class="info-wrapper__number">{{ data.following }}</span>
          <span class="info-wrapper__description">Following</span>
        </div>
        <div class="info-wrapper">
          <span class="info-wrapper__number">{{ data.followers }}</span>
          <span class="info-wrapper__description">Followers</span>
        </div>
      </div>
      <a
        v-on:click="toggleFollow()"
        class="user-stats__btn"
        >{{ data.followed ? 'UNFOLLOW' : 'FOLLOW' }}</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$store.getters.data;
    },
    liked() {
      return this.$store.getters.data.liked;
    },
  },
  methods: {
    getImgPath(imgName) {
      const images = require.context('../assets/', false);
      return images(`./${imgName}`);
    },
    toggleLike() {
      this.$store.commit('toggleLike');
    },
    toggleFollow() {
      this.$store.commit('toggleFollow');
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  position: relative;
  background-color: #ffffff;
  box-shadow: 0px 0px 4px 0px rgba(172, 172, 172, 0.5);
  border-radius: 5px;
  margin-top: -95px;
  padding-bottom: 17px;

  &__share-btn {
    position: absolute;
    font-size: 11px;
    color: #ffa640;
    right: 9px;
    top: 9px;
  }
}

.user-info {
  @media screen and (min-width: 768px) {
    padding: 20px;
    display: flex;
  }

  &__img {
    height: 70px;
    width: 70px;
    object-fit: cover;
    border-radius: 50%;
    margin-top: -48px;
    @media screen and (min-width: 768px) {
      margin-top: 0;
    }
  }

  &__data {
    h2 {
      color: #002c71;
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 0;
      letter-spacing: 0px;
    }
    h3 {
      color: #8298b9;
      font-size: 12px;
      font-weight: 500;
      margin-top: 0;
      margin-bottom: 0;
      letter-spacing: 0px;
    }
    @media screen and (min-width: 768px) {
      padding-left: 20px;
      h2 {
        padding-top: 10px;
      }
    }
    .fa-heart {
      font-size: 13px;
      margin-left: 7px;
      margin-right: -23px;
      color: #d3d3d3;
      cursor: pointer;

      &.liked {
        color: red;
      }
    }
  }
}

.user-stats {
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }

  &__btn {
    background-color: #ffa640;
    padding: 14px 0;
    width: calc(100% - 40px);
    display: block;
    margin: 25px auto 0;
    border-radius: 40px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 4.2px;
    color: #ffffff;
    cursor: pointer;
    transition: ease-in-out 0.2s;

    &:hover {
      filter: brightness(120%);
    }

    @media screen and (min-width: 768px) {
      width: initial;
      padding: 14px 27px;
      margin: 0 20px 0 auto;
    }
  }

  &__data-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 35px;

    @media screen and (min-width: 768px) {
      margin-top: 0;
      min-width: 280px;
      margin-left: -10px;
    }

    .info-wrapper {
      width: calc(100% / 3);
      height: 38px;
      display: flex;
      flex-direction: column;

      &:nth-of-type(2) {
        border-left: solid 1px rgba(151, 151, 151, 0.1);
        border-right: solid 1px rgba(151, 151, 151, 0.1);
      }

      &__number {
        color: #ffa640;
        font-size: 24px;
        margin-top: -3px;
      }

      &__description {
        color: #8298b9;
        font-size: 10px;
        margin-bottom: -1px;
      }
    }
  }
}
</style>
