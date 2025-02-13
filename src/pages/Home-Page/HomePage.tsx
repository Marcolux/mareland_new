import { Link } from "react-router-dom"
import Carousel from "../../components/Carousel/Carousel"
import "./homepage.scss"
import "../page.scss"
import { RESOURCE_FOLDER } from "../../config"
import { useEffect, useState } from "react"

const HomePage = () => {
    const [smallScreenView, setSmallScreenView] = useState('Regular')
    
    useEffect(()=> {
        window.scrollTo(0,0)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => { 
            window.removeEventListener('resize', handleResize)
        }
    },[])
    const handleResize = () => {
        window.innerWidth < 768 ? setSmallScreenView('SmallScreen') : setSmallScreenView('Regular')
    }
    
      useEffect(() => {

      },[])
    return(
        <main className="page p-0" id="homePage">
            <section id="landingSec" className="col-12">
                {smallScreenView === 'SmallScreen'
                 ? <img className="small_screen_img" src={`${RESOURCE_FOLDER}/home-page-imgs/new_landing_small.jpg`} alt="Mareland Jungle view mobile view"/>
                 : <img src={`${RESOURCE_FOLDER}/home-page-imgs/MaReLand_landing.webp`} alt="Mareland Jungle view"/>
                }
            
                <div className="px-30 py-35" id="lndQt">
                    <div className="flex flex-column-md-down">
                        <div className="textQt flex flex-column">
                            <p className="fontSize30 my-0 mb-0"> Tidak akan ada <span className="textSand">pelaut yang hebat</span>, </p>
                            <p className="fontSize30 my-0 ml-20"> Tanpa adanya <span className="textSand">ombak yang besar</span>. </p>
                        </div>
                        <div className="textQt flex flex-column">
                            <p className="fontSize30 my-0 mb-0"> There will be no <span className="textSand">great sailors</span>, </p>
                            <p className="fontSize30 my-0 ml-20"> Without <span className="textSand">big waves</span>.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="marelandSect">
                <div id="marelandCont">
                    <div className="pl-0" id="leftTxt">
                        <div className="flex flex-column pr-40">
                            <p className="sctnHpTitles text-bold">MaReLand</p>
                            <p className="fontSize16 my-0 p-0">
                                MaReLand is the acronym of the EU-funded project “Malaysian Reclaimed Landscapes:
                                Urbanization, Heritage, and Sustainability along the Littoral” hosted by Palacký University
                                Olomouc (Czech Republic). The acronym MaReLand itself challenges sharp divides such as
                                land/sea, nature/society, or cultural/natural and tangible/intangible heritage. It ties together two
                                words, commonly understood as distinct “worlds”: the Latin word for sea, <span className="text-italic">mare</span>, and the English
                                word <span className="text-italic">land</span>.
                            </p>
                            <div className="col-12 flex flex-justifyContent-end mt-20">

                                <Link to={'/MaReLand'} className="btn-1">
                                    <p>Learn More ...</p>
                                </Link>
                            </div>
                        </div>
                        <div className="barSep"></div>
                    </div>
                    <div className=" flex align-items-center" id="picCont">
                        <div className="hlfPic pt-0 pl-0 flex flex-column">
                            <img className="marelandImg1" src="https://res.cloudinary.com/drdrs6pdq/image/upload/f_auto,q_auto/v1707433441/Mareland/MaReLand-boat-landing_bh58hu.png" alt="MaReLand Boat Landing Page"/>
                            <img className="marelandImg2" src="https://res.cloudinary.com/drdrs6pdq/image/upload/f_auto,q_auto/v1707433459/Mareland/MaReLand-murales-landing_qmnaw1.png" alt="MaReLand Murales Landing Page"/>
                        </div>
                        <div className="hlfPic flex flex-column">
                            <img className="marelandImg2" src="https://res.cloudinary.com/drdrs6pdq/image/upload/f_auto,q_auto/v1707433471/Mareland/MaReLand-pontile-landing_gtcl5h.png" alt="MaReLand Pontile Landing Page"/>
                            <img className="marelandImg1" src="https://res.cloudinary.com/drdrs6pdq/image/upload/f_auto,q_auto/v1707433450/Mareland/MaReLand-jungle-landing_ttkujs.png" alt="MaReLand Jungle Landing Page"/>
                        </div>
                    </div>
                </div>
            </section>
                    
            <section id="rclmtnSect" className="pb-40">
                <div id="rclmtnsCont" className="py-20 px-30">

                    <Carousel id="rclmtnPicsSide" className="my-30" type={"single-preview"}/>

                    <div id="rclmtnDescr">
                        <div className="barSep"></div>  
                        <p className="sctnHpTitles text-bold">Publications</p>
                        <div id="rclmtnDescrText">
                            <p className="pr-10 fontSize16 my-0">
                                Here you can find the project-related publications and updates. 
                                All MaReLand research outputs are open access and can be read or downloaded for free. 
                                The website also sets to be a free networking platform bringing together researchers, 
                                activists, and sea aficionados interested in land reclamation processes. 
                                It is a place where everybody can share stories from the field, ideas, findings, perspectives, 
                                and ongoing activities on related topics in Malaysia, the broader Asian region, and beyond.
                            </p>
        
                        </div>
                        <div className="col-12 flex flex-justifyContent-end mt-20">
                            <Link className="btn-1" to={'/Publications'}>
                                <p>Publications</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            
        </main>
    )
}

export default HomePage