<template>
  <div>
    <v-card class="mt-3" >
      <v-textarea v-model="content"></v-textarea>
      <v-btn @click="submit">Submit</v-btn>
    </v-card>
    <v-card class="mt-3" v-for="post in $store.state.posts" :key="post.id">
      <v-card-text>{{post.content}}</v-card-text>
      <nuxt-link :to="'/post/' + post.id">Read more</nuxt-link>
      <v-card-subtitle>{{post.created_at_for_humans}}</v-card-subtitle>
      <v-card-subtitle><v-icon>mdi-comment-multiple</v-icon>{{post.comments_count}}</v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('getPosts');
  },
  data(){
    return {
      content: ''
    }
  },
  methods: {
    submit(){
      this.$store.dispatch('addPost', this.content);
      this.content = '';
    }
  },
  computed: {
    
  }
}
</script>

<style>

</style>