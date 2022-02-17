import XAPI from "@xapi/xapi"

const state = () => ({
    User: {
        name: null,
        email: null,
        endPoint: null,
        order: null,
        key: null,
        secret: null
    },
    myXAPI: null,
})

const getters = {
 
}

const mutations = { 
    setUser(state: any, User: GB.Person) {
        state.User.name = User.name;
        state.User.email = User.email;
        state.User.endPoint = User.endPoint;
        state.User.order = User.order;
        state.User.key = User.key;
        state.User.secret = User.secret;
        sessionStorage.setItem("User", JSON.stringify(User));
    },
    createXapiInstance(state: any) {
        const endpoint = state.User.endPoint;
        const auth = `Basic ${btoa(state.User.key + ":" + state.User.secret)}`;
        state.myXAPI = new XAPI(endpoint, auth);
        // sessionStorage.setItem("myXAPI", JSON.stringify(state.myXAPI))
    },

}
export default { namespaced: true, state, getters, mutations }