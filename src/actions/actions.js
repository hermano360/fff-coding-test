export const addProfile = (id, name, description, pictureUrl) => {
  return {
    type: 'ADD_PROFILE',
    id,
    name,
    description,
    pictureUrl
  }
}

export const updateLastClickedThumbnail = (id) => {
  return {
    type: 'UPDATE_LAST_CLICKED_THUMBNAIL',
    id
  }
}
