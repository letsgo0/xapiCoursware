const state = () => ({
    isNewLearner: null,
    initSkills: [],
    languages: [],
    otherLanguage: "",
})

const mutations = {
    isNewLearner(state: any, isNewer: boolean) {
        state.isNewLearner = isNewer;
        sessionStorage.setItem('isNewLearner', JSON.stringify(isNewer));
    },

    setInitSkills(state: any, skills) {        
        state.initSkills = skills;
        sessionStorage.setItem('initSkills', JSON.stringify(skills));
    },
    setLanguages(state: any, langs: []) {
        state.languages = langs;
        sessionStorage.setItem('languages', JSON.stringify(langs));
    },
    setotherlanguage(state: any, langs: string) {
        state.otherLanguage = langs;
        sessionStorage.setItem('otherLanguage', langs);
    }
}

export default {    namespaced:true, state, mutations }