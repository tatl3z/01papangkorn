import React from "react";

function Reviews() {
  // ข้อมูลรีวิว
  const reviewsData = [
    { 
      id: 1, 
      name: "ลูกค้า 1", 
      review: "วิวสวยมาก บริการดี", 
      stars: 4, 
      image: "https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.15752-9/456463273_1908270516335602_4456046071456529746_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFzmGw0and7hnDlQB2h3izkZDW9NVdmwtpkNb01V2bC2hi1yr3CWfONhQIFaB9Nv1wSQ7thu2zNicEf5NpvMi_9&_nc_ohc=I7362k_wXWcQ7kNvgEgsnaR&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&oh=03_Q7cD1QGIdik3Yq5f5Dg_SwTn7Iq-JfNQY7XVEsxcl92SUKY7Rg&oe=677761B9" // URL รูปของลูกค้า
    },
    { 
      id: 2, 
      name: "ลูกค้า 2", 
      review: "อาหารทางโรงแรมอร่อย บรรยากาศดี", 
      stars: 5, 
      image: "https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.15752-9/455202585_867658888626574_2001816626644250381_n.png?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGmxwXerW_HBhapa7tf-rYrxOy2ofE2GtjE7Lah8TYa2BptGp1K7jUnn7V2448anFUAcYomtkmuGuQPtR0Tbnb-&_nc_ohc=hXFOyQ0LWQQQ7kNvgEiHqi-&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&oh=03_Q7cD1QF90iFgz_DXj_q5-yxHW1A7HBwEYkgvrS14yUkiPHlYtg&oe=67776950" 
    },
    { 
      id: 3, 
      name: "ลูกค้า 3", 
      review: "วิวดีมากเลยได้ผ่อนคลายเลย", 
      stars: 3, 
      image: "https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.15752-9/455597945_409454392146908_8563426455484251761_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE6uRD5edCjfcDuJ48vxfspZpaW4cf4EFtmlpbhx_gQWxhExgqclJU3pyNo9CTt90iSWYyqpnCktLliHMMYd__l&_nc_ohc=tKO1hmPDZtYQ7kNvgH0-0Cp&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&oh=03_Q7cD1QEZJgVIWAZSBWXRKCRmbYTQU9FihbAX-7tPHwTq7eSSBQ&oe=67775F45" 
    },
  ];

  return (
    <div style={styles.wrapper}>
      {/* ภาพพื้นหลัง */}
      <div style={styles.imageContainer}>
        <img 
          src="https://www.grandecentrepointpattaya.com/upload/the-sky-32-restaurant/mobile/5-the-sky-32-restaurant.jpg?v=66" // ใช้ลิงก์ภาพจริงของคุณ
          alt="Rooftop Bar" 
          style={styles.image}
        />
      </div>

      {/* กล่องแสดงรีวิว */}
      <div style={styles.reviewsContainer}>
        <h2 style={styles.header}>รีวิวลูกค้า</h2>
        {reviewsData.map((review) => (
          <div key={review.id} style={styles.card}>
            <div style={styles.cardContent}>
              {/* ข้อมูลรีวิว */}
              <div>
                <p style={styles.name}>{review.name}</p>
                <p style={styles.text}>"{review.review}"</p>
                <div style={styles.stars}>
                  {"★".repeat(review.stars)}
                  {"☆".repeat(5 - review.stars)}
                </div>
              </div>

              {/* รูปภาพลูกค้า */}
              <img 
                src={review.image} 
                alt={`${review.name} profile`} 
                style={styles.profileImage}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// สไตล์ในรูปแบบออบเจกต์
const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "20px auto",
    maxWidth: "1200px",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  imageContainer: {
    flex: "1",
    minWidth: "300px",
    maxWidth: "600px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px 0 0 10px",
  },
  reviewsContainer: {
    flex: "1",
    padding: "20px",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "15px",
  },
  header: {
    fontSize: "24px",
    marginBottom: "15px",
    color: "#333",
  },
  card: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
  },
  name: {
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#555",
  },
  text: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "10px",
  },
  stars: {
    color: "gold",
    fontSize: "16px",
  },
  profileImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #ddd",
  },
};

export default Reviews;
