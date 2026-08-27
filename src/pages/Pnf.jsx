import React from 'react'
import { Link } from "react-router-dom";
import { FaSearch, FaHome } from "react-icons/fa";
function Pnf() {
  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: "#F5F7F2",
      }}
    >

      <div className="container text-center">

        {/* 404 */}

        <div
          className="fw-bold"
          style={{
            fontSize: "clamp(100px, 20vw, 200px)",
            lineHeight: "1",
            color: "#CCFBF1",
            textShadow: "4px 4px 0px #0F766E",
          }}
        >
          404
        </div>


        {/* Search Icon */}

        <div
          className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4 shadow-sm"
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: "#0F766E",
            color: "white",
            fontSize: "30px",
          }}
        >
          <FaSearch />
        </div>


        {/* Heading */}

        <h1
          className="fw-bold mb-3"
          style={{
            color: "#134E4A",
          }}
        >
          Page Not Found
        </h1>


        {/* Description */}

        <p
          className="text-muted mx-auto mb-4"
          style={{
            maxWidth: "550px",
            fontSize: "17px",
            lineHeight: "1.7",
          }}
        >
          Oops! The page you're looking for doesn't exist or may have
          been moved. Let's get you back to your learning journey.
        </p>


        {/* Buttons */}

        <div className="d-flex justify-content-center gap-3 flex-wrap">

          <Link
            to="/home"
            className="btn text-white px-4 py-2 rounded-pill fw-semibold"
            style={{
              backgroundColor: "#0F766E",
            }}
          >
            <FaHome className="me-2" />
            Back to Home
          </Link>


          <Link
            to="/tutors"
            className="btn px-4 py-2 rounded-pill fw-semibold"
            style={{
              color: "#0F766E",
              border: "2px solid #0F766E",
              backgroundColor: "white",
            }}
          >
            Find a Tutor
          </Link>

        </div>


        {/* Small Message */}

        <div
          className="mt-5 p-3 rounded-4 mx-auto"
          style={{
            maxWidth: "500px",
            backgroundColor: "#ECFDF5",
            color: "#134E4A",
          }}
        >
          <small>
            🎓 Don't worry, your perfect tutor is still waiting for you!
          </small>
        </div>

      </div>

    </div>
  )
}

export default Pnf