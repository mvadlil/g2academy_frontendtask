function login(arrayData) {
    event.preventDefault()

    let form = document.loginUser
    let inputEmail = form.email.value
    let inputPassword = form.password.value

    let bodyWrapper = document.getElementById("bodyWrapper")
    let bodyLogin = document.getElementById("bodyLogin")

    let indexArrayProfileByEmail = arrayData.findIndex(x => x.email == inputEmail)
    let indexArrayProfileByPassword = arrayData.findIndex(x => x.password == inputPassword)

    if (inputEmail == "admin" && inputPassword == "admin") {
        bodyWrapper.removeAttribute("hidden")
        setPage(currentPage, dataPerPage, arrayProfile)
        bodyLogin.hidden = true
    } else {

        if (indexArrayProfileByEmail != -1 && indexArrayProfileByPassword != -1 && indexArrayProfileByEmail == indexArrayProfileByPassword) {
            bodyWrapper.removeAttribute("hidden")
            bodyLogin.hidden = true
            hiddenRegisterForm()
            hiddenSearch()
            setPageNonAdmin(currentPage, arrayProfile.length, arrayProfile)
        } else {
            alert("Username or password is wrong!")
        }
        
    }
}

function hiddenRegisterForm() {
    let registerForm = document.getElementById("registerForm")
    registerForm.hidden = true
}

function hiddenSearch() {
    let search = document.getElementById("searchProfiles")
    search.hidden = true
}

const showProfileNonAdmin = (profiles = arrayProfile) => {
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
                <td><button type="button" class="btn btn-info" onclick="update(this)" name="updateButton" disabled>Update</button></td>
                <td><button type="button" class="btn btn-danger" onclick="deleteProfile(this)" name="deleteButton" disabled>Delete</button></td>
            </tr>
        `
    })

    thead.innerHTML = tableProfile.join("")
}

function setPageNonAdmin(currentPageFunction, dataPerPageFunction, arrayPage) {
    currentPageFunction--
    let start = dataPerPageFunction * currentPageFunction
    let end = start + dataPerPageFunction
    let paginatedItems = arrayPage.slice(start, end)

    showProfileNonAdmin(paginatedItems)
}



