import { useState } from "react";

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [submittedUser, setSubmittedUser] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedUser({ ...formData });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      age: "",
    });

    setSubmittedUser(null);
  };

  return (
    <section className="section">
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit} className="user-form">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
          min="1"
          required
        />

        <button type="submit">Submit</button>

        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      {submittedUser && (
        <div className="user-result">
          <h3>Submitted Information</h3>
          <p>Name: {submittedUser.name}</p>
          <p>Email: {submittedUser.email}</p>
          <p>Age: {submittedUser.age}</p>
        </div>
      )}
    </section>
  );
}

export default UserForm;