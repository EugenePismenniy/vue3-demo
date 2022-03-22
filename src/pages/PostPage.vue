<template>

  <h1>Пост с Id = {{ $route.params.id }}</h1>

  <div>
    <post-item :post="post"/>
  </div>

</template>

<script>

import axios from "axios";
import PostItem from "@/components/PostItem";

export default {
  name: "PostPage",
  components: {PostItem},

  data() {
    return {
      post: {}
    }
  },
  methods: {
    async fetchPostById(postId) {

      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        this.post = response.data;
      } catch (e) {
        console.log(e);
        alert('Ошибка получения поста');
      }


    }
  },

  mounted() {
    this.fetchPostById(this.$route.params.id);
  }
}
</script>

<style scoped>

</style>