import Link from "next/link";
import MovieSearchBar from "./MovieSearchBar";
import { NavWrapper } from "./styles/NavbarStyle";

const Navbar = () => {
    return (
        
            <NavWrapper>

                <ul>
                    <li>
                        <Link href='/movies'>
                            <a><h3>Home</h3></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/movies/nowplaying'>
                            <a><h3>Now Playing</h3></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/movies/upcoming'>
                            <a><h3>Upcoming</h3></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/movies/toprated'>
                            <a><h3>Top Rated</h3></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/actors'>
                            <a><h3>Actors</h3></a>
                        </Link>
                    </li>
                </ul>                
                    <MovieSearchBar />
            </NavWrapper>
        
    )
}

export default Navbar