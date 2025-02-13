import "../page.scss" 
import "./mareland.scss"
import { RESOURCE_FOLDER } from "../../config"
import { useEffect } from "react"

const MaReLand = () => {
    useEffect(()=> {
        window.scrollTo(0,0)
    },[])

    return(
        <main className="page flex flex-justifyContent-center py-40" id="maReLand">
            <section id="MarelandPageSec" className="p-30">
    
                <div className="flex flex-column flex-justifyContent-center flex-alignItems-center col-12">
    
                    <div className="marelandPicTextSec flex col-12">
                        <p className="fontSize16 my-0" id="textLogo">
                            <span className="sctnHpTitles fontSize20 text-bold">MaReLand</span> is the acronym of the EU-funded project “Malaysian Reclaimed Landscapes:
                            Urbanization, Heritage, and Sustainability along the Littoral” hosted by Palacký University
                            Olomouc (Czech Republic). The acronym MaReLand itself challenges sharp divides such as
                            land/sea, nature/society, or cultural/natural and tangible/intangible heritage. It ties together two
                            words, commonly understood as distinct “worlds”: the Latin word for sea, <span className="text-italic">mare</span>, and the English
                            word <span className="text-italic">land</span>. This acronym is even more relevant for Malaysia because it recalls the Malay compound
                            <span className="text-italic"> tanah air</span>, “land (and) water”, for homeland. Most societies in the world use land-biased words for
                            homeland. The <span className="text-italic">tanah air</span> compound recalls a much more fluid history of interconnections, from the
                            thalassocracies and cosmopolitan centers of the Malay archipelago to the contemporary legacies of this littoral
                            society.
                        </p>
                        <div className="flex flex-column flex-alignItems-center pl-35 pr-20" id="logoText">
                            <img className="flex flex-justifyContent-center" id="logoPic" src={`${RESOURCE_FOLDER}/android-chrome-512x512.png`} alt="MaReLand Logo By Rossella De Giosa 2023"/>
                            <sub className="mt-15">MaReLand Logo © Rossella De Giosa 2023</sub>      
                        </div>
                    </div>
    
                    <div className="marelandPicTextSec flex flex-column wikiPic">
                        <p className="fontSize16 my-20">
                            MaReLand is an interdisciplinary project and ethnographic study of land reclamation along the
                            Malaysian littoral. Reclamation is the act of creating new land and artificial islands from the sea.
                            The approach that the state and developers are taking is reminiscent of neo-colonial and neoliberal
                            conceptions of the <span className="text-italic">mare nullius</span> (“nobody’s sea”), an empty space to be transformed by large-scale
                            construction projects. Many are concerned about the socio-ecological effects for the environment
                            and coastal communities. On the one hand, reclaimed landscapes are being planned for the
                            development of high-tech fantasies of a luxurious lifestyle in a greener and smarter environment.
                            On the other hand, such projects are intended to transform spaces that nevertheless represent
                            enduring heritage such as fisheries, seascapes and biodiversity. Reclaimed landscapes thus emerge
                            as contested spaces where what is not considered heritage becomes attractive for development.
                        </p>
                        <div className="flex flex-column flex-alignItems-center img_sec">
                            <img className="siliconIsland" alt="Silicon Island, George Town, Penang 2023" src={`${RESOURCE_FOLDER}/mareland-imgs/Silicon_Island,_George_Town,_Penang_2023.jpg`}/>
                            <sub className="mt-15">Drone photo of Silicon Island, a man-made islet under construction in George Town. Rimau Island
                                can be seen in the background; Wikimedia Commons user HundenvonPenang(<a href="https://commons.wikimedia.org/wiki/File:Silicon_Island,_George_Town,_Penang_2023.jpg" target="_blank">Link</a>), 11
                                December 2023; image reproduced under the Creative Commons Attribution-Share Alike 4.0
                                International.
                            </sub>
                        </div>
                    </div>

                    <div className="marelandPicTextSec flex flex-column col-12 wikiPic">
                        <p className="fontSize16 my-20 ">
                            MaReLand explores the competing discourses of sustainability and heritage held by a variety of
                            actors. Situated at the intersection of urban anthropology, critical heritage studies and
                            marine/coastal research, the project explores environmental activism, critiques of heritage
                            hierarchies, urbanisation at sea, and compensation policies for yet-to-be-built (is)lands to enhance
                            understanding of the right to the sea.
                        </p>
                        <div className="flex flex-column flex-alignItems-center img_sec">
                            <img className="siliconIsland" alt="Silicon Island, George Town, Penang 2023" src={`${RESOURCE_FOLDER}/mareland-imgs/Silicon_Island-1.jpg`}/>
                            <sub className="mt-15">
                                Drone photo of Silicon Island in George Town, Penang. Wikimedia Commons user HundenvonPenang  
                                (<a href="https://commons.wikimedia.org/wiki/File:Silicon_Island_in_George_Town,_Penang_Dec2024-1.jpg" target="_blank">Link</a>), 
                                8 December 2024; 
                                image reproduced under the Creative Commons Attribution-Share Alike 4.0 International. 
                            </sub>
                        </div>
                    </div>
                    
                    <div className="col-12 flex flex-alignItems-center flex-justifyContent-start bottomInfo mt-20">
                        <p className="m-0" id="info">
                            Funded by the EU under the Marie Skłodowska-Curie Actions (MSCA)
                            <span>Grant Agreement ID: 101062825</span>
                            <span>DOI: 10.3030/101062825</span>
                        </p>
                    </div>
                </div>
            
            </section>
        
        </main>
    )
}

export default MaReLand