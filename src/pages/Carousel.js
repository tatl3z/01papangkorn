import React from "react";

function Carousel() {
    const styles = {
        carouselItem: {
            position: "relative",
            overflow: "hidden", // ป้องกันไม่ให้ภาพล้นออกจากขอบ
            height: "500px", // กำหนดความสูงของ carousel
        },
        backgroundImage: {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed", // ทำให้ภาพพื้นหลังไม่ขยับ
            zIndex: "-1", // ให้อยู่ด้านหลัง
        },
        overlayImage: {
            position: "relative",
            width: "60%", // ปรับขนาดของภาพที่เลื่อน
            maxWidth: "700px", // ขนาดสูงสุดของภาพ
            zIndex: "1", // ให้อยู่เหนือภาพพื้นหลัง
            borderRadius: "15px", // ขอบมน
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)", // เพิ่มเงา
        },
        textOverlay: {
            position: "absolute",
            bottom: "20px", // ขยับข้อความไปข้างล่าง
            left: "20px", // ขยับข้อความไปทางซ้ายสุด
            color: "white",
            fontSize: "30px", // ขยายขนาดตัวอักษร
            fontWeight: "bold", // ตัวหนา
            zIndex: "2", // ให้อยู่เหนือภาพ
        },
    };

    return (
        <div className="row">
            <div
                id="carouselExampleDark"
                className="carousel carousel-dark slide"
                data-bs-ride="carousel"
            >
                {/* Indicators */}
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>

                {/* Slides */}
                <div className="carousel-inner">
                    {/* Slide 1 */}
                    <div className="carousel-item active" data-bs-interval="5000">
                        {/* Background Image (fixed) */}
                        <div
                            style={{
                                ...styles.backgroundImage,
                                backgroundImage:
                                    "url('https://cf.bstatic.com/xdata/images/hotel/max1024x768/160819684.jpg?k=2cf0c72533491d9a2662a8b13d5e136872102fa03318ab34c6803988ea8a3033&o=&hp=1')", // รูปพื้นหลังคงที่
                            }}
                        />
                        <img
                            src="https://www.chillpainai.com/src/wewakeup/scoop/images/4ea987da8544a9c78adc409148458a228059aacc.jpg"
                            alt="Overlay"
                            style={styles.overlayImage}
                        />
                        <div style={styles.textOverlay}>TERMINAL XD</div>
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item" data-bs-interval="5000">
                        {/* Background Image (fixed) */}
                        <div
                            style={{
                                ...styles.backgroundImage,
                                backgroundImage:
                                    "url('https://cf.bstatic.com/xdata/images/hotel/max1024x768/160819684.jpg?k=2cf0c72533491d9a2662a8b13d5e136872102fa03318ab34c6803988ea8a3033&o=&hp=1')", // รูปพื้นหลังคงที่
                            }}
                        />
                        <img
                            src="https://www.grandecentrepointhotels.com/assets/images/slideshow/t21/09-slide.jpg?2023"
                            alt="Overlay"
                            style={styles.overlayImage}
                        />
                        <div style={styles.textOverlay}>TERMINAL XD</div>
                    </div>

                    {/* Slide 3 */}
                    <div className="carousel-item">
                        {/* Background Image (fixed) */}
                        <div
                            style={{
                                ...styles.backgroundImage,
                                backgroundImage:
                                    "url('https://cf.bstatic.com/xdata/images/hotel/max1024x768/160819684.jpg?k=2cf0c72533491d9a2662a8b13d5e136872102fa03318ab34c6803988ea8a3033&o=&hp=1')", // รูปพื้นหลังคงที่
                            }}
                        />
                        <img
                            src="https://grandecentrepointsukhumvit55.com/assets/images/slideshow/_slideshow-1.webp?v=76"
                            alt="Overlay"
                            style={styles.overlayImage}
                        />
                        <div style={styles.textOverlay}>TERMINAL XD</div>
                    </div>
                </div>

                {/* Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
