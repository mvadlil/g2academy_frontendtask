
//tangkep event saat di klik
var entry = document.getElementById("entry");
// var tableDisplay = document.getElementById("tableDisplay");

//setelah dklik arahkan ke function
entry.addEventListener("click", displayDetails);
// tableDisplay.addEventListener("click", displayDetails);

var arrayProfile = [];



var row = 1;
//function untuk memasukkan table
function displayDetails(event) {

    event.preventDefault();

    // ambil value
    let names = document.getElementById("names").value;
    let address = document.getElementById("address").value;
    let gender = document.getElementById("gender").value;
    let hobby = document.getElementById("hobby").value;
    let religion = document.getElementById("religion").value;


    let profile = {
        "row": row,
        "names": `${names}`,
        "address": `${address}`,
        "gender": `${gender}`,
        "hobby": `${hobby}`,
        "religion":`${religion}`
    }

    arrayProfile.push(profile)
   
    //ini variable tujuan, atau wadah dari element yang udah di tangkep
    let display = document.getElementById("display");

    let newRow = display.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);

    cell1.innerHTML = row;
    cell2.innerHTML = names;
    cell3.innerHTML = address;
    cell4.innerHTML = gender;
    cell5.innerHTML = hobby;
    cell6.innerHTML = religion;

    row += 1;
    form.reset()

}


function search(e) {

    e.preventDefault();
    var search = document.getElementById("search").value;
    var tableRow = document.querySelectorAll(".displayContainer tr");


    for (let i = 1; i < tableRow.length; i++) {
        tableRow[i].remove();
    }

    for (let i = 0; i < arrayProfile.length; i++) {
        if(
            arrayProfile[i].names == search 
            || arrayProfile[i].address == search
            || arrayProfile[i].gender == search
            || arrayProfile[i].hobby == search
            || arrayProfile[i].religion == search
            ) {

            var table = document.getElementById("display");
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(3);
            var cell6 = row.insertCell(3);

            cell1.innerHTML = arrayProfile[i].row;
            cell2.innerHTML = arrayProfile[i].names;
            cell3.innerHTML = arrayProfile[i].address;
            cell4.innerHTML = arrayProfile[i].gender;
            cell5.innerHTML = arrayProfile[i].hobby;
            cell6.innerHTML = arrayProfile[i].religion;

        }
    }

}

function reset(event) {
    event.preventDefault();
    var tableRow = document.querySelectorAll(".displayContainer tr");

    for (let i = 1; i < tableRow.length; i++) {
        tableRow[i].remove();
    }

    for (let i = 0; i < arrayProfile.length; i++) {
        
        var table = document.getElementById("display");

        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(3);
        var cell6 = row.insertCell(3);

        cell1.innerHTML = arrayProfile[i].row;
        cell2.innerHTML = arrayProfile[i].names;
        cell3.innerHTML = arrayProfile[i].address;
        cell4.innerHTML = arrayProfile[i].gender;
        cell5.innerHTML = arrayProfile[i].hobby;
        cell6.innerHTML = arrayProfile[i].religion;
            
    }

}
