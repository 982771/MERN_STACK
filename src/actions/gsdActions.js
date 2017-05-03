export function createGlad(gsd){
  return {type: 'CREATE_GLAD', gsd};
}
export function createSad(gsd){
  return {type: 'CREATE_SAD', gsd};
}
export function createMad(gsd){
  return {type: 'CREATE_MAD', gsd};
}
export function getGSD(gsd){
  return {type: 'GET_GSD', gsd};
}
export function deleteGSD(gsd){
  return {type: 'DELETE_GSD', gsd};
}
