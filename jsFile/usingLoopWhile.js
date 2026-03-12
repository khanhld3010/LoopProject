function bai1(){
    let number;
    let total = 0;
    do {
        number = +prompt("Enter number");
       if (number !== -1) {
           total += number;
       }
    } while (number !== -1);

    console.log(total);
}

function bai2(){
    let i = 1;

    while (i < 100) {
        //phân thân vòng lặp
        document.write("<hr width = " + i + "%>");
        i++;
    }
}