import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container-fluid">
                {/* โลโก้ด้านซ้าย */}
                <a className="navbar-brand" href="#">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/800px-Manchester_City_FC_badge.svg.png" 
                        alt="Logo" 
                        className="navbar-logo" 
                    />
                </a>

                {/* ข้อความหน้าแรกด้านขวา */}
                <a className="navbar-brand text-white ms-auto" href="#">หน้าแรก</a>
            </div>

            {/* Inline CSS */}
            <style jsx>{`
                .custom-navbar {
                    background-color: #406E94; /* สีพื้นหลังน้ำเงินเข้ม */
                }
                .navbar-logo {
                    height: 40px; /* ปรับขนาดโลโก้ */
                }
                .navbar-brand {
                    color: white !important; /* ข้อความสีขาว */
                }
                .ms-auto {
                    margin-left: auto; /* ดันข้อความไปด้านขวาสุด */
                }
            `}</style>
        </nav>
    );
}

export default Navbar;
