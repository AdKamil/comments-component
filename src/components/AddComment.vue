<template>
  <div class="add-comment">
    <input
      v-model="commentText"
      @keyup.enter="addComment"
      placeholder="Add a comment"
      class="add-comment__input"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentText: '',
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
  },
};
</script>

<style lang="scss" scoped>
.add-comment {
  background: white;
  border: solid 1px #ebebeb;
  width: calc(100% - 36px);
  margin: 0 auto;
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 0px 4px 0px rgba(172, 172, 172, 0.5);

  &__input {
    border: none;
    border-bottom: solid 2px #dbe0e8;
    padding-bottom: 5px;
    padding-left: 0;
    margin: 20px 0;
    width: calc(100% - 40px);
    font-size: 18px;
    outline: none;
    &::placeholder {
      color: #8298b9;
    }
  }
}
</style>
