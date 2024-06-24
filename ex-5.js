const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  let sumScore = students.reduce((accumulator,student)=>{
    return accumulator + student.score;
  },0);

  return sumScore/students.length;
  
}

let averageStudent = getAverageStudentScore(students); 

console.log(averageStudent);
// Output: 87.5



