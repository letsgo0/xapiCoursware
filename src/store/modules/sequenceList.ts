const state = () => ({
    notInputed: null,
    insertTimes: "",
    deleteTimes: "",
    queryByOrderTimes: '',
    queryByValTimes: '',
})

const mutations = {
    setNotInputed(state: any, flag: boolean) {
        state.notInputed = flag;
        sessionStorage.setItem('sequenceNotInputed', JSON.stringify(flag))
    },
    setInsertTimes(state: any, val: string) {
        state.insertTimes = val;
        sessionStorage.setItem('sequenceInsertTimes', val)
    },
    setDeleteTimes(state: any, val: string) {
        state.deleteTimes = val;
        sessionStorage.setItem('sequenceDeleteTimes', val);
    },
    setQueryByOrderTimes(state: any, val: string) {
        state.queryByOrderTimes = val;
        sessionStorage.setItem('sequenceQueryByOrderTimes', val);
    },
    setQueryByValTimes(state: any, val: string) {
        state.queryByValTimes = val;
        sessionStorage.setItem('sequenceQueryByValTimes', val);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
}