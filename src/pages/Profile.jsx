import React, { useEffect, useState } from "react";
import { editStudentApi, studentProfileApi } from "../services/studentService";
import Header from "../components/Header";

function Profile() {
  const [studentProfile, setStudentprofile] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    sProfile();
  }, []);

  const sProfile = async () => {
    const studentId = localStorage.getItem("studentId");
    console.log("Student ID:", studentId);
    const response = await studentProfileApi(studentId);
    console.log("API Response:", response);
    console.log("Response Data:", response.data);

    if (response.status == 200) {
      setStudentprofile(response.data);
    }
  };

  const handleChange = (e) => {
    setStudentprofile({
      ...studentProfile,
      [e.target.name]: e.target.value,
    });
  };

  const editProfile = async () => {
    const studentId = localStorage.getItem("studentId");

    const response = await editStudentApi(studentId, {
      name: studentProfile.name,
      email: studentProfile.email,
      phoneNo: studentProfile.phoneNo,
      grade: studentProfile.grade,
    });

    if (response.status === 200) {
      setStudentprofile(response.data);
      setIsEditing(false);
    }
  };

  return (
    <div
      className="min-vh-100 "
      style={{
        backgroundColor: "#F5F7F2",
      }}
    >
        <Header/>
      <div className="container py-5">
        {/* Page Heading */}

        <div className="text-center mb-5">
          <span
            className="fw-semibold"
            style={{
              color: "#0F766E",
            }}
          >
            TUTOR FINDER
          </span>

          <h1
            className="fw-bold mt-2 mb-2"
            style={{
              color: "#134E4A",
            }}
          >
            My Profile
          </h1>

          <p className="text-muted">Manage your personal information</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body p-4 p-md-5">
                {/* Profile Icon */}

                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 fw-bold"
                  style={{
                    width: "100px",
                    height: "100px",
                    fontSize: "40px",
                    backgroundColor: "#0F766E",
                    color: "white",
                  }}
                >
                  {studentProfile?.name?.charAt(0)?.toUpperCase() || "A"}
                </div>

                {!isEditing ? (
                  <>
                    {/* Profile Name */}

                    <div className="text-center">
                      <h3
                        className="fw-bold mb-1"
                        style={{
                          color: "#134E4A",
                        }}
                      >
                        {studentProfile?.name}
                      </h3>

                      <span
                        className="badge rounded-pill px-3 py-2"
                        style={{
                          backgroundColor: "#CCFBF1",
                          color: "#0F766E",
                        }}
                      >
                        Student
                      </span>
                    </div>

                    <hr className="my-4" />

                    {/* Profile Information */}

                    <div className="text-start">
                      {/* Email */}

                      <div
                        className="p-3 rounded-3 mb-3"
                        style={{
                          backgroundColor: "#F0FDFA",
                        }}
                      >
                        <small
                          className="fw-semibold"
                          style={{
                            color: "#0F766E",
                          }}
                        >
                          EMAIL
                        </small>

                        <p className="mb-0 mt-1 fw-semibold">
                          {studentProfile?.email}
                        </p>
                      </div>

                      {/* Phone */}

                      <div
                        className="p-3 rounded-3 mb-3"
                        style={{
                          backgroundColor: "#F0FDFA",
                        }}
                      >
                        <small
                          className="fw-semibold"
                          style={{
                            color: "#0F766E",
                          }}
                        >
                          PHONE
                        </small>

                        <p className="mb-0 mt-1 fw-semibold">
                          {studentProfile?.phoneNo}
                        </p>
                      </div>

                      {/* Class */}

                      <div
                        className="p-3 rounded-3"
                        style={{
                          backgroundColor: "#F0FDFA",
                        }}
                      >
                        <small
                          className="fw-semibold"
                          style={{
                            color: "#0F766E",
                          }}
                        >
                          CLASS / GRADE
                        </small>

                        <p className="mb-0 mt-1 fw-semibold">
                          {studentProfile?.grade}
                        </p>
                      </div>
                    </div>

                    {/* Edit Button */}

                    <button
                      className="btn w-100 mt-4 py-2 rounded-3 fw-semibold text-white"
                      style={{
                        backgroundColor: "#0F766E",
                      }}
                      onClick={() => setIsEditing(true)}
                    >
                      ✏️ Edit Profile
                    </button>
                  </>
                ) : (
                  <>
                    {/* Edit Heading */}

                    <div className="text-center">
                      <h3
                        className="fw-bold"
                        style={{
                          color: "#134E4A",
                        }}
                      >
                        Edit Profile
                      </h3>

                      <p className="text-muted">
                        Update your personal information
                      </p>
                    </div>

                    <hr className="my-4" />

                    <div className="text-start">
                      {/* Name */}

                      <div className="mb-3">
                        <label
                          className="form-label fw-semibold"
                          style={{
                            color: "#134E4A",
                          }}
                        >
                          Name
                        </label>

                        <input
                          type="text"
                          name="name"
                          value={studentProfile?.name || ""}
                          onChange={handleChange}
                          className="form-control form-control-lg border-0"
                          style={{
                            backgroundColor: "#F0FDFA",
                          }}
                        />
                      </div>

                      {/* Email */}

                      <div className="mb-3">
                        <label
                          className="form-label fw-semibold"
                          style={{
                            color: "#134E4A",
                          }}
                        >
                          Email
                        </label>

                        <input
                          type="email"
                          name="email"
                          value={studentProfile?.email || ""}
                          onChange={handleChange}
                          className="form-control form-control-lg border-0"
                          style={{
                            backgroundColor: "#F0FDFA",
                          }}
                        />
                      </div>

                      {/* Phone */}

                      <div className="mb-3">
                        <label
                          className="form-label fw-semibold"
                          style={{
                            color: "#134E4A",
                          }}
                        >
                          Phone
                        </label>

                        <input
                          type="text"
                          name="phoneNo"
                          value={studentProfile?.phoneNo || ""}
                          onChange={handleChange}
                          className="form-control form-control-lg border-0"
                          style={{
                            backgroundColor: "#F0FDFA",
                          }}
                        />
                      </div>

                      {/* Grade */}

                      <div className="mb-3">
                        <label
                          className="form-label fw-semibold"
                          style={{
                            color: "#134E4A",
                          }}
                        >
                          Class / Grade
                        </label>

                        <input
                          type="text"
                          name="grade"
                          value={studentProfile?.grade || ""}
                          onChange={handleChange}
                          className="form-control form-control-lg border-0"
                          style={{
                            backgroundColor: "#F0FDFA",
                          }}
                        />
                      </div>
                    </div>

                    {/* Save Changes */}

                    <button
                      className="btn w-100 mt-3 py-2 rounded-3 fw-semibold text-white"
                      style={{
                        backgroundColor: "#0F766E",
                      }}
                      onClick={editProfile}
                    >
                      ✓ Save Changes
                    </button>

                    {/* Cancel */}

                    <button
                      className="btn w-100 mt-2 py-2 rounded-3 fw-semibold"
                      style={{
                        color: "#0F766E",
                        border: "2px solid #0F766E",
                        backgroundColor: "#FFFFFF",
                      }}
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
