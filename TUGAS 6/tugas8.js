let arrayProfile = [
    {
        "row":1,
        "name":"fadlil1",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":2,
        "name":"akbar1",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":3,
        "name":"jaka1",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":4,
        "name":"venti1",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":5,
        "name":"zhongli1",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":6,
        "name":"fadlil2",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":7,
        "name":"akbar2",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":8,
        "name":"jaka2",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":9,
        "name":"venti2",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":10,
        "name":"zhongli2",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":11,
        "name":"fadlil3",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":12,
        "name":"akbar3",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":13,
        "name":"jaka3",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":14,
        "name":"venti3",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":15,
        "name":"zhongli3",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":16,
        "name":"fadlil4",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":17,
        "name":"akbar4",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":18,
        "name":"jaka4",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":19,
        "name":"venti4",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":20,
        "name":"zhongli4",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":21,
        "name":"fadlil5",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":22,
        "name":"akbar5",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":23,
        "name":"jaka5",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":24,
        "name":"venti5",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":25,
        "name":"zhongli5",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":26,
        "name":"fadlil6",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":27,
        "name":"akbar6",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":28,
        "name":"jaka6",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":29,
        "name":"venti6",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    },
    {
        "row":30,
        "name":"zhongli6",
        "address":"Jakarta",
        "gender":"Male",
        "hobby":"Sleeping",
        "religion":"Islam"
    }
]


// pagination global
let currentPage = 1
let dataPerPage = 5

// pagination search
let currentPageSearch = 1
let dataPerPageSearch = 5

let row = 21


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
        endIndex = Math.ceil(totalPageNumber)
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

    paginations.innerHTML = list

}

function setCurrentPage(nextCurrentPage) {
    event.preventDefault()
    currentPage = nextCurrentPage
    setPage(currentPage, dataPerPage, arrayProfile)
}

function previous() {
    event.preventDefault()
    currentPage -= 1
    setPage(currentPage, dataPerPage, arrayProfile)
}

function next() {
    event.preventDefault()
    currentPage += 1
    setPage(currentPage, dataPerPage, arrayProfile)
}

// END pagination

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
                <td><button type="button" class="btn btn-info" onclick="update(this)">Update</button></td>
                <td><button type="button" class="btn btn-danger" onclick="deleteProfile(this)">Delete</button></td>
            </tr>
        `
    })

    thead.innerHTML = tableProfile.join("")
}

// init
setPage(currentPage, dataPerPage, arrayProfile)


const search = input => {
    
    let searchValue = input.value.toLowerCase()

    let filteredProfiles = arrayProfile.filter(value => {
        return value.name.includes(searchValue) || value.address.includes(searchValue) ||
        value.gender.includes(searchValue) || value.hobby.includes(searchValue) ||
        value.religion.includes(searchValue)
    })

    setPage(currentPageSearch, dataPerPageSearch, filteredProfiles)
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
    form.reset()
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