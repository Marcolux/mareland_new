import "../page.scss" 
import "./reclamations.scss" 
import { RESOURCE_FOLDER } from "../../config"
import { useEffect } from "react"

import BlogCard from "../../components/ReclamationsCard/BlogCard"

const Reclamations = () => {
    useEffect(()=> {
        window.scrollTo(0,0)
    },[])
    
    const pierpaCard = BlogCard({
        title: 'From Transport Development to Land Reclamation: Contested Spatio-Temporalities ⁠along Penang’s Littoral, Malaysia',
        author: 'Pierpaolo De Giosa',
        info: '- Island Studies Journal - Vol. 19, Issue 2, 2024',
        abstract: '“One island is enough” was written on a banner shaped like Penang Island, Malaysia, during a demonstration against the plan to create three artificial islands. The Penang South Reclamation (PSR) project, adopted by the local administration and developers, aims to finance the Penang Transport Master Plan (PTMP). This ambitious plan includes several components, such as monorail and light rapid transit lines. While land reclamation is not new in Penang, this mega-development project has faced unprecedented opposition from a wide range of actors. In dialogue with fishers and activists supporting the Penang Tolak Tambak (Penang Rejects Reclamation) campaign, and through the analysis of government documents, non-governmental reports, news articles, and social media, this paper traces how state, corporate, and civil society actors have shifted their focus from the PTMP to the PSR project. Thus far, scholarly literature on island environmental movements has focused on the right to the island and the right to nature, while claims related to the land-sea interfaces, which so clearly delineate island spatialities, have been somewhat neglected. By exploring the contested spatio-temporalities of this land reclamation project off the south coast of Penang, this paper expands the dialogue of the right to the island to include the right to the sea.',
        link: 'https://islandstudiesjournal.org/article/125847-from-transport-development-to-land-reclamation-contested-spatio-temporalities-along-penang-s-littoral-malaysia',
        img: `${RESOURCE_FOLDER}/manifest.jpeg`
    })

    const pierpaCard2 = BlogCard({
        title: '‘Would you move to a house with no toilet?’: The fishers of Jelutong jetty and the right to stay put',
        author: 'Nurul Azreen Azlan & Pierpaolo De Giosa',
        info: '- ARIscope - 27 November 2024 -',
        abstract: `If one sits on the wooden benches of the jetty of Jelutong when fishers gather to work on their rawai used for longline fishing, deep knowledge of and connections to the sea seem to emerge in every single word. Seng, for example, explained to us that they use octopus’ tentacles as baits for their rawai hooks, because fishes prefer octopuses just as people do. “It’s a luxury dish! Now even a fish is educated (ikan sekarang pergi tuisyen)”, he averred, implying that fishes have discerning taste. In this poetic outburst, Seng emphasized that sea creatures and humans are more similar that one thinks, even if species like octopuses are considered “mean” (jahat). “But they [octopuses] are just like us [humans], because they want to escape, to survive”, Seng added. His words remind us about a subtle connection between fishers and sea creatures. They are trying to stay put along the place they know the most, a land-sea interface under pressure because of constant land reclamation.`,
        link: 'https://ari.nus.edu.sg/ariscope/the-fishers-of-jelutong-jetty/',
        img: `${RESOURCE_FOLDER}/view-from-the-entrance-of-the-jetty.avif`
    })


    return(
        <main className="page flex flex-column" id="publications">
                <p id="page-description">
                    Here you can find the project-related publications and updates. 
                    All MaReLand research outputs are open access and can be read or downloaded for free. 
                    The website also sets to be a free networking platform bringing together researchers, 
                    activists, and sea aficionados interested in land reclamation processes. 
                    It is a place where everybody can share stories from the field, ideas, findings, perspectives, 
                    and ongoing activities on related topics in Malaysia, the broader Asian region, and beyond.
                    <br/>
                    <br/>For more information, you can get in touch with the Pierpaolo De Giosa via 
                    pierpa.degios@zoho.com or pierpaolo.degiosa@upol.cz.
                </p>
            <section id="publicationsSec" className="pb-25">

                {pierpaCard}
                {pierpaCard2}
            </section>


        </main>
    )
}

export default Reclamations