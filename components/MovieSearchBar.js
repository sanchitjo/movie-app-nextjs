import { SearchBar } from "./styles/NavbarStyle";
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link'
import { MovieSearchStyle } from "./styles/MovieSearchStyle";

const MovieSearchBar = () => {

    const [items, setItems] = useState([])
    
    const handleChange = async (e) => {
        if (!e.target.value) return setItems([])
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=2bda7f1d1e72293d54bd3c29b9b4b2f5&language=en-US&query=${e.target.value}`
        );

        const movies = data.results.map(({ id, title }) => ({
            id,
            title,
        }));
    
        const { data: searchData } = await axios.get(
            `https://api.themoviedb.org/3/search/person?api_key=2bda7f1d1e72293d54bd3c29b9b4b2f5&language=en-US&query=${e.target.value}`
        );

        const actors = searchData.results.map(({ id, name }) => ({
            id,
            name,
        }))
        setItems([...movies, ...actors])
    };

    console.log(items)




    return (
        <>
            <MovieSearchStyle>
                <SearchBar
                    type="search"
                    placeholder="Search Movies, Actors.."
                    onChange={handleChange}
                />
                {items.length > 0 && (
                    <div className="data-list">
                        {items.map((item) => (
                            <>
                                {
                                    item?.title && (
                                        <Link href={`/movies/${item?.id}`} key={item?.id} >
                                            <p>{item?.title}</p>
                                        </Link>
                                    )
                                }
                                {
                                    item?.name && (
                                        <Link href={`/actors/${item?.id}`}>
                                            <p>{item?.name}</p>
                                        </Link>
                                    )
                                }
                            </>
                        ))}
                    </div>
                )}


            </MovieSearchStyle>
        </>
    )
}

export default MovieSearchBar
