import React, { useEffect, useMemo, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import { getAllTutorApi } from "../services/tutorService";
import { FaSearch } from "react-icons/fa";
import TutorFilter from "./TutorFilter";

function TutorCard() {

  const [allTutors, setAllTutors] = useState([]);
  const [dummyTutor, setDummyTutor] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const [subject, setSubject] = useState("");
  const [experience, setExperience] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    getAllTutor();
  }, []);

  const searchOutput = useMemo(() => {

    setAllTutors(
      dummyTutor?.filter((tutor) => {

        const searchMatch =
          [tutor.name, tutor.subject].some((field) =>
            field.toLowerCase().includes(searchKey.toLowerCase())
          );

        const subjectMatch =
          !subject || tutor.subject === subject;

        const experienceMatch =
          !experience ||
          parseInt(tutor.experience) >= parseInt(experience);

        const ratingMatch =
          !rating ||
          parseFloat(tutor.rating) >= parseFloat(rating);

        const priceMatch =
          !price ||
          parseFloat(tutor.price) <= parseFloat(price);

        return (
          searchMatch &&
          subjectMatch &&
          experienceMatch &&
          ratingMatch &&
          priceMatch
        );
      })
    );

  }, [searchKey, subject, experience, rating, price]);


  const getAllTutor = async () => {

    const response = await getAllTutorApi();

    if (response.status == 200) {
      setAllTutors(response.data);
      setDummyTutor(response.data);
    }

  };


  return (

    <div
      className="min-vh-100"
      style={{
        backgroundColor: "#F5F7F2"
      }}
    >

      {/* ================= PAGE HEADER ================= */}

      <div
        className="py-5 text-center text-white"
        style={{
          background:
            "linear-gradient(135deg, #134E4A, #0F766E)"
        }}
      >

        <div className="container">

          <h1 className="fw-bold mb-2">
            Find Your Perfect Tutor
          </h1>

          <p
            className="mb-0"
            style={{
              color: "#CCFBF1"
            }}
          >
            Discover experienced tutors and find the right
            teacher for your learning journey.
          </p>

        </div>

      </div>


      {/* ================= SEARCH + FILTER ================= */}

      <div className="container">

        {/* Search */}

        <div
          className="card border-0 shadow rounded-4 mx-auto"
          style={{
            maxWidth: "850px",
            marginTop: "-30px"
          }}
        >

          <div className="card-body p-3">

            <div className="input-group">

              <span
                className="input-group-text border-0"
                style={{
                  backgroundColor: "#F0FDFA",
                  color: "#0F766E"
                }}
              >
                <FaSearch />
              </span>

              <input
                onChange={(e) =>
                  setSearchKey(e.target.value)
                }
                className="form-control border-0 shadow-none"
                style={{
                  backgroundColor: "#F0FDFA"
                }}
                placeholder="Search tutor by name or subject"
                type="text"
              />

            </div>

          </div>

        </div>


        {/* Filter */}

        <div
          className="mt-4"
          style={{
            maxWidth: "1100px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >

          <TutorFilter
            subject={subject}
            setSubject={setSubject}

            experience={experience}
            setExperience={setExperience}

            rating={rating}
            setRating={setRating}

            price={price}
            setPrice={setPrice}

            clearFilters={() => {
              setSubject("");
              setExperience("");
              setRating("");
              setPrice("");
            }}
          />

        </div>

      </div>


      {/* ================= TUTOR SECTION ================= */}

      <div className="container py-5">

        <div className="text-center mb-5">

          <span
            className="badge rounded-pill px-3 py-2 mb-2"
            style={{
              backgroundColor: "#CCFBF1",
              color: "#0F766E"
            }}
          >
            EXPLORE TUTORS
          </span>

          <h2
            className="fw-bold"
            style={{
              color: "#134E4A"
            }}
          >
            Our Tutors
          </h2>

          <p className="text-muted">
            Choose from our experienced and skilled tutors
          </p>

        </div>


        {/* ================= TUTOR CARDS ================= */}

        <div className="d-flex flex-wrap gap-4 justify-content-center">

          {allTutors.length > 0 ? (

            allTutors.map((tutor) => (

              <div key={tutor?.id}>

                <Card
                  className="border-0 rounded-4 overflow-hidden"
                  sx={{
                    width: 320,
                    height: 500,
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    boxShadow:
                      "0 8px 25px rgba(19,78,74,0.10)"
                  }}

                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-8px)";

                    e.currentTarget.style.boxShadow =
                      "0 18px 35px rgba(19,78,74,0.18)";
                  }}

                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0)";

                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(19,78,74,0.10)";
                  }}
                >

                  <CardActionArea
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "stretch",
                    }}
                  >

                    {/* Tutor Image */}

                    <CardMedia
                      component="img"
                      height="180"
                      image={tutor?.image}
                      alt="tutor"
                      sx={{
                        objectFit: "cover"
                      }}
                    />


                    <CardContent
                      className="p-4"
                      sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >

                      {/* Subject */}

                      <span
                        className="badge rounded-pill px-3 py-2 mb-2"
                        style={{
                          backgroundColor: "#CCFBF1",
                          color: "#0F766E"
                        }}
                      >
                        {tutor?.subject}
                      </span>


                      {/* Name */}

                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          fontWeight: "bold",
                          color: "#134E4A"
                        }}
                      >
                        {tutor?.name}
                      </Typography>


                      {/* Bio */}

                      <Typography
                        variant="body2"
                        sx={{
                          color: "#6B7280",
                          lineHeight: 1.7,
                          height: "75px",
                          overflow: "hidden"
                        }}
                      >
                        {tutor?.bio}
                      </Typography>


                      {/* Small Details */}

                      <div className="d-flex justify-content-between mt-3">

                        <span
                          className="small fw-semibold"
                          style={{
                            color: "#0F766E"
                          }}
                        >
                          ⭐ {tutor?.rating}
                        </span>

                        <span
                          className="small fw-semibold"
                          style={{
                            color: "#0F766E"
                          }}
                        >
                          ₹{tutor?.price}
                        </span>

                      </div>

                    </CardContent>

                  </CardActionArea>


                  {/* See Details */}

                  <CardActions
                    className="px-4 pb-4"
                    sx={{
                      marginTop: "auto"
                    }}
                  >

                    <Link
                      to={`/tutors/${tutor?.id}`}
                      className="text-decoration-none text-white fw-semibold text-center w-100 py-2 rounded-3"
                      style={{
                        backgroundColor: "#0F766E",
                        transition: "all 0.3s ease"
                      }}

                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "#134E4A";
                      }}

                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "#0F766E";
                      }}
                    >
                      See Details →
                    </Link>

                  </CardActions>

                </Card>

              </div>

            ))

          ) : (

            <div className="text-center py-5 w-100">

              <FaSearch
                size={40}
                style={{
                  color: "#0F766E"
                }}
              />

              <h4
                className="fw-bold mt-3"
                style={{
                  color: "#134E4A"
                }}
              >
                No Tutors Found
              </h4>

              <p className="text-muted">
                Try changing your search or filters.
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default TutorCard;