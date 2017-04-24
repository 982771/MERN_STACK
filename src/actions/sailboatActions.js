export function createSailBoat(sailboat){
  return {type: 'CREATE_SAILBOAT', sailboat};
}
export function getSailBoat(sailboat){
  return {type: 'GET_SAILBOAT', sailboat};
}
export function deleteSailBoat(sailboat){
  return {type: 'DELETE_SAILBOAT', sailboat};
}
