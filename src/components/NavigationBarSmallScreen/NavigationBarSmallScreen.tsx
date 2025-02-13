import { Link } from "react-router-dom";
import './navigation-bar-small-screen.scss'
import { useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import { RESOURCE_FOLDER } from "../../config"

const NavigationBarSmallScreen = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const toggleLogic = () => {
        setIsExpanded(prevState => !prevState)
    }
    const transitions = useTransition(isExpanded, {
        from: { opacity: 0, height: '0%', width: '0%' },
        enter: { opacity: 1, height: '100%', width: '100%' },
        leave: { opacity: 0, height: '0%', width: '0%' },
        config: { duration: 200 },
    })

    return (
        <>
            <div className='hambContainer' onClick={toggleLogic}>
                <div className={isExpanded  ? 'hamburger-menu openHam':'hamburger-menu'}>
                    <div className="bar" id="bar1"></div>
                    <div className="bar" id="bar2"></div>
                    <div className="bar" id="bar3"></div>
                </div>
            </div>
            
            {transitions((style, item) =>
                item ? (
                    <animated.div style={style} id="smallScreenMenu">
                        <div className='navBarSm'>
                            <Link className="navLinks" id="navBarLogo" onClick={toggleLogic} to={'/'}>
                                <img className='' src={`${RESOURCE_FOLDER}/android-chrome-512x512.png`} alt="nav bar logo"></img>
                            </Link>
                            <div className="flex flex-column flex-alignItems-start linksBox mt-20">
                                <Link className="navLinks" onClick={toggleLogic} to={'/About'}><p>About</p></Link>
                                <Link className="navLinks" onClick={toggleLogic} to={'/MaReLand'}><p>MaReLand</p></Link>
                                <Link className="navLinks" onClick={toggleLogic} to={'/Publications'}><p>Publications</p></Link>
                            </div>
                            <div className="flex col-12">
                                <img className='boatImgs' id="boat-1" src={`${RESOURCE_FOLDER}/boat-nobg.png`} alt="boat 1 small screen"></img>
                                <img className='boatImgs' id="boat-2" src={`${RESOURCE_FOLDER}/boat-nobg.png`} alt="boat 2 small screen"></img>
                            </div>
                        </div>
                    </animated.div>
                ) : null
            )}
        </>
    )
}

export default NavigationBarSmallScreen