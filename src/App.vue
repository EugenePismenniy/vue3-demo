<template>
<div class="app">
  <h1>Страница с постами</h1>
  <my-button style="margin: 15px 0;" @click="showDialog">Создаит пост</my-button>
  <my-dialog v-model:show="dialogVisible">
    <post-form @create="createPost"/>
  </my-dialog>
  <post-list :posts="posts" @remove="removePost"/>

</div>
</template>

<script>

import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from 'axios';

export default {

  components: {
    PostList, PostForm
  },

  data() {
    return {
      posts: [
        {id: 1, title: 'Какой то пост 1', body: 'Какой то пост о чем то там 1'},
        {id: 2, title: 'Какой то пост 2', body: 'Какой то пост о чем то там 2'},
        {id: 3, title: 'Какой то пост 3', body: 'Какой то пост о чем то там 3'},
        {id: 4, title: 'Какой то пост 4', body: 'Какой то пост о чем то там 4'},
      ],
      dialogVisible: false
    }
  },
  methods: {

    createPost(post) {

      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {

      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },

    async fetchPosts() {
      try {

        let response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10', {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        console.log(response);

      } catch (e) {
        console.log(e);
        alert('Error');
      }
    }

  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}


</style>