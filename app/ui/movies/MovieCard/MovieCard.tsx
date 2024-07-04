import React from 'react'
import styles from './MovieCard.module.css'
import CheckMovie from '../CheckMovieButton/CheckMovieButton'


const MovieCard = () => {
    return (
        <>
            <div className={styles.cardContainer}>
                <h1>MovieCard</h1>
                <CheckMovie />
            </div>
        </>
    )
}

export default MovieCard