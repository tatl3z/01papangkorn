import React from "react";

function News() {
    const styles = {
        section: {
            padding: "50px",
            backgroundColor: "#32577A",
            color: "white",
        },
        heading: {
            fontSize: "36px",
            marginBottom: "20px",
        },
        description: {
            fontSize: "20px",
            marginBottom: "30px",
        },
        contentContainer: {
            display: "grid",
            gridTemplateColumns: "1fr 2fr", // สัดส่วน 1:2
            gap: "3px",
        },
        leftSection: {
            display: "flex",
            flexDirection: "column",
        },
        rightSection: {
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)", // รูปภาพ 2 คอลัมน์
            gap: "5px",
        },
        imageWrapper: {
            width: "100%",
            paddingTop: "100%", // ทำให้เป็นสี่เหลี่ยมจัตุรัส
            position: "relative",
            overflow: "hidden",
            borderRadius: "3px",
        },
        image: {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "80%",
            objectFit: "cover", // ครอบเต็มพื้นที่โดยไม่เสียสัดส่วน
        },
    };

    const images = [
        "https://grandecentrepointratchadamri.com/assets/images/slideshow/mobile/_01-slide.webp?v=81", // รูปภาพ 1
        "https://mpics-cdn.mgronline.com/pics/Images/565000004622601.JPEG", // รูปภาพ 2
        "https://grandecentrepointratchadamri.com/assets/images/facilities/mobile/_Fitness-room.webp?v=81", // รูปภาพ 3
        "https://www.grandecentrepointpattaya.com/upload/rooms/mobile/panoramic-suite-seaview-800px.webp?v=66", // รูปภาพ 4
    ];

    return (
        <div style={styles.section}>
            <div style={styles.contentContainer}>
                {/* Left Section */}
                <div style={styles.leftSection}>
                    <h2 style={styles.heading}>ข่าวสาร</h2>
                    <p style={styles.description}>
                        Planning a gateway? Explore our latest properties around the globe, from sun-warmed escapes to 
                        stylish city skylines to intimate boutique retreats.
                    </p>
                </div>

                {/* Right Section */}
                <div style={styles.rightSection}>
                    {images.map((src, index) => (
                        <div key={index} style={styles.imageWrapper}>
                            <img src={src} alt={`News ${index + 1}`} style={styles.image} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default News;
