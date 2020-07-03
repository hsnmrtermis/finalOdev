export function reducer(state, action){
    switch(action.type){
        case "ADD_SAVED_POST":
            
            state.savedPost = action.saveList
            return {...state}

        default:
            break;
    }
}