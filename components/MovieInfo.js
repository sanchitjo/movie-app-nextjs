
const MovieInfo = ({ movieData }) => {
    return (

        <div className="title-content">
            <img
                src={movieData?.poster_path}
                alt={movieData?.title}
            />
            <div>
                <h1>{movieData?.title}</h1>
            </div>
        </div>

    )
}

export default MovieInfo