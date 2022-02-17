const mutations = {
    login(state: any) {
        state.hasLogin = true;
        sessionStorage.setItem('hasLogin', JSON.stringify(true));
    },
    exit() {
        sessionStorage.clear();
    },
}
export default mutations