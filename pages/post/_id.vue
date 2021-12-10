<template>
<div>
    <div v-if="$store.state.post">
        <v-card class="mt-3" >
            <v-card-text>{{$store.state.post.content}}</v-card-text>
            <v-card-subtitle>{{$store.state.post.created_at_for_humans}}</v-card-subtitle>
        </v-card>
        <v-card class="mt-3" v-for="comment in $store.state.post.comments" :key="comment.id">
            <v-card-text>{{comment.content}}</v-card-text>
        </v-card>
    </div>
    <v-skeleton-loader
        v-else
          type="article"
    ></v-skeleton-loader>
</div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('getPost', this.$route.params.id);
    }
}
</script>

<style>

</style>