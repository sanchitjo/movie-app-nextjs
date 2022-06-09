import Link from "next/link";
import { NavWrapper, SearchBar } from "./styles/NavbarStyle";

const Navbar = () => {
    return (
        <NavWrapper>
            <SearchBar placeholder="movies here.." />
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
            
        </NavWrapper>
        
    )
}

export default Navbar