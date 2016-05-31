import C from './ProjectConstants'

function projectReducer(state = {}, action){
    switch (action.type) {
        case C.PROJECT_SET:
            return {
                data: action.projects
            }
        default:
            return state
    }
}

export default projectReducer