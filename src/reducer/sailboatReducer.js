
export default function gsdReducer(state =[], action){
  switch(action.type){
    case 'GET_SAILBOAT':{
      const newState = Object.assign([], state, action.sailboat);
      return newState;

    }

    default: return state;
  }
}
