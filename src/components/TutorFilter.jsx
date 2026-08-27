import React from "react";

function TutorFilter({
  subject,
  setSubject,
  experience,
  setExperience,
  rating,
  setRating,
  price,
  setPrice,
  clearFilters
}) {

  return (

    <div
      className="card border-0 rounded-4 shadow-sm"
      style={{
        backgroundColor: "#FFFFFF"
      }}
    >

      <div className="card-body p-4">

        {/* Filter Heading */}

        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>

            <h5
              className="fw-bold mb-1"
              style={{
                color: "#134E4A"
              }}
            >
              Filter Tutors
            </h5>

            <small className="text-muted">
              Find tutors based on your preferences
            </small>

          </div>


          <button
            onClick={clearFilters}
            className="btn btn-sm rounded-pill px-3"
            style={{
              color: "#0F766E",
              border: "1px solid #0F766E"
            }}
          >
            Clear Filters
          </button>

        </div>


        <div className="row g-3">


          {/* Subject */}

          <div className="col-12 col-md-6 col-lg-3">

            <label
              className="form-label fw-semibold"
              style={{
                color: "#134E4A"
              }}
            >
              📚 Subject
            </label>

            <select
              className="form-select border-0"
              style={{
                backgroundColor: "#F0FDFA"
              }}
              value={subject}
              onChange={e =>
                setSubject(e.target.value)
              }
            >

              <option value="">
                All Subjects
              </option>

              <option value="Mathematics">
                Mathematics
              </option>

              <option value="Physics">
                Physics
              </option>

              <option value="Chemistry">
                Chemistry
              </option>

              <option value="Computer Science">
                Computer Science
              </option>

              <option value="English">
                English
              </option>

            </select>

          </div>


          {/* Experience */}

          <div className="col-12 col-md-6 col-lg-3">

            <label
              className="form-label fw-semibold"
              style={{
                color: "#134E4A"
              }}
            >
              🏆 Experience
            </label>

            <select
              className="form-select border-0"
              style={{
                backgroundColor: "#F0FDFA"
              }}
              value={experience}
              onChange={e =>
                setExperience(e.target.value)
              }
            >

              <option value="">
                Any Experience
              </option>

              <option value="1">
                1+ Years
              </option>

              <option value="3">
                3+ Years
              </option>

              <option value="5">
                5+ Years
              </option>

              <option value="10">
                10+ Years
              </option>

            </select>

          </div>


          {/* Rating */}

          <div className="col-12 col-md-6 col-lg-3">

            <label
              className="form-label fw-semibold"
              style={{
                color: "#134E4A"
              }}
            >
              ⭐ Rating
            </label>

            <select
              className="form-select border-0"
              style={{
                backgroundColor: "#F0FDFA"
              }}
              value={rating}
              onChange={e =>
                setRating(e.target.value)
              }
            >

              <option value="">
                Any Rating
              </option>

              <option value="4">
                4+ Rating
              </option>

              <option value="4.5">
                4.5+ Rating
              </option>

              <option value="4.8">
                4.8+ Rating
              </option>

            </select>

          </div>


          {/* Price */}

          <div className="col-12 col-md-6 col-lg-3">

            <label
              className="form-label fw-semibold"
              style={{
                color: "#134E4A"
              }}
            >
              💰 Maximum Price
            </label>

            <select
              className="form-select border-0"
              style={{
                backgroundColor: "#F0FDFA"
              }}
              value={price}
              onChange={e =>
                setPrice(e.target.value)
              }
            >

              <option value="">
                Any Price
              </option>

              <option value="300">
                ₹300 or less
              </option>

              <option value="500">
                ₹500 or less
              </option>

              <option value="750">
                ₹750 or less
              </option>

              <option value="1000">
                ₹1000 or less
              </option>

            </select>

          </div>

        </div>

      </div>

    </div>

  );
}

export default TutorFilter;