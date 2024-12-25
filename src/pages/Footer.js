import React from "react";

function Footer() {
  const styles = {
    footer: {
      backgroundColor: "#4479a7",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
    },
    footerLeft: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    footerRight: {
      textAlign: "right",
    },
    logo: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
    },
    header: {
      margin: "0",
      fontSize: "24px",
    },
    subtext: {
      margin: "0",
      fontSize: "14px",
    },
    contactText: {
      margin: "5px 0",
      fontSize: "14px",
    },
    link: {
      color: "white",
      textDecoration: "none",
    },
    linkHover: {
      textDecoration: "underline",
    },
  };

  return (
    <footer style={styles.footer}>
      {/* โลโก้และชื่อบริษัท */}
      <div style={styles.footerLeft}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/800px-Manchester_City_FC_badge.svg.png" // ใช้รูปจริงของคุณที่นี่
          alt="Logo"
          style={styles.logo}
        />
        <div>
          <h1 style={styles.header}>TERMINAL XD</h1>
          <p style={styles.subtext}>TERMINAL XD</p>
        </div>
      </div>

      {/* ข้อมูลติดต่อ */}
      <div style={styles.footerRight}>
        <p style={styles.contactText}>
          <strong>ติดต่อเรา</strong>
        </p>
        <p style={styles.contactText}>
          โทร: <a href="tel:0971654003" style={styles.link}>097 165 4003</a>
        </p>
        <p style={styles.contactText}>
          IG: <a href="#" style={styles.link}>TERMINAL_XD</a>
        </p>
        <p style={styles.contactText}>
          FB: <a href="#" style={styles.link}>TERMINAL_XD</a>
        </p>
        <p style={styles.contactText}>
          E-mail: <a href="mailto:TERMINALXD@gmail.com" style={styles.link}>TERMINALXD@gmail.com</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
