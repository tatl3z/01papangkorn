import React from "react";
import "./RoomDetails.css"; // ใช้ไฟล์ CSS แยกสำหรับจัดการสไตล์

function RoomDetails() {
    return (
        <div className="room-details-container">
            {/* Section ภาพและแบบฟอร์มการจอง */}
            <div className="room-header">
                <div className="image-gallery">
                    <img
                        src="https://via.placeholder.com/500x300"
                        alt="Main Room"
                        className="main-image"
                    />
                    <div className="thumbnail-container">
                        <img
                            src="https://via.placeholder.com/100x70"
                            alt="Thumbnail 1"
                            className="thumbnail-image"
                        />
                        <img
                            src="https://via.placeholder.com/100x70"
                            alt="Thumbnail 2"
                            className="thumbnail-image"
                        />
                        <img
                            src="https://via.placeholder.com/100x70"
                            alt="Thumbnail 3"
                            className="thumbnail-image"
                        />
                        <img
                            src="https://via.placeholder.com/100x70"
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
                        <button type="button" className="booking-button">จองห้อง</button>
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
                        <img src="https://via.placeholder.com/50" alt="Wi-Fi" />
                        <p>ฟรี Wi-Fi</p>
                    </div>
                    <div className="amenity-item">
                        <img src="https://via.placeholder.com/50" alt="Breakfast" />
                        <p>อาหารเช้าฟรี</p>
                    </div>
                    <div className="amenity-item">
                        <img src="https://via.placeholder.com/50" alt="Parking" />
                        <p>ที่จอดรถ</p>
                    </div>
                    <div className="amenity-item">
                        <img src="https://via.placeholder.com/50" alt="Shuttle" />
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
