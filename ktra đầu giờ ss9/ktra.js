let orders = ["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "Đơn hàng E"];
let revenues = [1500, 2800, 1200, -500, 3200];
let negativeOrder = false;
let allAbove500 = true;

for (let i=0;i<revenues.length;i++){
    if (revenues[i]<0){
        negativeOrder= true;
    }
    if (revenues[i]<=500){
        allAbove500= false;
    }
}
console.log("Có đơn hàng âm:", negativeOrder);
console.log("Tất cả trên 500:", allAbove500);

let netProfits = [];
for (let i=0;i<revenues.length;i++){
    let profit = revenues[i]*0.9;  
    netProfits.push(profit);
}

console.log("Lợi nhuận ròng: ", netProfits);
