<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
      <post-likes :post-id="post.id"/>
    </div>
    <div class="post_btns" v-if="showButtons">
      <my-button @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>
      <my-button @click="$emit('remove', post)">Удалить</my-button>
    </div>
  </div>
</template>

<script>

import PostLikes from "@/components/PostLikes";
export default {
  components: {PostLikes},
  props: {
    post: {
      type: Object,
      required: true
    },
    showButtons: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>