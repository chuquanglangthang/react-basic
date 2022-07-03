const initState = {
    users: [
        { id: 1, name: 'John'},
        { id: 2, name: 'Samuel'},
        { id: 3, name: 'Kaitlyn'},
    ],
    posts: []
}

const rootReducer = (state = initState,action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log("Run into delete user: ", action)
            let users = state.users
            users = users.filter(singleUser => singleUser.id !== action.payload.id)
            return {
                ...state,users // copy state in order not to miss 'posts' and rewrite it with new filtered 'users'
            }
        case 'CREATE_USER':
            // console.log(action)
            let id = Math.floor(Math.random() * 10000)
            let newUser = {
                id: id,
                name: `Random - ${id}`
            }
            return {
                ...state, users: [...state.users, newUser]
            }
        default:
            return state
    }
}

export default rootReducer
/**
 * state: REDUX stores data here
 */