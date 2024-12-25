import React from "react";
import { useNavigate } from "react-router-dom"; // นำเข้า useNavigate

function Navbar() {
    const navigate = useNavigate(); // สร้างตัวนำทาง

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
                <button
                    className="navbar-brand text-white ms-auto"
                    onClick={() => navigate("/")} // ใช้ navigate เพื่อนำไปยังหน้าแรก
                >
                    หน้าแรก
                </button>
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
                    border: none; /* ลบเส้นขอบ */
                    background: none; /* ลบพื้นหลัง */
                    cursor: pointer; /* เปลี่ยนเมาส์เป็นรูปมือ */
                    font-size: 16px; /* ขนาดตัวอักษร */
                }
                .ms-auto {
                    margin-left: auto; /* ดันข้อความไปด้านขวาสุด */
                }
            `}</style>
        </nav>
    );
}

export default Navbar;
