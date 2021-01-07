let filteredProfiles = []
let arrayProfile = [
    {
        "row":1,
        "name":"fadlil1",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"fadlil1@gmail.com",
        "password":"fadlil1"
    },
    {
        "row":2,
        "name":"akbar1",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"akbar1@gmail.com",
        "password":"akbar1"
    },
    {
        "row":3,
        "name":"jaka1",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"jaka1@gmail.com",
        "password":"jaka1"
    },
    {
        "row":4,
        "name":"venti1",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"venti1@gmail.com",
        "password":"venti1"
    },
    {
        "row":5,
        "name":"zhongli1",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"zhongli1@gmail.com",
        "password":"zhongli1"
    },
    {
        "row":6,
        "name":"fadlil2",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"fadlil2@gmail.com",
        "password":"fadlil2"
    },
    {
        "row":7,
        "name":"akbar2",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"akbar2@gmail.com",
        "password":"akbar2"
    },
    {
        "row":8,
        "name":"jaka2",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"jaka2@gmail.com",
        "password":"jaka2"
    },
    {
        "row":9,
        "name":"venti2",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"venti2@gmail.com",
        "password":"venti2"
    },
    {
        "row":10,
        "name":"zhongli2",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"zhongli2@gmail.com",
        "password":"zhongli2"
    },
    {
        "row":11,
        "name":"fadlil3",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"fadlil3@gmail.com",
        "password":"fadlil3"
    },
    {
        "row":12,
        "name":"akbar3",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"akbar3@gmail.com",
        "password":"akbar3"
    },
    {
        "row":13,
        "name":"jaka3",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"jaka3@gmail.com",
        "password":"jaka3"
    },
    {
        "row":14,
        "name":"venti3",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"venti3@gmail.com",
        "password":"venti3"
    },
    {
        "row":15,
        "name":"zhongli3",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"zhongli3@gmail.com",
        "password":"zhongli3"
    },
    {
        "row":16,
        "name":"fadlil4",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"fadlil4@gmail.com",
        "password":"fadlil4"
    },
    {
        "row":17,
        "name":"akbar4",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"akbar4@gmail.com",
        "password":"akbar4"
    },
    {
        "row":18,
        "name":"jaka4",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"jaka4@gmail.com",
        "password":"jaka4"
    },
    {
        "row":19,
        "name":"venti4",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"venti4@gmail.com",
        "password":"venti4"
    },
    {
        "row":20,
        "name":"zhongli4",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"zhongli4@gmail.com",
        "password":"zhongli4"
    },
    {
        "row":21,
        "name":"fadlil5",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"fadlil5@gmail.com",
        "password":"fadlil5"
    },
    {
        "row":22,
        "name":"akbar5",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"akbar5@gmail.com",
        "password":"akbar5"
    },
    {
        "row":23,
        "name":"jaka5",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"jaka5@gmail.com",
        "password":"jaka5"
    },
    {
        "row":24,
        "name":"venti5",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"venti5@gmail.com",
        "password":"venti5"
    },
    {
        "row":25,
        "name":"zhongli5",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"zhongli5@gmail.com",
        "password":"zhongli5"
    },
    {
        "row":26,
        "name":"fadlil6",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"fadlil6@gmail.com",
        "password":"fadlil6"
    },
    {
        "row":27,
        "name":"akbar6",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"akbar6@gmail.com",
        "password":"akbar6"
    },
    {
        "row":28,
        "name":"jaka6",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"jaka6@gmail.com",
        "password":"jaka6"
    },
    {
        "row":29,
        "name":"venti6",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"venti6@gmail.com",
        "password":"venti6"
    },
    {
        "row":30,
        "name":"zhongli6",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam",
        "email":"zhongli6@gmail.com",
        "password":"zhongli6"
    }
]


// pagination global
let currentPage = 1
let dataPerPage = 5

// pagination search
let currentPageSearch = 1
let dataPerPageSearch = 5

let row = 31


function setPage(currentPageFunction, dataPerPageFunction, arrayPage) {
    currentPageFunction--
    let start = dataPerPageFunction * currentPageFunction
    let end = start + dataPerPageFunction
    let paginatedItems = arrayPage.slice(start, end)

    showProfile(paginatedItems)
    showPageNumber(arrayPage)

}

