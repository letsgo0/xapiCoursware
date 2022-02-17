const state = () => ({
    card: 0,
    ball: 0,
})

const mutations = {
    addBallPopular(state: any) {
        state.ball++;
        sessionStorage.setItem("ballPopular",state.ball);
    },
    addCardPopular(state: any) {
        state.card++;
        sessionStorage.setItem("cardPopular",state.card);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
}