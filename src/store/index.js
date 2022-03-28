import {createStore} from "vuex";


const store = createStore({
    state() {
        return {
            likes: [],
            dislikes: []
        }
    },

    mutations: {
        addLikeByPostId(state, postId) {

            let like = state.likes[postId];

            if (like) {
                state.likes[postId] = like + 1;
            } else {
                state.likes[postId] = 1;
            }

            state.likes = [...state.likes];
        },

        addDislikeByPostId(state, postId) {
            let dislike = state.dislikes[postId];

            if (dislike) {
                state.dislikes[postId] = dislike + 1;
            } else {
                state.dislikes[postId] = 1;
            }

            state.dislikes = [...state.dislikes];
        }
    },
    getters: {
        getLikesByPostId: (state) => (postId) => {
            return state.likes[postId] || 0;
        },

        getDislikesByPostId: (state) => (postId) => {
            return state.dislikes[postId] || 0;
        }
    }
})

export default store