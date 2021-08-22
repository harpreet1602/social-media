import "./Navbar.css";
let Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="heading">
                    <div className="green">ATG</div>
                    <div className="black">.W
                        <div className="image"><img className="logo" src="o.png" /></div>

                        RLD</div>
                </div>
                <div className="search">
                    <span className="material-icons">
                        search
                    </span>
                    <input placeholder="Search for your favorite groups in ATG" className="search-btn" type="search" />
                </div>
                <div className="account">
                    <div className="one">
                        Create account. 
                    </div>
                    <div className="second">
                        It's free!
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar;