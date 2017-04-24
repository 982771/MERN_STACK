
export default function gsdReducer(state =[], action){
  switch(action.type){
    case 'GET_GSD':{
      const newState = Object.assign([], state, action.gsd);
      return newState;

    }
    case 'CREATE_GLAD':{
      const newState = Object.assign([], state, action.gsd);
      return newState
    }

    default: return state;
  }
}
