let array = Array();
let n = +prompt("nhập khoảng mà bạn muốn kiểm tra");
for(let i =1;i<=n;i++){
    array.push(i);
}

let arrayIndexofPerfectNumber = [];

function checkPerfectNumber(number){
    let sum = 0;
    if(number<=0){
        return false;
    }else {
        for(let i = 0; i < number; i++){
            if(number%i===0){
                sum += i;
            }
        }
        if(sum===number){
            return true;
        }
        return false;
    }

}




function checkArrayisPerfectNumber(arr){
    for(let i =0; i<arr.length;i++){
        checkPerfectNumber(i);
        if(checkPerfectNumber(i)){
            arrayIndexofPerfectNumber.push(i);
        }
    }
    return arrayIndexofPerfectNumber;

}

let a = checkArrayisPerfectNumber(array);
if(arrayIndexofPerfectNumber == ""){
    alert("không có phần tử nào trong mảng");
}else {
    alert(a);
}






