import C from './ResumeConstants'

function resumeReducer(state = {}, action){
    switch (action.type) {
        case C.RESUME_SET:
            return {
                data: action.resume
            }
        default:
            return state
    }
}

export default resumeReducer