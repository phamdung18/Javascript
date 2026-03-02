let students = [
    {id: 1, name: "Nguyễn Văn A", score: 8.5, gender: "Nam"},
    {id: 2, name: "Trần Thị B", score: 4.2, gender: "Nữ"},
    {id: 3, name: "Lê Văn C", score: 9.0, gender: "Nam"},
    {id: 4, name: "Phạm Thị D", score: 5.5, gender: "Nữ"},
    {id: 5, name: "Hoàng Văn E", score: 3.8, gender: "Nam"}
]

function getTopGirlStudents(list){
  let result = list
    .filter(function(student){
      return student.gender === "Nữ";
    })
    .sort(function(a, b){
      return b.score - a.score;
    });
  return result;
}
console.log("Danh sách sinh viên nữ (Điểm giảm dần): ");
console.log(getTopGirlStudents(students));

function getPassedStudent(list){
  let result = list
    .filter(function(student){
      return student.score >= 5.0;
    })
    .map(function(student){
      return student.name;
    });
  return result;
}
console.log("Danh sách sinh viên qua môn (>5.0):");
console.log(getPassedStudent(students));

function getAverageMaleScore(list){
  let maleStudents = list.filter(function(student){
    return student.gender === "Nam";
  });
  let totalscore = maleStudents.reduce(function(sum, student){
    return sum + student.score
  });

}











