let sout;
sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>"
for ( let i = 1; i <= 10; i++) {
    sout = sout + "<tr>";
    for ( let j = 1; j <= 10; j++) {
        sout = sout + "<td>" + i * j + "</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table> <br>";
document.write(sout);


let sout2, i, j;
sout2 = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
i = j = 1;
while (i <= 10) {
    sout2 = sout2 + "<tr>";
    while (j <= 10) {
        sout2 = sout2 + "<td>" + i * j + "</td>";
        j++;
    }
    sout2 = sout2 + "</tr>";
    j = 1;
    i++;
}
sout2 = sout2 + "</table>";
document.write(sout2);