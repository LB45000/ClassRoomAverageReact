
import React from 'react';

const StudentTable = ({ students, onGradeChange }) => {
  const handleGradeChange = (id, newGrade) => {
    onGradeChange(id, parseInt(newGrade));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
          <th>Average Grade</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.address}</td>
            <td>
              <input
                type="number"
                defaultValue={student.averageGrade}
                onBlur={(e) => handleGradeChange(student.id, e.target.value)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
