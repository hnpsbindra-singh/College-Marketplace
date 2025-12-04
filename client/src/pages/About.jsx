import React from "react";

const About = () => {
  return (
    <section className="page page-about">
      <h2>About Hotel Vyom, Patiala</h2>

      <div className="card">
        {/* Main intro ~100–150 words */}
        <p style={{ fontSize: "14px", color: "#6b7280" }}>
          Hotel Vyom is a practical, comfortable stay option located in Patiala.
          It is designed for guests who want a clean room, reliable basics and a
          straightforward experience without unnecessary complications. The
          hotel focuses on neat interiors, essential amenities and a calm
          environment, making it suitable for students, parents visiting
          campuses, working professionals on short assignments and families
          attending events in the city. Instead of trying to be a luxury
          property, Hotel Vyom aims to consistently deliver a simple promise – a
          decent room, polite staff and a stay that feels organised and
          stress-free.
        </p>

        {/* Location & connectivity */}
        <h3 style={{ marginTop: "18px", marginBottom: "6px", fontSize: "16px" }}>
          Location & connectivity
        </h3>
        <p style={{ fontSize: "14px", color: "#6b7280" }}>
          The hotel is placed within easy reach of key city areas, markets and
          educational institutions in Patiala. Auto, cab and e-rickshaw
          connectivity is generally convenient, so guests can travel for exams,
          interviews, office visits or family work without worrying about long
          commutes.
        </p>

        {/* Amenities */}
        <h3 style={{ marginTop: "16px", marginBottom: "6px", fontSize: "16px" }}>
          Amenities and stay experience
        </h3>
        <ul style={{ fontSize: "14px", paddingLeft: "18px", color: "#4b5563" }}>
          <li>Comfortable bedding and clean rooms maintained regularly</li>
          <li>Attached washrooms with basic toiletries and running water</li>
          <li>Supportive staff to help with basic requests and queries</li>
          <li>Simple check-in and check-out process with ID verification</li>
        </ul>

        {/* Who usually books here */}
        <h3 style={{ marginTop: "16px", marginBottom: "6px", fontSize: "16px" }}>
          Who typically stays at Hotel Vyom?
        </h3>
        <p style={{ fontSize: "14px", color: "#6b7280" }}>
          Most guests are students and parents visiting for admissions, exams or
          events, as well as professionals travelling for short business visits.
          The hotel works well for anyone who values a sensible price, basic
          comfort and a stay that runs on time without confusion.
        </p>

        {/* Small line about BAR */}
        <p
          style={{
            fontSize: "13px",
            color: "#6b7280",
            marginTop: "14px",
          }}
        >
          BAR – BookARoom has been created to make it easier for such guests to
          share their requirements in advance so that Hotel Vyom can plan room
          allocation and respond with clarity on availability.
        </p>
      </div>
    </section>
  );
};

export default About;
