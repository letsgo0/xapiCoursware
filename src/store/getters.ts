import XAPI from "@xapi/xapi"
import store from "."

const getters = {
    hasLogin(state: any) {
        // console.log('getters hasLogin reset before');
        // console.log(JSON.stringify(state));
        if (state.hasLogin == null && sessionStorage.getItem('hasLogin') != null) {
            // console.log('condition is touched in haslogin')
            state.popular.ball = sessionStorage.getItem("ballPopular");
            state.popular.card = sessionStorage.getItem("cardPopular");

            state.isNewLearner.isNewLearner = JSON.parse(sessionStorage.getItem('isNewLearner'))
            state.isNewLearner.initSkills = JSON.parse(sessionStorage.getItem('initSkills'))
            state.isNewLearner.languages = JSON.parse(sessionStorage.getItem('languages'))
            state.isNewLearner.otherLanguage = sessionStorage.getItem('otherLanguage')

            state.hasLogin = JSON.parse(sessionStorage.getItem('hasLogin'));

            state.user.User = JSON.parse(sessionStorage.getItem('User')) as GB.Person;
            store.commit('user/createXapiInstance');
            // the way below does not work 
            // state.user.myXAPI = JSON.parse(sessionStorage.getItem('myXAPI')) as XAPI;

            state.sequenceList.notInputed = JSON.parse(sessionStorage.getItem('sequenceNotInputed'));
            state.sequenceList.insertTimes = sessionStorage.getItem('sequenceInsertTimes')
            state.sequenceList.deleteTimes = sessionStorage.getItem('sequenceDeleteTimes')
            state.sequenceList.queryByOrderTimes = sessionStorage.getItem('sequenceQueryByOrderTimes')
            state.sequenceList.queryByValTimes = sessionStorage.getItem('sequenceQueryByValTimes')

            state.linkedList.notInputed = JSON.parse(sessionStorage.getItem('linkedNotInputed'));
            state.linkedList.queryByValTimes = sessionStorage.getItem('linkedQueryByValTimes')
        }
        return state.hasLogin;
    }
}

export default getters