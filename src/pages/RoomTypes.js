import React from "react";
import { useNavigate } from "react-router-dom";

function RoomTypes() {
    const navigate = useNavigate(); // Initialize useNavigate

    const styles = {
        section: {
            padding: "100px",
            textAlign: "center",
        },
        heading: {
            fontSize: "36px",
            textAlign: "center",
            marginBottom: "30px",
        },
        roomsContainer: {
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
        },
        roomCard: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "white",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            width: "300px",
            textAlign: "left",
        },
        image: {
            width: "100%",
            height: "auto",
            borderRadius: "8px",
        },
        cardHeading: {
            fontSize: "18px",
            margin: "15px 0",
        },
        cardText: {
            fontSize: "14px",
            color: "#555",
        },
        button: {
            backgroundColor: "#345b7e",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            cursor: "pointer",
            fontSize: "14px",
            marginTop: "auto",
            textAlign: "center",
        },
    };

    const roomData = [
        {
            img: "https://www.grandecentrepointpattaya.com/upload/rooms/mobile/deluxe-corner-seaview-800px.webp?v=66",
            title: "ห้องพักที่มีวิวธรรมชาติ",
            description: "ห้องพักที่ให้ความรู้สึกผ่อนคลายและสะดวกสบาย...",
            link: "/room-details/nature-view", // เส้นทางหน้ารายละเอียด
        },
        {
            img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/163577354.jpg?k=9b0a6f223e654f1e1830c3809bd915537a19de843370c1964d877134ec1721b4&o=&hp=1",
            title: "ห้องพักวิวเมือง",
            description: "ดื่มด่ำกับบรรยากาศสุดพิเศษ...",
            link: "/room-details/city-view",
        },
        {
            img: "https://grande-centre-point-space-pattaya.hotelmix.co.th/data/Photos/OriginalPhoto/12984/1298490/1298490589/Grande-Centre-Point-Space-Pattaya-Hotel-Exterior.JPEG",
            title: "ห้องพักสุดหรู",
            description: "สัมผัสความหรูหราในห้องพักระดับพรีเมียม...",
            link: "/room-details/luxury",
        },
    ];

    return (
        <div style={styles.section}>
            <h2 style={styles.heading}>ประเภทห้องพัก</h2>
            <div style={styles.roomsContainer}>
                {roomData.map((room, index) => (
                    <div key={index} style={styles.roomCard}>
                        <img src={room.img} alt={room.title} style={styles.image} />
                        <h3 style={styles.cardHeading}>{room.title}</h3>
                        <p style={styles.cardText}>{room.description}</p>
                        <button
                            style={styles.button}
                            onClick={() => navigate(room.link)} // ใช้ navigate ไปยังหน้าที่กำหนด
                        >
                            รายละเอียดห้องพัก
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RoomTypes;
