import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./pages/Carousel";
import RoomTypes from "./pages/RoomTypes";
import News from "./pages/News";
import Reviews from "./pages/Reviews";
import Footer from "./pages/Footer";
import RoomDetails from "./pages/RoomDetails"; // แก้ไข import ให้สอดคล้องกับตำแหน่งไฟล์จริง

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    {/* เส้นทางสำหรับหน้าแรก */}
                    <Route
                        path="/"
                        element={
                            <>
                                <Carousel />
                                <RoomTypes />
                                <News />
                                <Reviews />
                                <Footer />
                            </>
                        }
                    />
                    {/* เส้นทางสำหรับหน้ารายละเอียดห้องพัก */}
                    <Route path="/room-details/:type" element={<RoomDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
