
export const calculateClassroomAverage = (students) => {
    const total = students.reduce((acc, cur) => acc + cur.averageGrade, 0);
    return total / students.length;
  };
  