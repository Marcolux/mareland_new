import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import './navigation-bar.scss'
import { RESOURCE_FOLDER } from "../../config"

const NavigationBar = () => {
    const location = useLocation() 
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => { setIsScrolled(window.scrollY > 0) }
        handleScroll()
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={`flex flex-alignItems-center navBar ${isScrolled ? 'scrolled' : ''}`}>
            <Link 
                className={`navLinks ${location.pathname === '/' ? 'activePage' : ''}`} 
                to={'/'}  
                id="navBarLogo"
                onClick={() => {window.scroll(0, 0)}}
            >
                <img  className={`${location.pathname === '/' ? 'activePage' : ''}`} src={`${RESOURCE_FOLDER}/android-chrome-512x512.png`} alt="nav bar logo"></img>
            </Link>
            <div className="flex flex-justifyContent-center linksNoLogo col-12">
                <Link 
                    className={`navLinks ${location.pathname === '/About' ? 'activePage' : ''}`} 
                    to={'/About'}
                    onClick={() => {window.scroll(0, 0)}}
                >
                    <p>About</p>
                </Link>
                <Link 
                    className={`navLinks ${location.pathname === '/MaReLand' ? 'activePage' : ''}`} 
                    to={'/MaReLand'}
                    onClick={() => {window.scroll(0, 0)}}
                >
                    <p>MaReLand</p>
                </Link>
                <Link 
                    className={`navLinks ${location.pathname === '/Publications' ? 'activePage' : ''}`} 
                    to={'/Publications'}
                    onClick={() => {window.scroll(0, 0)}}
                >
                    <p>Publications</p>
                </Link>
            </div>
        </div>
    )
}

export default NavigationBar