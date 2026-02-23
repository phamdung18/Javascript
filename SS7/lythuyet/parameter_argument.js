/*
THAM SỐ: PARAM: giá trị được khai báo trục tiếp trong hàm
ĐỐI SỐ: ARGUMENT: giá trị khi GỌI HÀM
==> GIÚP HÀM CÓ KHẢ NĂNG TÁI SỬ DỤNG (VIẾT 1 LẦN DÙNG NHIỀU LẦN)




*/

//CHO MẢNG SỐ NGUYÊN BẤT KÌ TÍNH TỔNG CẤC SỐ NGUYÊN TRONG MẢNG
let numbers1 = [1, 3, 5, 7, 6];
let numbers2 = [2, 4, 6, 3, 5];
function totalnumbers(params) {
    console.log("param", param);
    let sum = 0;
    for (let index = 0; index < param.length; index++) {
        sum += param[index];
    }
    console.log(`Tổng các số trong mảng ${param} = ${sum}`);
}
totalnumbers(numbers1);
totalnumbers(numbers2);