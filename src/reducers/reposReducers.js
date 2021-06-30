import axios from 'axios'

const SET_REPOS='SET_REPOS'
const SET_CURRENT_PAGE='SET_CURRENT_PAGE'

const reposState = {
    repos: [],
    isLoaded: false,
    currentPage:1,
    perPage:3
}


export default function reposReducer (state=reposState, action) {
switch(action.type) {
    case SET_REPOS : return {
        ...state, 
        repos: action.payload.items,
        isLoaded: true
    }
    case SET_CURRENT_PAGE : return {
        ...state, 
        currentPage:action.payload
    }

    default: return state
}
}
const actionRepos = (res) => ({type:SET_REPOS, payload: res})
export const actionPage = (page) => ({type:SET_CURRENT_PAGE, payload: page})

export const getRepos = () => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.github.com/search/repositories?q=stars:%3E1&sort=stars`)
        dispatch(actionRepos(res.data))
    }
}

