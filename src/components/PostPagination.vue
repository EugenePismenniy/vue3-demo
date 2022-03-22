<template>
<div class="page__wrapper">
  <div
      @click="changePage(pageNumber)"
      class="page"
      :class="{
        'current-page': this.page === pageNumber
      }"
      v-for="pageNumber in totalPages"
      :key="pageNumber">
    {{ pageNumber }}
  </div>
</div>
</template>

<script>
export default {
  name: "post-pagination",

  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      default: 1
    }
  },
  methods: {
    changePage(pageNumber) {
      this.$emit('update:page', pageNumber);
    }
  }
}
</script>

<style scoped>
.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid teal;
  padding: 10px;
}

.current-page {
  background: teal;
  color: white;
  font-weight: bold;
}
</style>