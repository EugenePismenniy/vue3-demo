<template>
  <div class="like__btns">
    <my-button @click="makeLike" class="like-post">+ {{ likes }}</my-button>
    <my-button @click="makeDislike" class="dislike-post">- {{ dislike }}</my-button>
  </div>
</template>

<script>

export default {
  name: "post-likes",
  props: {
    postId: {
      required: true
    }
  },
  computed: {
    likes() {
      return this.$store.getters.getLikesByPostId(this.postId);
    },
    dislike() {
      return this.$store.getters.getDislikesByPostId(this.postId);
    }
  },
  methods: {
    makeLike() {
      this.$store.commit('addLikeByPostId', this.postId)
    },
    makeDislike() {
      this.$store.commit('addDislikeByPostId', this.postId)
    }
  }
}
</script>

<style scoped>

.like__btns {
  padding: 5px;
}

.like-post {
  color: green;
  font-weight: bold;
}

.dislike-post {
  color: red;
  font-weight: bold;
}
</style>