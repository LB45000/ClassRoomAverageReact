import React, { useState } from 'react';
import './App.css';
import StudentTable from './StudentTable';
import { students as initialStudents } from './studentData';
import { calculateClassroomAverage } from './calculateClassroomAverage';

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [newStudent, setNewStudent] = useState({
    name: '',
    address: '',
    averageGrade: 0,
  });

  const updateStudentGrade = (id, newGrade) => {
    const updatedStudents = students.map(student => {
      if (student.id === id) {
        return { ...student, averageGrade: newGrade };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  const handleRecalculateAverage = () => {
    const newAverage = calculateClassroomAverage(students);
    alert(`New Classroom Average: ${newAverage.toFixed(2)}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({
      ...newStudent,
      [name]: name === 'averageGrade' ? parseInt(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
    const studentToAdd = { ...newStudent, id: newId };
    setStudents([...students, studentToAdd]);
    setNewStudent({ name: '', address: '', averageGrade: 0 }); // Reset form
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Classroom Average Calculator</h1>
        <button onClick={handleRecalculateAverage}>Recalculate Average</button>
      </header>
      <main>
        <StudentTable students={students} onGradeChange={updateStudentGrade} />
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={newStudent.name}
            onChange={handleInputChange}
            placeholder="Student Name"
            required
          />
          <input
            name="address"
            value={newStudent.address}
            onChange={handleInputChange}
            placeholder="Address"
            required
          />
          <input
            name="averageGrade"
            type="number"
            value={newStudent.averageGrade}
            onChange={handleInputChange}
            placeholder="Average Grade"
            required
          />
          <button type="submit">Add Student</button>
        </form>
      </main>
    </div>
  );
}

export default App;
