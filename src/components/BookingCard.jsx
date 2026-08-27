import React, { useEffect, useState } from "react";
import { deleteBookingApi, getAllBookingApi } from "../services/bookingService";
import Header from "./Header";

function BookingCard() {
  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    getAllBookings();
  }, []);

  const getAllBookings = async () => {
    const response = await getAllBookingApi();
    if (response.status == 200) {
      setAllBookings(response.data);
    }
  };

  const deleteBooking = async (id) => {
    if (confirm("are you sure do you want to delete")) {
      const response = await deleteBookingApi(id);
      if (response.status == 200) {
        getAllBookings();
      }
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
            My Bookings
          </h1>

          <p className="text-muted">Manage your scheduled tutoring sessions</p>
        </div>

        {/* Booking Card */}

        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
          <div className="card-body p-0">
            {/* Table */}

            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead
                  style={{
                    backgroundColor: "#134E4A",
                  }}
                >
                  <tr>
                    <th className="text-dark py-3 px-4">#</th>

                    <th className="text-dark py-3">Subject</th>

                    <th className="text-dark py-3">Class</th>

                    <th className="text-dark py-3">Date</th>

                    <th className="text-dark py-3">Time</th>

                    <th className="text-dark py-3 text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {allBookings.length > 0 ? (
                    allBookings?.map((booking) => (
                      <tr key={booking?.id}>
                        <td className="px-4 fw-semibold">{booking?.id}</td>

                        <td>
                          <span
                            className="badge rounded-pill px-3 py-2"
                            style={{
                              backgroundColor: "#CCFBF1",
                              color: "#0F766E",
                            }}
                          >
                            {booking?.subject}
                          </span>
                        </td>

                        <td>
                          <span
                            className="fw-semibold"
                            style={{
                              color: "#134E4A",
                            }}
                          >
                            {booking?.grade}
                          </span>
                        </td>

                        <td>{booking?.date}</td>

                        <td>{booking?.time}</td>

                        <td className="text-center">
                          <button
                            onClick={() => deleteBooking(booking?.id)}
                            className="btn btn-sm px-3 rounded-3"
                            style={{
                              color: "#DC3545",
                              border: "1px solid #DC3545",
                              backgroundColor: "#FFFFFF",
                            }}
                          >
                            Cancel
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center py-5">
                        <div>
                          <div
                            className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                            style={{
                              width: "65px",
                              height: "65px",
                              backgroundColor: "#CCFBF1",
                              color: "#0F766E",
                              fontSize: "25px",
                            }}
                          >
                            📅
                          </div>

                          <h5
                            className="fw-bold"
                            style={{
                              color: "#134E4A",
                            }}
                          >
                            No Bookings
                          </h5>

                          <p className="text-muted mb-0">
                            You don't have any tutoring sessions booked yet.
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
