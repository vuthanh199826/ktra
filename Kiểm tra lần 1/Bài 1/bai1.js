let array = Array();
let n = +prompt("Bạn muốn mảng có bao nhiêu phần tử ?");
for (let i = 0; i < n; i++) {
    array.push(+prompt(" nhập phần tử mảng thứ " + i + " vào đây"));
}

function Sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}

document.write("tổng các phần tử lẻ của dãy là " + Sum(array));
