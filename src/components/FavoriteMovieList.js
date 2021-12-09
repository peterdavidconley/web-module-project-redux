import React from 'react';
import { removeFavorite } from '../actions/favoritesActions'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



const FavoriteMovieList = (props) => {
    const favorites = props.favorites
    const displayFavorites = props.displayFavorites;

    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={() => {props.removeFavorite(movie.id)}}><span className="material-icons" >remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return({
        favorites: state.favoritesReducer.favorites,
        displayFavorites: state.favoritesReducer.displayFavorites,
      })
}


export default connect(mapStateToProps, {removeFavorite})(FavoriteMovieList);