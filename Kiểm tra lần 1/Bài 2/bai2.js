let a = +prompt("nhập số cần kiểm tra vào đây");
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
alert(checkPerfectNumber(a));