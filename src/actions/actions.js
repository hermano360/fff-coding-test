export const addProfile = (id, name, description, pictureUrl) => {
  return {
    type: 'ADD_PROFILE',
    id,
    name,
    description,
    pictureUrl
  }
}
