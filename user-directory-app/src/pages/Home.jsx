import { useState, useRef } from "react";
import UserForm from "../components/UserForm";

function Home() {
  // Task 2: Change background color
  const [bgColor, setBgColor] = useState("#f1f5f9");

  // Task 3: useRef
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const showInputValue = () => {
    setInputValue(inputRef.current.value);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  // Task 5: Object state
  const [user, setUser] = useState({
    name: "Suhail",
    email: "suhail@example.com",
  });

  const updateName = () => {
    setUser({
      ...user,
      name: "Suhail Hossain",
    });
  };

  // Task 5: Array state
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
  ]);

  const addSkill = () => {
    setSkills([...skills, "React"]);
  };

  return (
    <div className="home-page" style={{ backgroundColor: bgColor }}>
      <section className="welcome">
        <h1>Welcome to User Directory App</h1>
        <p>Practice React Hooks, State Management and API Calling.</p>

        <button
          onClick={() =>
            setBgColor(bgColor === "#f1f5f9" ? "#dbeafe" : "#f1f5f9")
          }
        >
          Change Background Color
        </button>
      </section>

      <hr />

      {/* Task 3: useRef */}
      <section className="section">
        <h2>useRef Practice</h2>

        <input
          ref={inputRef}
          type="text"
          placeholder="Enter something"
        />

        <button onClick={showInputValue}>Show Value</button>

        <button onClick={focusInput}>Focus Input</button>

        {inputValue && <p>Input Value: {inputValue}</p>}
      </section>

      <hr />

      {/* Task 4: User Form */}
      <UserForm />

      <hr />

      {/* Task 5: Object State */}
      <section className="section">
        <h2>Object State</h2>

        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>

        <button onClick={updateName}>Update Name</button>
      </section>

      <hr />

      {/* Task 5: Array State */}
      <section className="section">
        <h2>Array State - My Skills</h2>

        {skills.map((skill, index) => (
          <span className="skill" key={index}>
            {skill}
          </span>
        ))}

        <br />

        <button onClick={addSkill}>Add React Skill</button>
      </section>
    </div>
  );
}

export default Home;