/*
    Các phương thức làm việc với mảng
        1. indexOf(): kiểm tra xem phần tử có tồn tại trong mảng hay không?
            + Nếu có trả về index
            + Nếu không có trả về -1
        2. includes(): kiểm tra phần tử có trong mảng hay không?
            + Trả về true || false
        3. reverse(): đảo ngược vị trí các phần tử trong mảng
        4. join(): nối các phần tử trong mảng thành string
        5. split



*/

















//tính điểm trung bình của lớp
let scores1 = [7,8,4,5,6];
let totalScore = 0;
for (let i=0;i<scores1.length;i++){
    totalScore += scores1[i];
}
let avgScore = totalScore / scores1.length;
console.log(`Điểm trung bình của lớp là: ${avgScore}`);

//tìm điểm lớn nhất
let scores2 = [7,8,4,5,6];
let maxScore = scores2[0];
for (let i=1;i<scores2.length;i++){
    if (scores2[i] > maxScore){
        maxScore = scores2[i];
    }
}
console.log(`Điểm lớn nhất của lớp là: ${maxScore}`);


