const Footer = ()=>{
    return(
        <div className="footer_container dis_flex flex_center gap_20px">
            <div className="dis_flex flexdrectoin_cl flex_center">
                <img src="https://www.iconpacks.net/icons/2/free-rocket-icon-3432-thumb.png" alt="ent-img"/>
                <span className="font_bold">2,500</span>
                <span>enterprise organizations successfully launched</span>
            </div>
            <div className="dis_flex flexdrectoin_cl flex_center " >
                <img src="https://nulab.com/images/compare/cards/onboard-team-members-in-minutes.png" alt="onboarded-img" style={{width:"100px"}}/>
                <span className="font_bold">45,000</span>
                <span>enterprise users onboarded seamlessly</span>
            </div>
            <div className="dis_flex flexdrectoin_cl flex_center">
                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/strategy-training-1050015.png" alt="strategy-img"/>
                <span className="font_bold">200,000+</span>
                <span>professionals trained on product and strategy</span>
            </div>
        </div>
    );
}
export default Footer;