function showPageNumber(arrayShow) {

    // variable declaration
    let paginations = document.getElementById("pagination")
    let totalPageNumber = Math.ceil((arrayShow.length / dataPerPage))
    let disableNextPage = Math.ceil(totalPageNumber)
    let list = ""

    // button previous
    if (currentPage == 1) {
        list += `
            <li class="page-item disabled">
                <a class="page-link" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
        `
    } else {
        list += `
            <li class="page-item">
                <a class="page-link" onClick="previous()">Previous</a>
            </li>
        `
    }

    // page show 
    let totalIndexPage = 5
    // console.log("currentPage : " + currentPage)

        // set middle index
    let middleIndex
    if (totalPageNumber >= totalIndexPage) {
        // middleIndex = currentPage - Math.floor(totalIndexPage/2)
        middleIndex = 2
    } else {
        middleIndex = 0
    }
    // console.log("middleIndex : " + middleIndex)

        // set start index
    let startIndex
    if (currentPage < 4) {
        startIndex = 0
    } else if (currentPage > totalPageNumber - 2) {
        startIndex = totalPageNumber - totalIndexPage
        if (startIndex == -1) {
            startIndex = 0
        }
    } else {
        startIndex = (currentPage - 1) - middleIndex
    }
    // console.log("totalPageNumber : " + totalPageNumber)
    // console.log("startIndex : " + startIndex)

        // set endIndex
    let endIndex
    if (currentPage == totalPageNumber - 1) {
        endIndex = currentPage + 1
    } else if (currentPage == totalPageNumber - 2) {
        endIndex = currentPage + 2
    } else if (currentPage == totalPageNumber) {
        endIndex = currentPage
    } else if (startIndex == 0) {
        if (totalPageNumber > 5) {
            endIndex = 5
        } else {
            endIndex = Math.ceil(totalPageNumber)
        }
    } else {
        endIndex = (currentPage) + middleIndex
    }
    // console.log("endIndex :" + endIndex)
    
    for (let i = startIndex; i < endIndex; i++) {
        if (currentPage == i + 1) {
            list += `
            <li class="page-item active" aria-current="page">
                <a class="page-link" onClick="setCurrentPage(${i + 1})">${i + 1}<span class="sr-only">(current)</span></a>
            </li>
            `
        } else {
            list += `
            <li class="page-item page-link" onClick="setCurrentPage(${i + 1})"> ${i + 1}</li>
            `
        }
    }

    // button next
    if (currentPage == disableNextPage) {
        list += `
            <li class="page-item disabled">
                <a class="page-link" tabindex="-1" aria-disabled="true">Next</a>
            </li>
        `
    } else {
        list += `
            <li class="page-item">
                <a class="page-link" onClick="next()">Next</a>
            </li>
        `
    }

    // button last
    if (currentPage == disableNextPage) {
        list += `
            <li class="page-item disabled">
                <a class="page-link" tabindex="-1" aria-disabled="true">Last Page</a>
            </li>
        `
    } else {
        list += `
            <li class="page-item">
                <a class="page-link" onClick="last()">Last Page</a>
            </li>
        `
    }

    paginations.innerHTML = list

}

function setCurrentPage(nextCurrentPage) {
    event.preventDefault()
    if (searchFill) {
        currentPageSearch = nextCurrentPage
        currentPage = nextCurrentPage
        setPage(currentPageSearch, dataPerPage, filteredProfiles)
    } else {
        currentPage = nextCurrentPage
        setPage(currentPage, dataPerPage, arrayProfile)
    }
}

function previous() {
    event.preventDefault()
    if (searchFill) {
        currentPageSearch -= 1
        currentPage -= 1
        setPage(currentPageSearch, dataPerPage, filteredProfiles)
    } else {
        currentPage -= 1
        setPage(currentPage, dataPerPage, arrayProfile)
    }
}

function next() {
    event.preventDefault()
    if (searchFill) {
        currentPageSearch += 1
        currentPage += 1
        setPage(currentPageSearch, dataPerPage, filteredProfiles)
    } else {
        currentPage += 1
        setPage(currentPage, dataPerPage, arrayProfile)
    }
}

let lastPageNumber = Math.ceil((arrayProfile.length / dataPerPage))
let lastPageNumberSearch = Math.ceil((filteredProfiles.length / dataPerPage))
function last() {
    event.preventDefault()
    if (searchFill) {
        currentPageSearch = lastPageNumberSearch
        currentPage = lastPageNumberSearch
        setPage(currentPageSearch, dataPerPage, filteredProfiles)
    } else {
        currentPage = lastPageNumber
        setPage(currentPage, dataPerPage, arrayProfile)
    }
}

// END pagination

const saveProfile = () => {
    event.preventDefault()

    const form = document.inputData

    arrayProfile.push({
        row: row,
        email: form.emailRegis.value.toLowerCase(),
        password: form.passwordRegis.value,
        name: form.name.value.toLowerCase(),
        address: form.address.value.toLowerCase(),
        gender: getGender(),
        hobby: getHobby(),
        religion: getReligion()
    })

    setPage(currentPage, dataPerPage, arrayProfile)

    row += 1
    form.reset()
}

