import Link from "next/link";
import { NavWrapper, SearchBar } from "./styles/NavbarStyle";

const Navbar = () => {
    return (
        <NavWrapper>
            <SearchBar placeholder="movies here.." />
            <ul>
                <li>
                    <Link href='/'>
                        <a><h3>Home</h3></a>
                    </Link>
                </li>
                <li>
                    <Link href='/latest'>
                        <a><h3>Latest</h3></a>
                    </Link>
                </li>
                <li>
                    <Link href='/nowplaying'>
                        <a><h3>Now Playing</h3></a>
                    </Link>
                </li>
                <li>
                    <Link href='/upcoming'>
                        <a><h3>Upcoming</h3></a>
                    </Link>
                </li>          
                <li>
                    <Link href='/toprated'>
                        <a><h3>Top Rated</h3></a>
                    </Link>
                </li>
            </ul>
            
        </NavWrapper>
        
    )
}

export default Navbar