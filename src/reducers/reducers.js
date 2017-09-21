export const ProfileReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROFILE':
      // In case picture has already been clicked, removed to place at front
      let updatedState = state.filter((profile) => {
        if(profile.id === action.id){
          return false
        } else {
          return true
        }
      })
      // Need to ensure the profile showcase is only latest 3 profiles
      if(updatedState.length === 3) {
        updatedState.pop()
      }

      updatedState.unshift({
        pictureUrl: action.pictureUrl,
        name: action.name,
        description: action.description,
        id: action.id
      })

      // Adds latest profile
      return updatedState
    default:
      return state
  }
}
