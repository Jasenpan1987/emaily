import { FETCH_USER } from "../actions/types"

// null => not get user from fetchUser action yet
// false => get back from fetchUser, and not found user
// user model => get back from the fetchUser, and found the user
export default function(state=null, action) {
    switch(action.type){
        case FETCH_USER:
        return action.payload || false;

        default:
        return state;
    }
}