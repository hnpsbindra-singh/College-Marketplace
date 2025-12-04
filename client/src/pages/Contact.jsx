import React from "react";

const Contact = () => {
  return (
    <section className="page page-contact">
      <h2>Contact Us</h2>
      <div className="card contact-card">
        <div className="contact-item">
          <h3>Phone</h3>
          <p>+91-8708526740</p>
          <p>+91-0000000000</p>
        </div>
        <div className="contact-item">
          <h3>Email</h3>
          <p>yadavaman@gmail.com</p>
          <p>amanyadav@gmail.com</p>
        </div>
        <div className="contact-item">
          <h3>Address</h3>
          <p>Hotel Vyom</p>
          <p>Near Thapar, Patiala, Punjab, India</p>
          <p>PIN: 147001</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
