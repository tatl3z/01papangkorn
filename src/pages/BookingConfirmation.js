// BookingConfirmation.js
import React, { useState } from 'react';

const BookingConfirmation = () => {
  const [formData, setFormData] = useState({
    adults: 1,
    children: 1,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    confirmEmail: '',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking data submitted:', formData);
    // Add logic to process booking confirmation
  };

  return (
    <div style={styles.bookingConfirmation}>
      <div style={styles.topSection}>
        <div style={styles.imageContainer}>
          <img src="https://www.grandecentrepointpattaya.com/upload/rooms/mobile/deluxe-corner-seaview-800px.webp?v=66" alt="Room" style={styles.image} />
        </div>
        <h2 style={styles.price}>ราคาสุทธิ: 1,900 บาท</h2>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>บริการเสริม</h3>
          <div style={styles.options}>
            <label>
              <input type="radio" name="service" value="เพิ่มหน้าหมอน" /> เพิ่มหน้าหมอน
            </label>
            <label>
              <input type="radio" name="service" value="เพิ่มเตียงเล็ก" /> เพิ่มเตียงเล็ก
            </label>
            <label>
              <input type="radio" name="service" value="บริการอาหารเช้า" /> บริการอาหารเช้า
            </label>
            <label>
              <input type="radio" name="service" value="หมอน" /> หมอน
            </label>
          </div>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>จำนวนคนที่จะเข้าพัก</h3>
          <div style={styles.guestCount}>
            <label style={styles.guestLabel}>
              ผู้ใหญ่
              <select name="adults" value={formData.adults} onChange={handleChange} style={styles.select}>
                {[1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </label>

            <label style={styles.guestLabel}>
              เด็ก
              <select name="children" value={formData.children} onChange={handleChange} style={styles.select}>
                {[0, 1, 2, 3].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>ข้อมูลการติดต่อ</h3>
          <div style={styles.contactInfo}>
            <input
              type="text"
              name="firstName"
              placeholder="ชื่อ"
              value={formData.firstName}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="text"
              name="lastName"
              placeholder="นามสกุล"
              value={formData.lastName}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="tel"
              name="phone"
              placeholder="เบอร์โทรศัพท์"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="email"
              name="confirmEmail"
              placeholder="E-mail (Re-confirm)"
              value={formData.confirmEmail}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>ข้อมูลการชำระเงิน</h3>
          <div style={styles.paymentInfo}>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              style={styles.select}
            >
              <option value="" disabled>ชำระเงินผ่าน</option>
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </div>
        </div>

        <div style={styles.buttons}>
          <button type="submit" style={styles.confirmButton}>ยืนยัน</button>
          <button type="button" style={styles.cancelButton}>ยกเลิก</button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  bookingConfirmation: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    maxWidth: '1200px',
    margin: '20px auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  imageContainer: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '500px',
    borderRadius: '8px',
  },
  price: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  form: {
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
  },
  section: {
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  options: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
  },
  guestCount: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  },
  guestLabel: {
    flex: '1',
  },
  contactInfo: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
  },
  paymentInfo: {
    textAlign: 'center',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
  },
  select: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  confirmButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  cancelButton: {
    padding: '10px 20px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default BookingConfirmation;
