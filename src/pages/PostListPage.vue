<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input v-model="searchQuery" placeholder="Поиск..."/>
    <div class="app__btns">
      <my-button @click="showDialog">Создаит пост</my-button>
      <my-select v-model="selectedSort" :options="sortOptions"/>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </my-dialog>

    <h3>Список постов</h3>

    <post-pagination :total-pages="totalPages" v-model:page="page"/>

    <post-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostLoading"/>
    <div v-else>Идет загрузка...</div>

    <post-pagination :total-pages="totalPages" v-model:page="page"/>

  </div>
</template>

<script>

import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from 'axios';
import PostPagination from "@/components/PostPagination";

export default {

  components: {
    PostPagination,
    PostList, PostForm
  },

  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ],
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
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

        this.isPostLoading = true;
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _limit: this.limit,
            _page: this.page
          }
        });
        this.posts = response.data;
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);

      } catch (e) {
        console.log(e);
        alert('Error');
      } finally {
        this.isPostLoading = false;
      }
    }

  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
      });
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  watch: {
    page() {
      this.fetchPosts();
    }
  }
}
</script>

<style scoped>

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

</style>