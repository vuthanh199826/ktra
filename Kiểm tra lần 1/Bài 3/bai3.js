let array = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function Check(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    if (sum === number) {
        return true;
    } else {
        return false;
    }
};

function CheckArr(arr) {
    let str = " ";
    for (let i = 0; i < arr.length; i++) {
        if (Check(arr[i]) === true) {
            str += " vị trí của số hoàn hảo " + arr[i] + " là " + i + " ";
        }
    }
    if (str == " ") {
        return "không có phần tử nào"
    } else {
        return str;
    }
}

alert(CheckArr(array));