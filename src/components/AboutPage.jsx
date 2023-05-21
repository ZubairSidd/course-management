import React from "react";
import "../css/AboutPage.css"; // Import custom CSS for the About page

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="header">
        <h1 className="header-title">About Us</h1>
      </header>
      <main className="main-content">
        <section className="section">
          <h2 className="section-title">Our Mission</h2>
          <p className="mission-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            commodo sem at lacinia commodo. Suspendisse volutpat elit et leo
            rhoncus auctor. Vestibulum pulvinar nisl neque, id pulvinar lectus
            dapibus id. Quisque vitae urna in libero ullamcorper tempor. Fusce
            ac eleifend tortor.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">Our Team</h2>
          <ul className="team-list">
            <li className="team-member">
              <div className="team-member-photo">
                <img src="path/to/photo.jpg" alt="Team Member" />
              </div>
              <div className="team-member-details">
                <h3 className="team-member-name">John Doe</h3>
                <p className="team-member-position">Co-founder & CEO</p>
              </div>
            </li>
            <li className="team-member">
              <div className="team-member-photo">
                <img src="path/to/photo.jpg" alt="Team Member" />
              </div>
              <div className="team-member-details">
                <h3 className="team-member-name">Jane Smith</h3>
                <p className="team-member-position">Co-founder & CTO</p>
              </div>
            </li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Course Website. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AboutPage;
