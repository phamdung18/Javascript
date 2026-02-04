let names = "Quý, Nam, Lan, Hùng, Nam";
let student = names.split(",");
student.reverse(); 

if (student.includes("Lan")){
  console.log("Tên Lan tồn tại trong mảng");
} else{
  console.log("Tên Lan không tồn tại trong mảng");
}
let index = student.indexOf("Nam");
console.log(index);
