import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE}  from './../actions/favoritesActions';


const initialState = {
    favorites: [{
        id: 10,
        title: "Inception",
        director: "Christopher Nolan",
        metascore: 99,
        genre: "Drama",
        description: "About dreaming in dreams."
      }],
    displayFavorites: true
}

const logicFavoritesReducer = (state = initialState, action) = {

    //default: return (state);
}

export default logicFavoritesReducer