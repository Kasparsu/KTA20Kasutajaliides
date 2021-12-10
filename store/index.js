export const state = () => ({
    posts: [],
    post: null
})
  
export const mutations = {
    SET_POSTS(state, posts){
        state.posts = posts;
    },
    APPEND_POST(state, post){
        state.posts.unshift(post);
    },
    SET_POST(state, post){
        state.post = post;
    },
}

export const actions = {
    getPosts(context){
        this.$axios.$get('http://localhost:8001/api/posts').then(response => {
                context.commit('SET_POSTS', response);
        });
    },
    addPost(context, content){
        this.$axios.$post('http://localhost:8001/api/posts', {
            'content': content
        }).then(response => {
           context.commit('APPEND_POST', response);
        });
    },
    getPost(context, id){
        context.commit('SET_POST', null);
        this.$axios.$get('http://localhost:8001/api/posts/' + id).then(response => {
                context.commit('SET_POST', response);
        });
    },
}

export const getters = {
   
}