import { useState } from "react";
import axios from "axios";

function Student() {
  const [formData, setFormData] = useState({
    studentName: "",
    roomNumber: "",
    complaintType: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitComplaint = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/complaints",
        formData
      );

      alert("Complaint Submitted");

      setFormData({
        studentName: "",
        roomNumber: "",
        complaintType: "",
        description: "",
      });
    } catch (error) {
      alert("Error submitting complaint");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hostel Complaint Portal</h1>

      <input
        type="text"
        name="studentName"
        placeholder="Student Name"
        value={formData.studentName}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="roomNumber"
        placeholder="Room Number"
        value={formData.roomNumber}
        onChange={handleChange}
      />

      <br /><br />

      <select
        name="complaintType"
        value={formData.complaintType}
        onChange={handleChange}
      >
        <option value="">Select Type</option>
        <option value="Electricity">Electricity</option>
        <option value="Water">Water</option>
        <option value="Internet">Internet</option>
        <option value="Cleaning">Cleaning</option>
      </select>

      <br /><br />

      <textarea
        name="description"
        placeholder="Complaint Description"
        value={formData.description}
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={submitComplaint}>
        Submit Complaint
      </button>
    </div>
  );
}

export default Student;