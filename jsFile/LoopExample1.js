function bai1(){
    for (let i =1; i<=100; i++){
        if (i === 99){
            alert("Đã hoàn thành bài 1");
            break;
        }
        document.write(i + "<br>");
    }
}

function bai2(){
    let nhietDo = 0;
    while (nhietDo < 100 || nhietDo > 20){
        nhietDo = +prompt("Nhập vào nhiệt độ: ");
        if (nhietDo > 100){
            alert("Nhiệt độ quá cao")
        }else if (nhietDo < 20){
            alert("Nhiệt độ quá thấp")
        }else{
            alert("Nhiệt độ hợp lệ: "+ nhietDo +" độ C")
            break
        }
    }
}

function bai3(){
    for (let i =0; i<=20; i++){
        document.write(fibonacci(i) + "<br>");
    }

}

function bai4(){
    for (let i =1; i<=100; i++){
        if (fibonacci(i) % 5 ===0){
            document.write(fibonacci(i) + "<br>" + "số đầu tiên trong dãy chia hết cho 5 là: " +fibonacci(i));
            break
        }
        document.write(fibonacci(i) + "<br>");
    }
}

function bai5(){
    let sum = 0;
    for (let i =0; i<=20; i++){
        sum += fibonacci(i);
        document.write(fibonacci(i) + "<br>");
    }
    document.write("Tổng của 20 số đầu tiên là: " + sum);
}

function bai6(){
    let number = 7;
    let count = 0;
    let sum = 0;
    while (count<30){
        if (number % 7 === 0){
            document.write(number + "<br>");
            sum += number;
            count++;
        }
        number++;
        if (count === 30){
            document.write("Tổng của 30 số đầu tiên chia hết cho 7 là: "+sum);
        }
    }
}

function bai7(){
    for (let i =1; i<=100; i++){
        if (i%3 === 0 && i%5 === 0){
            document.write("FizzBuzz" + "<br>");
            continue
        }
        if (i % 3 === 0){
            document.write("Fizz" + "<br>");
            continue
        }
        if (i % 5 === 0){
            document.write("Buzz" + "<br>");
            continue
        }
        document.write(i + "<br>");
    }
}

function bai8(){
    let max = +prompt("Nhập vào số lớn nhất");
    let min = +prompt("Nhập vào số nhỏ nhất");
    let count = 0;
    let randomNumber = Math.floor(laySoNgauNhien(min,max));
    console.log(randomNumber);
    let numberInput;
    while (count < 3){
        numberInput = +prompt("Nhập vào số bạn đoán");
        if (numberInput === randomNumber){
            alert("Bạn đã đoán đúng");
            break;
        }else if(numberInput > randomNumber){
            alert("Số cần tìm nhỏ hơn "+numberInput);
            count++;
        }else{
            alert("Số cần tìm lớn hơn "+numberInput);
            count++;
        }
        if (count === 3){
            alert("Bạn đã hết lượt chơi")
        }
    }
}

function laySoNgauNhien(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fibonacci(number){
    if (number === 0){
        return 0;
    }else if (number === 1){
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);

}