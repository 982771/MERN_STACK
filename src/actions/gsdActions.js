export function createGlad(gsd){
  return {type: 'CREATE_GLAD', gsd};
}
export function getGSD(gsd){
  return {type: 'GET_GSD', gsd};
}
export function deleteGSD(gsd){
  return {type: 'DELETE_GSD', gsd};
}
