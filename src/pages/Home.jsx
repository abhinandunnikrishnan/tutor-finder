import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { GiTeacher } from "react-icons/gi";
import { FaSearch, FaBookOpen, FaCalendarCheck } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";

function Home() {
  return (
    <div
      style={{
        backgroundColor: "#F5F7F2",
      }}
    >
      <Header />

      {/* ================= HERO SECTION ================= */}

      <section
        className="position-relative d-flex align-items-center"
        style={{
          minHeight: "90vh",
          backgroundImage:
            'linear-gradient(rgba(19,78,74,0.75), rgba(15,118,110,0.65)), url("/teachingImage.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 text-white">
              {/* Badge */}
              <span
                className="badge rounded-pill px-3 py-2 mb-4"
                style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                }}
              >
                <FaUserGraduate /> Learn Better. Grow Faster.
              </span>

              {/* Heading */}
              <h1
                className="display-3 fw-bold mb-4"
                style={{
                  lineHeight: "1.15",
                }}
              >
                Find the Right Tutor
                <br />
                for Your
                <span
                  style={{
                    color: "#A7F3D0",
                  }}
                >
                  {" "}
                  Learning Journey
                </span>
              </h1>

              {/* Description */}
              <p
                className="lead mb-4"
                style={{
                  maxWidth: "650px",
                  color: "#ECFDF5",
                }}
              >
                Connect with skilled tutors, explore different subjects, and
                find the perfect learning support that matches your needs.
              </p>

              {/* Buttons */}
              <div className="d-flex flex-wrap gap-3">
                <Link
                  to="/tutors"
                  className="btn btn-lg px-4 py-3 fw-semibold shadow"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#0F766E",
                    border: "none",
                    
                  }}
                >
                  <FaSearch className="me-2" />
                  Find a Tutor
                </Link>

                <Link
                  to="/profile"
                  className="btn btn-lg px-4 py-3 fw-semibold text-white"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.5)",
                  }}
                >
                  My Profile
                </Link>
              </div>
            </div>

            {/* Right side card */}
            <div className="col-lg-5 d-none d-lg-block">
              <div
                className="bg-white p-4 rounded-4 shadow-lg ms-auto"
                style={{
                  maxWidth: "360px",
                  transform: "rotate(2deg)",
                  transition: "all 0.4s ease"
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.transform = "rotate(0deg) translateY(-10px)"
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.transform = "rotate(2deg) translateY(0)"
                }}
              >
                <div
                  className="rounded-4 p-4"
                  style={{
                    backgroundColor: "#F0FDFA",
                  }}
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#0F766E",
                      color: "white",
                    }}
                  >
                    <GiTeacher size={30} />
                  </div>

                  <h4
                    className="fw-bold"
                    style={{
                      color: "#134E4A",
                    }}
                  >
                    Your Learning,
                    <br />
                    Your Choice.
                  </h4>

                  <p className="text-muted mb-0">
                    Discover tutors who can help you achieve your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span
              className="fw-semibold"
              style={{
                color: "#0F766E",
              }}
            >
              WHY CHOOSE US?
            </span>

            <h2
              className="fw-bold mt-2"
              style={{
                color: "#134E4A",
              }}
            >
              Everything You Need to Learn Better
            </h2>

            <p className="text-muted">
              Finding the right tutor has never been easier.
            </p>
          </div>

          <div className="row g-4">
            {/* Feature 1 */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 h-100 p-3">
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    backgroundColor: "#CCFBF1",
                    color: "#0F766E",
                  }}
                >
                  <FaSearch size={22} />
                </div>

                <h5
                  className="fw-bold"
                  style={{
                    color: "#134E4A",
                  }}
                >
                  Find the Right Tutor
                </h5>

                <p className="text-muted mb-0">
                  Search and explore tutors based on your preferred subject and
                  requirements.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 h-100 p-3">
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    backgroundColor: "#CCFBF1",
                    color: "#0F766E",
                  }}
                >
                  <FaBookOpen size={22} />
                </div>

                <h5
                  className="fw-bold"
                  style={{
                    color: "#134E4A",
                  }}
                >
                  Learn Your Way
                </h5>

                <p className="text-muted mb-0">
                  Choose tutors according to your learning preferences and
                  subjects.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 h-100 p-3">
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    backgroundColor: "#CCFBF1",
                    color: "#0F766E",
                  }}
                >
                  <FaCalendarCheck size={22} />
                </div>

                <h5
                  className="fw-bold"
                  style={{
                    color: "#134E4A",
                  }}
                >
                  Easy Booking
                </h5>

                <p className="text-muted mb-0">
                  Book your preferred tutor quickly and manage your learning
                  sessions easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section
        className="py-5"
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Image */}
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  className="img-fluid rounded-4 shadow"
                  src="/teachingAbout.jpg"
                  alt="Teaching"
                />

                <div className="position-absolute bottom-0 start-0 m-3 bg-white rounded-4 shadow p-3">
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "45px",
                        height: "45px",
                        backgroundColor: "#CCFBF1",
                        color: "#0F766E",
                      }}
                    >
                      🎓
                    </div>

                    <div>
                      <h6 className="mb-0 fw-bold">Better Learning</h6>

                      <small className="text-muted">
                        Starts with the right tutor
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-6">
              <span
                className="fw-semibold"
                style={{
                  color: "#0F766E",
                }}
              >
                ABOUT US
              </span>

              <h2
                className="fw-bold mt-2 mb-4"
                style={{
                  color: "#134E4A",
                }}
              >
                Making Learning Simple, Personal & Accessible
              </h2>

              <p
                className="text-muted lh-lg"
                style={{
                  textAlign: "justify",
                }}
              >
                Our Tutor Finder platform makes it simple for students to find
                the right tutor for their learning needs. We connect learners
                with skilled and experienced tutors across different subjects
                and help them choose based on expertise, availability, and
                learning preferences.
              </p>

              <p
                className="text-muted lh-lg"
                style={{
                  textAlign: "justify",
                }}
              >
                Our goal is to make quality education more accessible,
                personalized, and convenient for everyone.
              </p>

              <Link
                to="/tutors"
                className="btn px-4 py-2 text-white fw-semibold rounded-3"
                style={{
                  backgroundColor: "#0F766E",
                }}
              >
                Explore Tutors →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="py-5">
        <div className="container">
          <div
            className="rounded-4 p-5 text-center text-white shadow"
            style={{
              background: "linear-gradient(135deg, #134E4A, #0F766E)",
            }}
          >
            <h2 className="fw-bold">Ready to Start Learning?</h2>

            <p className="mb-4 opacity-75">
              Find a tutor who matches your learning goals.
            </p>

            <Link
              to="/tutors"
              className="btn btn-light px-4 py-2 fw-semibold"
              style={{
                color: "#0F766E",
              }}
            >
              Find Your Tutor
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
