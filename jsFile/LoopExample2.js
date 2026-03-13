function bai2(){
    console.log(tinhGiaiThua(5))
}

function bai3(){
    for (let i = 1; i <= 5; i++){
        for (let j = 1; j <= i; j++){
            document.write("*")
        }
        document.write("<br>")
    }

    for (let i = 5; i >= 1; i--){
        for (let j = 1; j <= i; j++){
            document.write("*")
        }
        document.write("<br>")
    }

    for (let i = 5; i >= 1; i--){
        for (let j = 1; j <= i-1; j++){
            document.write("&nbsp;&nbsp;")
        }
        for (let k = 1; k <= 6-i; k++){
            document.write("*")
        }
        document.write("<br>")
    }

    for (let i = 1; i <= 5; i++){
        for (let j = 1; j <= i-1; j++){
            document.write("&nbsp;&nbsp;")
        }
        for (let k = 1; k <= 6-i; k++){
            document.write("*")
        }
        document.write("<br>")
    }
}

function bai4(){
    for (let i = 1; i <= 7; i++){
        for (let j = 1; j <= 20; j++){
            if (i === 1 || i === 7){
                document.write("*")
            }
            else if (j === 1 || j === 20){
                document.write("*")
            }else{
                document.write("&nbsp;&nbsp;")
            }
        }
        document.write("<br>")
    }
}

function bai5(){
   let size = 10;
   // vẽ đầu hình trái tim
    for (let i = size/2 ; i <= size; i+=2){
        for (let j = 1; j <= size - i; j+=2){
            document.write("&nbsp;&nbsp;");
        }
        for (let k = 1; k <= i; k++){
            document.write("*");
        }
        for (let k = 1; k <= size - i; k++){
            document.write("&nbsp;&nbsp;");
        }
        for (let k = 1; k <= i; k++){
            document.write("*");
        }
        document.write("<br>")
    }

    // vẽ thân hình trái tim
    for (let i = size; i >= 1; i--){
        for (let j = 0; j <= size - i; j++){
            document.write("&nbsp;&nbsp;");
        }
        for (let k = 2; k <= i*2; k++){
            document.write("*");
        }
        document.write("<br>")
    }
}

function tinhGiaiThua(number){
    if (number === 0 || number === 1){
        return 1;
    }
     return number * tinhGiaiThua(number-1);
}