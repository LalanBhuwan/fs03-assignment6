const Nav = ()=>{
    return(
        <div className="nav_container dis_flex ">
            <div className="dis_flex flex_center logo">
                <img src="https://toppng.com/uploads/preview/hootsuite-logo-11609364403grrqpnnhbl.png"alt="logo-img"/>

            </div>
            <div className="menu dis_flex flex_center font_bold">
                <span>Platform</span>
                <span>Plans</span>
                <span>Enterprise</span>
                <span>Resources</span>
                <span>Education</span>
            </div>
            <div className="dis_flex flex_center login">
                <span>Contact Us</span>
                <button style={{color:"black", backgroundColor:"white"}}>Log in</button>
                <button style={{width:"65px", height: "25px"}}>Sign Up</button>
            </div>

        </div>
    );
}
export default Nav;