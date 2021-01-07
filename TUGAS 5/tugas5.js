var arrayProfile = []


var row = 1

const saveProfile = () => {
    event.preventDefault()

    const form = document.inputData

    arrayProfile.push({
        row: row,
        name: form.name.value.toLowerCase(),
        address: form.address.value.toLowerCase(),
        gender: getGender(),
        hobby: getHobby(),
        religion: getReligion()
    })

    showProfile()

    row += 1;
    form.reset();
}

function updateProfile() {

    const form = document.inputData
    let nameProfile = form.name.value
    let indexArrayProfile = arrayProfile.findIndex(x => x.name === nameProfile)
    console.log(indexArrayProfile)

    if(confirm("are you sure want to update this profile?")) {
        arrayProfile[indexArrayProfile].name = form.name.value
        arrayProfile[indexArrayProfile].address = form.address.value
        arrayProfile[indexArrayProfile].gender = getGender()
        arrayProfile[indexArrayProfile].hobby = getHobby()
        arrayProfile[indexArrayProfile].religion = getReligion()
    }

    showProfile()
    form.reset();

}

function validator() {
    event.preventDefault()

    const form = document.inputData
    let nameProfile = form.name.value
    let indexArrayProfile = arrayProfile.findIndex(x => x.name === nameProfile)

    if (indexArrayProfile == -1 ){
        saveProfile()
    } else {
        updateProfile()
    }

}

const showProfile = (profiles = arrayProfile) => {
    let thead = document.querySelector("table[type=dataProfiles] tbody")

    let tableProfile = profiles.map((value, index) => {
        return `
            <tr>
                <th scope="row">${index + 1}</th>
                <td style="text-transform: capitalize;">${value.name}</td>
                <td style="text-transform: capitalize;">${value.address}</td>
                <td>${value.gender}</td>
                <td>${value.hobby}</td>
                <td>${value.religion}</td>
                <td><button type="button" class="btn btn-info" onclick="update(this)">Update</button></td>
                <td><button type="button" class="btn btn-danger" onclick="deleteProfile(this)">Delete</button></td>
            </tr>
        `
    })

    thead.innerHTML = tableProfile.join("")
}


const search = input => {
    
    let searchValue = input.value.toLowerCase()

    let filteredProfiles = arrayProfile.filter(value => {
        return value.name.includes(searchValue) || value.address.includes(searchValue) ||
        value.gender.includes(searchValue) || value.hobby.includes(searchValue) ||
        value.religion.includes(searchValue)
    })

    showProfile(filteredProfiles);

}

function update(td) {
    // value of selected row
    let selectedRow = td.parentElement.parentElement;
    console.log(selectedRow)

    // element tujuan
    const form = document.inputData
    let gender = document.getElementsByName('gender');
    let hobby = document.getElementsByName('hobby');
    let religions = document.getElementById("religion");

    form.name.value = selectedRow.cells[1].innerHTML;
    form.address.value = selectedRow.cells[2].innerHTML;

    if (selectedRow.cells[3].innerHTML === "Male") {
        gender[0].checked = true
    } else {
        gender[1].checked = true
    }

    if (selectedRow.cells[4].innerHTML === "Reading") {
        hobby[0].checked = true
    } else if (selectedRow.cells[4].innerHTML === "Sleeping") {
        hobby[1].checked = true
    } else if (selectedRow.cells[4].innerHTML === "Badminton") {
        hobby[2].checked = true
    } else if (selectedRow.cells[4].innerHTML === "Soccer") {
        hobby[3].checked = true
    } else if (selectedRow.cells[4].innerHTML === "Futsal") {
        hobby[4].checked = true
    }

    if (selectedRow.cells[5].innerHTML == "Islam") {
        religions.selectedIndex = 0;
    } else if (selectedRow.cells[5].innerHTML == "Kristen") {
        religions.selectedIndex = 1;
    } else if (selectedRow.cells[5].innerHTML == "Katolik") {
        religions.selectedIndex = 2;
    } else if (selectedRow.cells[5].innerHTML == "Hindu") {
        religions.selectedIndex = 3;
    } else if (selectedRow.cells[5].innerHTML == "Buddha") {
        religions.selectedIndex = 4;
    }
    
}

const deleteProfile = td => {
    // value of selected row
    let selectedRow = td.parentElement.parentElement;

    let nameProfile = selectedRow.cells[1].innerHTML;
    let indexArrayProfile = arrayProfile.findIndex(x => x.name === nameProfile)

    if (confirm("Are you sure want to delete this profile?")) {
        arrayProfile.splice(indexArrayProfile,1);
    }

    showProfile(arrayProfile)
    form.reset();
}



// Getter Function

const getGender = () => {
    let gender = document.getElementsByName('gender');
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            return gender[i].value
        }
    }
}

const getHobby = () => {
    let hobby = document.getElementsByName('hobby');
    let arrayHobby = [];
    for (let i = 0; i < hobby.length; i++) {
        if (hobby[i].checked) {
            arrayHobby.push(hobby[i].value)
        }
    }
    return arrayHobby;
}

const getReligion = () => {
    let religions = document.getElementById("religion");
    let religion = religions.options[religions.selectedIndex].text;
    return religion;
}