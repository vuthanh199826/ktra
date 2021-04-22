let array = [];

function Class(id, name, cost) {
    this.id = id;
    this.name = name;
    this.cost = cost;
}

function Add(arr) {
    let id = prompt("Nhập ID sản phẩm vào đây");
    if (id === "") {
        alert("Vui lòng nhập đầy đủ thông tin")
        return Add(arr);
    }
    let name = prompt("Nhập tên sản phẩm vào đây");
    if (name === "") {
        alert("Vui lòng nhập đầy đủ thông tin")
        return Add(arr);
    }
    let cost = prompt("Nhập giá bán sản phẩm vào đây");
    if (cost === "") {
        alert("Vui lòng nhập đầy đủ thông tin")
        return Add(arr);
    }
    let obj = new Class(id, name, cost);
    arr.push(obj);
    display(arr);
}

function display(arr) {
    let str = " ";
    str += '<table cellspacing="0" width="50%" style="text-align: center">';
    str += '<tr style="color: white"><td>ID</td><td>NAME</td><td>COST</td>';
    for (let i = 0; i < arr.length; i++) {
        let a;
        if (i % 2 === 0) {
            a = "lightslategray";
        } else {
            a = "cornsilk";
        }
        str += '<tr style="background-color:' + a + '">';
        str += '<td>' + arr[i].id + '</td>';
        str += '<td>' + arr[i].name + '</td>'
        str += '<td>' + arr[i].cost + '</td>'
        str += '<td><button style="background: springgreen" onclick="remove(' + i + ')" type="button">Delete</button></td>'
        str += '<td><button style="background: springgreen" onclick="Edit(' + i + ')" type="button">Edit</button></td>'
        str += '<tr>';
    }
    str += '</table>';
    document.getElementById("inp").innerHTML = str;
}

function remove(index) {
    let a = confirm("Bạn có chắc muốn xóa ?");
    if (a === true) {
        array.splice(index, 1);
        display(array);
    }

}

function Edit(index) {
    let a = prompt("ID", array[index].id);
    let b = prompt("NAME", array[index].name);
    let c = prompt("COST", array[index].cost);
    array[index].id = a;
    array[index].name = b;
    array[index].cost = c;
    display(array);
}







