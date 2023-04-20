import React, { useState } from "react";
import "./StudentsInfo.css";

export default function StudentsInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [allData, setAllData] = useState([]);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleSubmit = function () {
    let studentData = {
      name: name,
      email: email,
      gender: gender,
      age: age,
    };
    setAllData([...allData, studentData]);
    setName("");
    setEmail("");
    setGender("");
    setAge("");
  };

  return (
    <div className="main">
      <div className="inputDiv">
        <h2>Students Enrollment From</h2>
        <form>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Student Full Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Student Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={handleGenderChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={handleGenderChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                value="others"
                checked={gender === "others"}
                onChange={handleGenderChange}
              />
              Others
            </label>
          </div>
          <div>
            <input
              type="age"
              name="age"
              id="age"
              value={age}
              placeholder="Age in Years"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
        </form>
        <input
          type="submit"
          id="submit-btn"
          value="Submit"
          onClick={handleSubmit}
        />
      </div>
      <div className="StudentsData">
        <h2>Students Data</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {allData.map((data) => (
              <tr key={data.email}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.gender}</td>
                <td>{data.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