function updateProfile(arrayDestination) {

    const form = document.inputData
    let rowProfile = form.row.value
    let indexArrayProfile = arrayDestination.findIndex(x => x.row == rowProfile)
    // console.log(indexArrayProfile)

    if(confirm("are you sure want to update this profile?")) {
        arrayDestination[indexArrayProfile].email = form.emailRegis.value
        arrayDestination[indexArrayProfile].password = form.passwordRegis.value
        arrayDestination[indexArrayProfile].name = form.name.value
        arrayDestination[indexArrayProfile].address = form.address.value
        arrayDestination[indexArrayProfile].gender = getGender()
        arrayDestination[indexArrayProfile].hobby = getHobby()
        arrayDestination[indexArrayProfile].religion = getReligion()
    }

    setPage(currentPage, dataPerPage, arrayProfile)
    form.reset()
}

function validator() {
    event.preventDefault()

    const form = document.inputData
    let rowProfile = form.row.value
    let indexArrayProfile = arrayProfile.findIndex(x => x.row == rowProfile)
    console.log(rowProfile)
    console.log(indexArrayProfile)

    if (indexArrayProfile == -1 ){
        saveProfile()
    } else {
        updateProfile(arrayProfile)
    }

}

const showProfile = (profiles = arrayProfile) => {
    let thead = document.querySelector("table[type=dataProfiles] tbody")

    let tableProfile = profiles.map((value, index) => {
        return `
            <tr>
                <th scope="row">${value.row}</th>
                <td style="text-transform: capitalize;">${value.name}</td>
                <td style="text-transform: capitalize;">${value.address}</td>
                <td>${value.gender}</td>
                <td>${value.hobby}</td>
                <td>${value.religion}</td>
                <td><button type="button" class="btn btn-info" onclick="update(this)" name="updateButton">Update</button></td>
                <td><button type="button" class="btn btn-danger" onclick="deleteProfile(this)" name="deleteButton">Delete</button></td>
                <td hidden>${value.email}</td>
                <td hidden>${value.password}</td>
            </tr>
        `
    })

    thead.innerHTML = tableProfile.join("")
}

// init

let searchFill = false;
const search = input => {
    
    let searchValue = input.value.toLowerCase()
    let searchLength = searchValue.length

    filteredProfiles = arrayProfile.filter(value => {
        return value.name.includes(searchValue) || value.address.includes(searchValue) ||
        value.gender.includes(searchValue) || value.hobby.includes(searchValue) ||
        value.religion.includes(searchValue)
    })

    setPage(currentPageSearch, dataPerPageSearch, filteredProfiles)
    if (searchLength == 0) {
        searchFill = false
    } else {
        searchFill = true
    }
}

function update(td) {
    // value of selected row
    let selectedRow = td.parentElement.parentElement
    // console.log(selectedRow)

    // element tujuan
    const form = document.inputData
    let gender = document.getElementsByName('gender')
    let hobby = document.getElementsByName('hobby')
    let religions = document.getElementById('religion')

    form.row.value = selectedRow.cells[0].innerHTML
    form.emailRegis.value = selectedRow.cells[8].innerHTML
    form.passwordRegis.value = selectedRow.cells[9].innerHTML
    form.name.value = selectedRow.cells[1].innerHTML
    form.address.value = selectedRow.cells[2].innerHTML

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
        religions.selectedIndex = 0
    } else if (selectedRow.cells[5].innerHTML == "Kristen") {
        religions.selectedIndex = 1
    } else if (selectedRow.cells[5].innerHTML == "Katolik") {
        religions.selectedIndex = 2
    } else if (selectedRow.cells[5].innerHTML == "Hindu") {
        religions.selectedIndex = 3
    } else if (selectedRow.cells[5].innerHTML == "Buddha") {
        religions.selectedIndex = 4
    }
    
}

const deleteProfile = td => {
    // value of selected row
    let selectedRow = td.parentElement.parentElement

    let nameProfile = selectedRow.cells[1].innerHTML
    let indexArrayProfile = arrayProfile.findIndex(x => x.name === nameProfile)

    if (confirm("Are you sure want to delete this profile?")) {
        arrayProfile.splice(indexArrayProfile,1)
    }

    setPage(currentPage, dataPerPage, arrayProfile)
}


// Getter Function

const getGender = () => {
    let gender = document.getElementsByName('gender')
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            return gender[i].value
        }
    }
}

const getHobby = () => {
    let hobby = document.getElementsByName('hobby')
    let arrayHobby = []
    for (let i = 0; i < hobby.length; i++) {
        if (hobby[i].checked) {
            arrayHobby.push(hobby[i].value)
        }
    }
    return arrayHobby
}

const getReligion = () => {
    let religions = document.getElementById("religion")
    let religion = religions.options[religions.selectedIndex].text
    return religion
}

