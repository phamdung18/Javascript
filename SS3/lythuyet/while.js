/* 
    Vòng lặp while
    1. khi nào dùng? không biết trước số lần lặp
    2. cú pháp: while(condition){
     }
    3. luồng hoạt động: khi điều kiện đúng thì chạy, điều kiện sai thì dừng



*/

let passWord;
passWord = prompt("nhập passWord: ");
while (passWord !=12345){
    passWord = prompt("nhập lại passWord:");
    count++;
    if (count==3){
        break;
    }
}
console.log("chào admin");
