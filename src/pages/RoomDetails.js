import React from "react";
import { useNavigate } from "react-router-dom";
import "./RoomDetails.css"; // ใช้ไฟล์ CSS แยกสำหรับจัดการสไตล์

function RoomDetails() {
    const navigate = useNavigate(); // ใช้ navigate สำหรับเปลี่ยนเส้นทาง

    const handleBooking = () => {
        navigate("/confirmation"); // เปลี่ยนไปยังหน้าถัดไป
    };

    return (
        <div className="room-details-container">
            {/* Section ภาพและแบบฟอร์มการจอง */}
            <div className="room-header">
                <div className="image-gallery">
                    <img
                        src="https://www.grandecentrepointpattaya.com/upload/rooms/mobile/deluxe-corner-seaview-800px.webp?v=66"
                        alt="Main Room"
                        className="main-image"
                    />
                    <div className="thumbnail-container">
                        <img
                            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/163577354.jpg?k=9b0a6f223e654f1e1830c3809bd915537a19de843370c1964d877134ec1721b4&o=&hp=1"
                            alt="Thumbnail 1"
                            className="thumbnail-image"
                        />
                        <img
                            src="https://grande-centre-point-space-pattaya.hotelmix.co.th/data/Photos/OriginalPhoto/12984/1298490/1298490589/Grande-Centre-Point-Space-Pattaya-Hotel-Exterior.JPEG"
                            alt="Thumbnail 2"
                            className="thumbnail-image"
                        />
                        <img
                            src="https://www.grandecentrepointpattaya.com/upload/rooms/mobile/deluxe-corner-seaview-800px.webp?v=66"
                            alt="Thumbnail 3"
                            className="thumbnail-image"
                        />
                        <img
                            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/163577354.jpg?k=9b0a6f223e654f1e1830c3809bd915537a19de843370c1964d877134ec1721b4&o=&hp=1"
                            alt="Thumbnail 4"
                            className="thumbnail-image"
                        />
                    </div>
                </div>

                <div className="booking-form">
                    <h4>เลือกวันที่เข้าพัก</h4>
                    <form>
                        <div className="form-group">
                            <label>วัน</label>
                            <select>
                                <option>1</option>
                                <option>2</option>
                            </select>
                            <label>เดือน</label>
                            <select>
                                <option>ม.ค.</option>
                                <option>ก.พ.</option>
                            </select>
                            <label>ปี</label>
                            <select>
                                <option>2567</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>จำนวนผู้เข้าพัก</label>
                            <input type="number" defaultValue={1} />
                        </div>
                        <div className="price">ราคาทั้งหมด: 1,000 บาท</div>
                        <button
                            type="button"
                            className="booking-button"
                            onClick={handleBooking}
                        >
                            จองห้อง
                        </button>
                    </form>
                </div>
            </div>

            {/* รายละเอียดห้องพัก */}
            <div className="room-description">
                <h3>รายละเอียด</h3>
                <p>
                    ห้องนี้ออกแบบมาเพื่อความสะดวกสบาย โดยมาพร้อมกับวิวที่น่าตื่นตาตื่นใจและสิ่งอำนวยความสะดวกครบครัน...
                </p>
            </div>

            {/* สิ่งอำนวยความสะดวก */}
            <div className="room-amenities">
                <h4>สิ่งอำนวยความสะดวก</h4>
                <div className="amenities-container">
                    <div className="amenity-item">
                        <img src="https://static.vecteezy.com/system/resources/previews/007/957/383/non_2x/wi-fi-icon-wifi-signal-icon-wireless-internet-connection-signal-illustration-isolated-on-white-background-vector.jpg" alt="Wi-Fi" className="thumbnail-image" />
                        <p>ฟรี Wi-Fi</p>
                    </div>
                    <div className="amenity-item">
                        <img src="https://cdn-icons-png.flaticon.com/512/2771/2771401.png" alt="Breakfast" className="thumbnail-image" />
                        <p>อาหารเช้าฟรี</p>
                    </div>
                    <div className="amenity-item">
                        <img src="https://static.vecteezy.com/system/resources/previews/003/694/243/non_2x/car-icon-in-flat-style-simple-traffic-icon-free-vector.jpg" alt="Parking" className="thumbnail-image"/>
                        <p>ที่จอดรถ</p>
                    </div>
                    <div className="amenity-item">
                        <img src="https://static.vecteezy.com/system/resources/previews/003/694/243/non_2x/car-icon-in-flat-style-simple-traffic-icon-free-vector.jpg" alt="Shuttle" className="thumbnail-image"/>
                        <p>รถรับส่ง</p>
                    </div>
                </div>
            </div>

            {/* รีวิว */}
            <div className="room-reviews">
                <h4>รีวิวห้องพัก</h4>
                <div className="review-item">ห้องสะอาด: ⭐⭐⭐⭐⭐</div>
                <div className="review-item">วิวสวย: ⭐⭐⭐⭐</div>
                <div className="review-item">บริการดี: ⭐⭐⭐⭐⭐</div>
            </div>
        </div>
    );
}

export default RoomDetails;
