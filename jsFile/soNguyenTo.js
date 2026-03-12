let number = prompt("Nhập vào số lượng số nguyên tố bạn muốn in");
let count = 0;
let i = 2;
while (count < number) {
    if (coPhaiSoNguyenTo(i)){
        document.write(i + "<br>");
        count++;
        i++;
    }else{
        i++;
    }
}

function coPhaiSoNguyenTo(number){
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {

        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(coPhaiSoNguyenTo(7))