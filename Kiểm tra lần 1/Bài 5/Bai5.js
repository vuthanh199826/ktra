let arrMaKh = Array(1,2,3,4,5);
let arrHoTen = Array("name1","name2","name3","name4","name5");
let arrNS = Array("dd/mm/yy","dd/mm/yy","dd/mm/yy","dd/mm/yy","dd/mm/yy");
let arrGT = Array('Nam',"Nu","Nam","Nu","Nam");
let arrAdr = Array("add1","add2","add3","add4","add5");

function display(arr1,arr2,arr3,arr4,arr5){
let data =" ";

    data += '<table border="1">'
    data += '<tr><td>MaKh</td><td>Ho va Ten</td><td>Nam Sinh</td><td>Gioi Tinh</td><td>Dia Chi</td></tr>';
    for (let i = 0; i<arr1.length; i++){
        data += '<tr>';
        data += '<td>'+ arr1[i] + "</td>";
        data += '<td>'+ arr2[i] + "</td>";
        data += '<td>'+ arr3[i] + "</td>";
        data += '<td>'+ arr4[i] + "</td>";
        data += '<td>'+ arr5[i] + "</td>";
        data += "<td><button onclick='deleteindex("+ i +")'>Delete</button</td>"
        data += "<td><button onclick='edit("+ i +")'>Edit</button></td>";
        data += '<tr>';
    }
    data += '<table>'
    document.getElementById("p").innerHTML = data;
}

display(arrMaKh,arrHoTen,arrNS,arrGT,arrAdr);

function deleteindex (i){
    arrMaKh.splice(i,1);
    arrHoTen.splice(i,1);
    arrNS.splice(i,1);
    arrGT.splice(i,1);
    arrAdr.splice(i,1);
    display(arrMaKh,arrHoTen,arrNS,arrGT,arrAdr);
}
function addarr(){
arrMaKh.push(document.getElementById("inp1").value);
    arrHoTen.push(document.getElementById("inp2").value);
    arrNS.push(document.getElementById("inp3").value);
    arrGT.push(document.getElementById("inp4").value);
    arrAdr.push(document.getElementById("inp5").value);
    display(arrMaKh,arrHoTen,arrNS,arrGT,arrAdr);
}

function edit(index){
    document.getElementById('showform').innerHTML =
        '<input value = " '+ arrMaKh[index] +' " id="1" type="text">'
  +  '<input value = " '+ arrHoTen[index] +'"   id="2" type="text">'
    + '<input value = " '+ arrNS[index] +' "  " id="3" type="text">'
    +'<input value = " '+ arrGT[index] +' "  id="4" type="text">'
    + '<input value = " '+ arrAdr[index] +' "  id="5" type="text">'
    + '<button  onclick="save('+index+')">Save</button>';
}
function save(index){
    arrMaKh[index] = document.getElementById("1").value;
    arrHoTen[index] = document.getElementById("2").value;
    arrNS[index] = document.getElementById("3").value;
    arrGT[index] = document.getElementById("4").value;
    arrAdr[index] = document.getElementById("5").value;
    display(arrMaKh,arrHoTen,arrNS,arrGT,arrAdr);
    document.getElementById('showform').innerHTML = '';
}