import './footer.scss'
import { RESOURCE_FOLDER } from "../../config"
const Footer = () => {
    return (
        <div className='footer col-12'>
            <img className='boatImgs' id="boat-2" src={`${RESOURCE_FOLDER}/boat-nobg.png`} alt="boat 2 small screen"/>
            <div id="logoFooter" className="flex col-12">
                <img src="footer-pics/EN_FundedbytheEU_RGB_WHITE_Outline_1_g2kefz.webp" alt="EU Logo"/>
                <p className="textWhite footerDescription fontSize16 col-6">Funded by the European Union. Views and opinions expressed are however those of the author only and do not necessarily reflect those of the European Union. Neither the European Union nor the granting authority can be held responsible for them.</p>
                <div className="textWhite pb-20">
                    <img id="olomouc" className="" src="footer-pics/HostedByLogo_va3jrt.webp" alt="Uni Logo"/>
                </div>
            </div>
            <p className="fontSize13 text-center webLink">Website created and designed by <a href="https://webcrafts.solutions/" target="_blank" className="webcraftLink">Webcraft</a> - 2024 - </p>  
        </div>
    )
}

export default Footer