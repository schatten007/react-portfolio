import styled from "styled-components";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import { MovieState } from "../movieState";

const MovieDetail = () => {
    const [ movies, setMovies ] = useState(MovieState);
    const [ movie, setMovie ] = useState(null);

    const history = useHistory();
    const url = history.location.pathname;

    useEffect( () => {
        const raw = movies.filter(m => url === m.url);
        setMovie(raw[0]);
    }, [ movies, url, movie])
    return(
        <>
        {
        movie && 
        <StyledMovieDetail>
            <h1>{movie.title}</h1>
            <img src={movie.mainImg} alt="main-img" />
            <Reviews>
                {movie.awards.map(award => {
                    return(
                    <Review>
                        <h3>{award.title}</h3>
                        <div className="underline"></div>
                        <p>{award.description}</p>
                    </Review>
                    )
                })}
            </Reviews>
            <img className="secondary-img" src={movie.secondaryImg} alt="seconday-img" />
        </StyledMovieDetail>}
        </>
    )
}

const StyledMovieDetail = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
    h1{
        font-size: 3rem;
        font-weight: normal;
        color: white;
    }
    .underline{
        height: 0.4rem;
        background-color: #23D997;
    }
    img{
        width: 100%;
        height: 75vh;
        object-fit: cover;
    }   
    .secondary-img{
        height: 100vh;
    }
`;

const Reviews = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    height: 100vh;
`;

const Review = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 20rem;
    margin: 0 3rem;
    h3{
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
    p{
        font-size: 1rem;
        margin: 0;
        padding: 1.5rem 0;
    }
`;
export default MovieDetail;