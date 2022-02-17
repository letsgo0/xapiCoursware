const state = () => ({
    notInputed: null,
    queryByValTimes: "",
})

const mutations = {
    setNotInputed(state: any, flag: boolean) {
        state.notInputed = flag;
        sessionStorage.setItem('linkedNotInputed', JSON.stringify(flag))
    },
    setQueryByValTimes(state: any, val: string) {
        state.queryByValTimes = val;
        sessionStorage.setItem('linkedQueryByValTimes', val)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
}