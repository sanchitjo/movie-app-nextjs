import { MovieImage, MovieInfoStyles } from "./styles/MovieInfoStyle"
import { IMAGE_URL, EMPTY_PERSON_URL } from '../config';
import Link from 'next/link'
import Image from 'next/image'

const MovieInfo = ({ movieData, topCast, recommendationsData }) => {
    return (
        <>
            <MovieInfoStyles>
                <div className="movie-data">
                    <MovieImage
                        className="movie-img"
                        src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
                        alt={movieData?.title}
                    />

                    <div className="movie-content">
                        <h1>{movieData?.title}</h1>
                        <p>{movieData?.overview}</p>
                        <div>
                            <h3>{movieData.vote_average * 10}%</h3>
                            <h4>{movieData?.genres.map((genre) => genre?.name).join(', ')}</h4>
                            <h5>Release Date : {movieData?.release_date}</h5>
                            <h5>Runtime : {movieData?.runtime} min</h5>
                            <h5>Language : {movieData?.original_language.toUpperCase()}</h5>
                            <h5>Released in : {movieData?.production_countries.map((country) => country?.name).join(', ')}</h5>
                        </div>

                    </div>
                </div>


                <div className="cast">
                    <h2>Cast</h2>
                    <div className="top-cast">
                        {topCast.map((cast) => (
                            <Link key={cast?.id} href={`/actors/${cast.id}/`}>
                                <div className="actors" key={cast?.id}>
                                    <Image
                                        src={
                                            cast?.profile_path
                                                ? `${IMAGE_URL}${cast?.profile_path}`
                                                : `${EMPTY_PERSON_URL}`
                                        }
                                        alt={cast?.name}
                                    />
                                    <h6>{cast?.name}</h6>
                                    <h6>{cast?.character}</h6>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                {recommendationsData.length > 0 && (
                    <div className="recommendations">
                        <h2>Recommendations</h2>
                        <div className="recMovie-container">
                            {recommendationsData.map((recommendation) => (
                                <Link
                                    href={`/movies/${recommendation?.id}`}
                                    key={recommendation?.id}
                                >
                                    <div className="recMovie-item">
                                        <Image
                                            src={`${IMAGE_URL}${recommendation?.poster_path}`}
                                            alt={recommendation?.title}
                                        />
                                        <h6>{recommendation?.title}</h6>
                                        <h6>{Math.round(recommendation?.vote_average * 10)}%</h6>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </MovieInfoStyles>
        </>
    )
}

export default MovieInfo