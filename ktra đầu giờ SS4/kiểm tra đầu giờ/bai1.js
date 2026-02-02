let n = 20;
if (n %2===0){
    console.log("Số" + n + "là số chẵn");
} else{
    console.log("Số" + n + "là số lẻ");
}
if (n >0){
    console.log("Số" + n + "là số dương");
} else if (n <0){
    console.log("Số" + n + "là số âm");
} else{
    console.log("Số" + n + "bằng 0");
}
if (n >0){
    console.log("Các số từ 1 đến" + n + ":");
    for (let i=1;i<=n;i++){
        console.log(i);
    }
} else{
    console.log("Giá trị n không hợp lệ để tạo dãy số");
}

