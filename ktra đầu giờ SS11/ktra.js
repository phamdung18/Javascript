let students = [
    {id: 1, name: "Nguyễn Văn A", score: 8.5, gender: "Nam"},
    {id: 2, name: "Trần Thị B", score: 4.2, gender: "Nữ"},
    {id: 3, name: "Lê Văn C", score: 9.0, gender: "Nam"},
    {id: 4, name: "Phạm Thị D", score: 5.5, gender: "Nữ"},
    {id: 5, name: "Hoàng Văn E", score: 3.8, gender: "Nam"}
];
function getExcellentStudent(studentList){
    let result = studentList.filter(function(student){
        return student.score >= 8.0;
    });
    console.log("Danh sách sinh viên xuất sắc:", result);
    return result;
}
function checkWeakStudent(studentList){
    let hasWeak = studentList.some(function(student){
        return student.score < 4.0;
    });
    if (hasWeak){
        console.log("Có sinh viên yếu :");
    } else{
        console.log("Không có sinh viên yếu");
    }
}
function createStudentLabel(studentList){
    let studentLabel = studentList.map(function(student){
        return "Tên: " + student.name + " - Điểm: " + student.score;
    });
    console.log("Danh sách hiển thị:", studentLabel);
    return studentLabel;
}
getExcellentStudent(students);
checkWeakStudent(students);
createStudentLabel(students);


