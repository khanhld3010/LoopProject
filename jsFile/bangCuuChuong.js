let sout = "<table border='1' width='900' cellspacing='0' cellpadding='3'>";

for (let i = 2; i < 11;i++){
    sout = sout + "<tr>";
    for (let j = 1; j < 10;j++){
        sout = sout + "<td>" + i + " x " + j + " = " + i * j + "</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table> <br>";
document.write(sout);