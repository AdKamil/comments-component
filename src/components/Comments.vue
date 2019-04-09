<template>
  <div class="comments">
    <a
      v-on:click="toogleComments()"
      class="comments__hide-comments"
    >Hide comments ({{ data.comments.length }})</a>
    <div class="comments__wrapper" id="comments-wrapper">
      <div
        v-for="comment in comments"
        v-show="showComments == true"
        v-bind:key="comment.id"
        class="comment"
      >
        <div class="comment__img-wrapper">
          <img
            :src="getImgPath(comment.profile_img)"
            class="comment__img"
            alt="profile-picture"
          >
        </div>
        <div class="comment__text">
          <span class="comment__title">{{ `${comment.name} ${comment.last_name}` }}</span>
          <span
            v-if="daysAgo(comment.created_at) > 0"
            class="comment__days"
          >{{ daysAgo(comment.created_at) }} d</span>
          <span v-else class="comment__days">today</span>
          <p class="comment__paragraph">{{ comment.comment }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentText: '',
      showComments: true,
      currentDate: new Date(),
    };
  },
  computed: {
    data() {
      return this.$store.getters.data;
    },
    comments() {
      return this.$store.getters.data.comments;
    },
  },
  methods: {
    getImgPath(imgName) {
      const images = require.context('../assets/', false);
      return images(`./${imgName}`);
    },
    async addComment() {
      await this.comments.push({
        id: this.data.comments.length + 1,
        created_at: new Date(),
        name: this.data.name,
        last_name: this.data.last_name,
        profile_img: this.data.profile_img,
        comment: this.commentText,
      });
      this.commentText = '';
      // scroll down after comment is added
      const divToScroll = document.getElementById('comments-wrapper');
      divToScroll.scrollTop = divToScroll.scrollHeight;
    },
    toogleComments() {
      if (this.showComments === true) {
        this.showComments = !this.showComments;
      } else {
        this.showComments = !this.showComments;
      }
    },
    daysAgo(postDate) {
      const frmtdDate = new Date(postDate);
      const timeDiff = Math.abs(this.currentDate.getTime() - frmtdDate.getTime());
      return Math.ceil(timeDiff / (1000 * 3600 * 24) - 1);
    },
  },
};
</script>

<style lang="scss" scoped>
  .comments {
    position: relative;
    background-color: #ffffff;
    box-shadow: 0px 0px 4px 0px rgba(172, 172, 172, 0.5);
    border-radius: 5px 5px 0 0;
    margin-top: 15px;
    padding-top: 20px;
    margin-bottom: -1px;
    overflow: hidden;

    &__hide-comments {
      font-size: 14px;
      color: #ffa640;
      cursor: pointer;
      text-decoration: underline;
    }

    &__wrapper {
      max-height: 160px;
      overflow-y: scroll;
      margin-bottom: 20px;
      margin-right: 6px;
      margin-top: 20px;
      &::-webkit-scrollbar {
        position: absolute;
        right: 10px;
        width: 5px;
        height: 100px;
        border-radius: 100px;
      }
      &::-webkit-scrollbar-track {
        background: rgba(216, 216, 216, 0.3);
        border-radius: 100px;
      }
      &::-webkit-scrollbar-thumb {
        background: rgba(0, 44, 113, 0.12);
        border-radius: 100px;
      }
      @media screen and (min-width: 768px) {
        max-height: 330px;
      }
    }
  }

  .comment {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    padding: 0 20px;
    text-align: left;
    border-bottom: solid 1px #ebebeb;

    &__img {
      height: 40px;
      width: 40px;
      object-fit: cover;
      border-radius: 50%;
    }

    &__text {
      width: 100%;
      padding-left: 11px;
      padding-right: 15px;
      position: relative;
    }

    &__title {
      margin-top: 11px;
      display: block;
      color: #002c71;
      font-size: 14px;
      font-weight: 500;
    }

    &__paragraph {
      font-size: 14px;
      font-weight: 500;
      color: #444444;
      line-height: 21px;
      margin-top: 3px;
    }

    &__days {
      position: absolute;
      top: 10px;
      right: 0;
      font-size: 14px;
      color: #002c71;
      opacity: 0.5;
    }
  }
</style>
