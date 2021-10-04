import React, { useEffect, useState } from "react";
import Subject from "../Subject/Subject";

const Subjects = () => {
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, []);
  return (
    <div>
      <h2 className="text-primary mt-2">
        {subjects.length} Subjects For School level Science{" "}
      </h2>
      <div className="subject-container">
        {subjects.map((subject) => (
          <Subject key={subject.id} subject={subject}></Subject>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
