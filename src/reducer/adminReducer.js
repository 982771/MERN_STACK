
export default function adminReducer(state =[], action){
  switch(action.type){

    case 'GET_ADMIN':{
      const newState = Object.assign([], state, action.admin);
      return newState.reverse();

    }

    case 'CREATE_ADMIN':{
        const newState = Object.assign([], state.reverse());
        console.log(newState);
        newState.push(action.admin);
        return newState.reverse();
    }

  //  case 'CREATE_ADMIN': return[...state, Object.assign({}, action.admin)].reverse();

    case 'DELETE_ADMIN': {
      const newState = Object.assign([], state);
      const indexOfAdminToDelete = state.findIndex(admins => {return admins._id == action.admin._id;});
      newState.splice(indexOfAdminToDelete, 1);
      return newState;
    }

    default: return state;
  }
}
