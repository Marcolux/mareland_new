import { Link } from "react-router-dom"
import "../page.scss" 
import "./aboutDeGiosa.scss" 
import { RESOURCE_FOLDER } from "../../config"
import { useEffect } from "react"

const AboutDeGiosa = () => {
        useEffect(()=> {
            window.scrollTo(0,0)
        },[])

    return(
        <main className="page flex flex-justifyContent-center py-40"  id="aboutPierpa">
            <section id="aboutPageSec" className="p-30">
                <div id="aboutMainDiv" className="col-12">
                    
                        <div className="fontSize16 aboutText">
                            <img id="pierpaoloPic" className="mb-40 mr-30" src={`${RESOURCE_FOLDER}/Pierpaolo_DeGiosa_Foto_About.webp`} alt="Pierpaolo De Giosa Mareland"/>
                            <p className="mt-10 mb-0">
                                <span className="sctnHpTitles fontSize20 text-bold">Pierpaolo De Giosa</span> was born and raised in the coastal city of Bari, southern Italy. His soul belongs
                                to the sea.
                            </p>
                            <p className="mt-10 mb-0">
                                Pierpaolo is a sociocultural anthropologist and hard-working ethnographer with broad fieldwork
                                experience in Malaysia, Indonesia, and Timor-Leste. His research interests include urban and
                                political anthropology, critical heritage studies, space and place-making practices, and Southeast
                                Asian studies.
                            </p>
                            <p className="mt-10 mb-0">
                                Pierpaolo received a BA in International and Diplomatic Relations from the University of Napoli
                                L’Orientale (Italy) and a Research MA in Asian Studies from Leiden University (The
                                Netherlands). He obtained his PhD in Social Anthropology from Martin Luther University
                                of Halle-Wittenberg (Germany) while working at the Max Planck Institute for Social
                                Anthropology as member of the research group “The Global Political Economy of Cultural
                                Heritage”. Based on ethnographic fieldwork carried out in the Malaysian historical city par
                                excellence, his PhD project explored the politics of heritage of Melaka.
                            </p>
        
                            <p className="mt-10 mb-0">
                                His  
                                <Link 
                                    to="https://www.aup.nl/en/book/9789463725026/world-heritage-and-urban-politics-in-melaka-malaysia" 
                                    target="_blank"
                                > first book </Link> 
                                “World Heritage and Urban Politics in Melaka, Malaysia: A Cityscape Below the
                                Winds” was published by Amsterdam University Press in 2021.
                            </p>
                            <p className="sctnHpTitles fontSize18 text-bold">Other Publications:</p>
                            <table>
                                <tbody>
                                    <tr className="table_row">
                                        <td className="sctnHpTitles fontSize16">2025:</td>
                                        <td>
                                            <p>De Giosa, Pierpaolo. “Like the Story of the Camel and its Master!”: A Melakan Village between Vernacular Heritage and Urban Transformation.</p>
                                            <p>In: Michael Herzfeld & Rita Padawangi (eds) <i>Resilience as Heritage in Vernacular Asia</i>. Amsterdam University Press.</p>
                                        </td>
                                    </tr>
                                    <tr className="table_row">
                                        <td className="sctnHpTitles fontSize16">2023:</td>
                                        <td>
                                            <p>De Giosa, Pierpaolo. <i>A Cityscape below the Winds.</i> IIAS Newsletter, 94.</p>
                                        </td>
                                    </tr>
                                    <tr className="table_row">
                                        <td className="sctnHpTitles fontSize16">2022:</td>
                                        <td>
                                            <p>De Giosa, Pierpaolo. <i>Il Boom Edilizio oltre i Confini del Patrimonio Mondiale della Città di Malacca</i> 
                                            [The Construction Boom beyond the Boundaries of the World Heritage of Melaka].</p>
                                            <p>RISE: Quarterly Journal on the International Relations and International Political Economy of South-East Asia, 6(3), pp. 8-11.</p>
                                        </td>
                                    </tr>
                                    <tr className="table_row">
                                        <td className="sctnHpTitles fontSize16">2020:</td>
                                        <td>
                                            <p>De Giosa, Pierpaolo. <i>Heritage-lah! A Legacy of a Few Wor(l)ds in Peninsular Malaysia.</i></p>
                                            <p>Moussons: Social Science Research on Southeast Asia, 36, pp. 163-189.</p>
                                        </td>
                                    </tr>
                                    <tr className="table_row">
                                        <td className="sctnHpTitles fontSize16">2019:</td>
                                        <td>
                                            <p>De Giosa, Pierpaolo. <i>Commemorating the Santa Cruz Massacre in Dili, Timor-Leste.</i></p>
                                            <p>Visual Ethnography, 8(1), pp. 83-97.</p>
                                        </td>
                                    </tr>
                                    <tr className="table_row">
                                        <td className="sctnHpTitles fontSize16">2011:</td>
                                        <td>
                                            <p>De Giosa, Pierpaolo. <i>Urban Symbolism in Yogyakarta: In Search of the Lost Symbol.</i></p>
                                            <p>In: Peter J.M. Nas (ed) <i>Cities full of Symbols: A Theory of Urban Space and Culture</i>, pp. 84-106. Leiden University Press.</p>
                                        </td>
                                    </tr>
                                    <tr className="table_row">
                                        <td className="sctnHpTitles fontSize16">2011:</td>
                                        <td>
                                            <p>De Giosa, Pierpaolo. <i>Kudus and Blitar: A Tale of Two Javanese Iconic Cities.</i></p>
                                            <p>In: Peter J.M. Nas (ed) <i>Cities full of Symbols: A Theory of Urban Space and Culture</i>, pp. 197-215. Leiden University Press.</p>
                                        </td>
                                    </tr>
                                    <tr className="table_row">
                                        <td className="sctnHpTitles fontSize16">2011:</td>
                                        <td>
                                            <p>Nas, Peter J. M. & Pierpaolo De Giosa. <i>Conclusion: Feeling at Home in the City and the Codification of Urban Symbolism Research.</i></p>
                                            <p>In: Peter J.M. Nas (ed) <i>Cities full of Symbols: A Theory of Urban Space and Culture</i>, pp. 283-292. Leiden University Press.</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        
                            <p className="mt-10 mb-0">
                                    Pierpaolo was awarded a Marie Skłodowska-Curie Actions (MSCA) fellowship for the research project MaReLand 
                                    (Malaysian Reclaimed Landscapes: Urbanization, Heritage, and Sustainability along the Littoral) 
                                    between 2023 and 2025. As a postdoctoral researcher at the Department of Asian Studies of Palacký University Olomouc (Czech Republic), 
                                    he explored land reclamation processes in Malaysia, 
                                    the workings of sea-related environmentalism and activism, 
                                    and the politics of urban planning and compensation along the littoral.
                                    <br />
                                    <br />Currently Pierpaolo is a postdoctoral fellow at CNRS, UMR 8504 Géographie-cités Paris (France).
                            </p>
                            <p className="mt-10 mb-0">You can get in touch with him via <u><span className="text-italic">pierpa.degios@zoho.com</span></u> or <u><span className="text-italic">pierpaolo.de.giosa@parisgeo.cnrs.fr</span></u>.</p>
                        </div>
                </div>
            </section>
        </main>
    )
}

export default AboutDeGiosa