let array = Array(1,2,3,4,5,6,7,8,9,10);

function Sum(arr){
    let sum = 0;
    for(let i =0; i < arr.length; i++){
        if(i%2 !== 0){
            sum += i;
        }
    }
    return sum;
}

document.write("tổng các phần tử lẻ của dãy là " + Sum(array));
