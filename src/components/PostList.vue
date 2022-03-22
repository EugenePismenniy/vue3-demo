<template>
  <div v-if="posts.length > 0">

    <transition-group name="post-list">
      <post-item v-for="post in posts"
                 :show-buttons="true"
                 :post="post"
                 :key="post.id"
                 @remove="$emit('remove', post)" />
    </transition-group>


  </div>
  <h3 v-else style="color: red">
    Постов больше нет
  </h3>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.post-list-move {
  transition: transform 0.8s ease;
}
</style>