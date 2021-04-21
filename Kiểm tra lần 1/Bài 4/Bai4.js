function Draw(n) {
    let i = 1;
    while (i < n) {
        document.write('<hr width= ' + i + ' %>');
        i++;
    }
}

Draw(prompt("nhập só dòng vào đây", 100));

