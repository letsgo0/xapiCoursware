import {createStore} from 'vuex'
// modules
import user from './modules/user'
import sequenceList from './modules/sequenceList'
import linkedList from './modules/linkedList'
import isNewLearner from './modules/isNewLearner'
import popular from './modules/popular'

import state from './state'
import getters from './getters'
import mutations from './mutations'


export default createStore({
    modules:{
        user,
        sequenceList,
        isNewLearner,
        linkedList,
        popular,
    },
    state,
    getters,
    mutations,
})