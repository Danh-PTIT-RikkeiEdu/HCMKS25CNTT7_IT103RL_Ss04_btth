let orderSize = "MSLXTMM";
let isGoldMember = true;

let sizeCost = 0;
let count = 0;
let discount = 0;
for (let i = 0; i < orderSize.length; i++) {
    if (orderSize[i] === "X") {
        continue;
    } else if (orderSize[i] === "S") {
        sizeCost += 30000;
        count += 1;
    } else if (orderSize[i] === "M") {
        sizeCost += 36000;
        count += 1;
    } else if (orderSize[i] === "L") {
        sizeCost += 40000;
        count += 1;
    } else if (orderSize[i] === "T") {
        sizeCost += 8000;
        count += 1;
    } else {
        continue;
    }

    if (count === 4) {
        break;
    }
}

if (isGoldMember === true) {
    discount = sizeCost * 0.1;
    sizeCost = sizeCost * 0.9;
} 

console.log(`====== HÓA ĐƠN ======
Tổng số món: ${count}
Khách hàng Gold: ${isGoldMember}
Được giảm: ${discount}
Tổng tiền thanh toán: ${sizeCost}`);


