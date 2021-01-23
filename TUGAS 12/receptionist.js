
// * Data

// user login
let userLogin = [
    {
        "username":"user",
        "password":"user",
        "user": true,
        "active": false
    },
    {
        "username":"fadlil",
        "password":"fadlil",
        "user": false,
        "active": false
    }
]

let indexLogin = 0;

// data visitor list
let visitorList = []

// data document list
let documentList = []


// * VISITOR

const showVisitor = (visitor = visitorList) => {
    let thead = document.querySelector("table[type=dataVisitor] tbody")
    let tableVisitor = visitor.map((value, index) => {
        if (value.status) {
            return `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>VIS${value.code}</td>
                <td>${value.visitorName}</td>
                <td>${value.purpose}</td>
                <td>${value.companyPic}</td>
                <td>${generateTime(value.checkin)}</td>
                <td>${generateTime(value.checkout)}</td>
                <td><button type="button" class="btn btn-warning" onclick="visitorOut(${value.code})" disabled>Check Out</button></td>
            </tr>
        `
        } else {
            return `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>VIS${value.code}</td>
                <td>${value.visitorName}</td>
                <td>${value.purpose}</td>
                <td>${value.companyPic}</td>
                <td>${generateTime(value.checkin)}</td>
                <td>${value.checkout}</td>
                <td><button type="button" class="btn btn-warning" onclick="visitorOut(${value.code})">Check Out</button></td>
            </tr>
        `
        }
    })
    thead.innerHTML = tableVisitor.join("")
}

const visitorIn = (array = visitorList) => {
    event.preventDefault()
    let form = document.inputVisitor

    array.push({
        code: form.visitorCode.value.toLowerCase(),
        visitorName: form.visitorName.value.toLowerCase(),
        purpose: form.visitorPurpose.value.toLowerCase(),
        companyPic: form.visitorPIC.value.toLowerCase(),
        checkin: new Date(),
        checkout: "",
        status: false
    })
    showVisitor()
    form.reset()
}

const visitorOut = (InputCode, array = visitorList) => {
    let index = array.findIndex(x => x.code == InputCode)

    // update date
    array[index] = {
        ...array[index],
        checkout: new Date(),
        status: true
    }
    showVisitor()
}

const dataVisitorExport = () => {
       let htmltable= document.getElementById("dataVisitor")
       let html = htmltable.outerHTML
       window.open('data:application/vnd.ms-excel,' + encodeURIComponent(html))
}


// * DOCUMENT

const showDocument = (documentArray = documentList) => {
    let thead = document.querySelector("table[type=dataTableDocument] tbody")
    // let thead = document.getElementById("bodyDocument")
    let tableDocument = documentArray.map((value, index) => {
        return `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${value.from}</td>
                <td>${value.to}</td>
                <td>${value.documentType}</td>
                <td>${generateTime(value.receivedDate)}</td>
            </tr>
        `
    })
    thead.innerHTML = tableDocument.join("")
}

const documentIn = (array = documentList) => {
    event.preventDefault()
    let form = document.inputDocument

    array.push({
        from: form.documentFrom.value.toLowerCase(),
        to: form.documentTo.value.toLowerCase(),
        documentType: form.documentType.value.toLowerCase(),
        receivedDate: new Date()
    })
    showDocument()
    form.reset()
}

const dataDocumentExport = () => {
       let htmltable= document.getElementById("dataTableDocument")
       let html = htmltable.outerHTML
       window.open('data:application/vnd.ms-excel,' + encodeURIComponent(html))
}


// * UTILITY

const generateTime = (theTime) => {
    let date = theTime.getFullYear() + '-' + ( theTime.getMonth() + 1) +'-'+ theTime.getDate()
    let time = theTime.getHours() + ":" + theTime.getMinutes() + ":" + theTime.getSeconds()
    let dateTime = date + ' , ' + time
    return dateTime
}


// * LOGIN

let navbar = document.getElementById("navbar")
let bodyLogin = document.getElementById("bodyLogin")
let bodyRegister = document.getElementById("bodyRegister")
let formVisitor = document.getElementById("formVisitor")
let visitorListHTML = document.getElementById("visitorList")
let formDocument = document.getElementById("formDocument")
let documentListHTML = document.getElementById("documentList")

const loginPage = () => {
    navbar.hidden = true
    bodyLogin.hidden = false
    bodyRegister.hidden = true
    formVisitor.hidden = true
    visitorListHTML.hidden = true
    formDocument.hidden = true
    documentListHTML.hidden = true
}

const userLoginPage = () => {
    navbar.hidden = false
    bodyLogin.hidden = true
    bodyRegister.hidden = false
    formVisitor.hidden = true
    visitorListHTML.hidden = false
    formDocument.hidden = true
    documentListHTML.hidden = false
}

const receptionistLoginPage = () => {
    navbar.hidden = false
    bodyLogin.hidden = true
    bodyRegister.hidden = true
    formVisitor.hidden = false
    visitorListHTML.hidden = false
    formDocument.hidden = false
    documentListHTML.hidden = false
}


const login = (array = userLogin) => {

    event.preventDefault()

    let username = document.getElementById("usernameLogin").value
    let password = document.getElementById("passwordLogin").value

    let indexUsername = array.findIndex(x => x.username == username) 
    let indexPassword = array.findIndex(x => x.password == password)

    let user = array[indexUsername].user

    if (indexUsername == indexPassword && user == true) {
        indexLogin = indexUsername
        array[indexUsername].active = true
        userLoginPage()
    } else if (indexUsername == indexPassword && user == false) {
        indexLogin = indexUsername
        array[indexUsername].active = true
        receptionistLoginPage()
    }

}

const register = (array = userLogin) => {

    event.preventDefault()

    let form = document.getElementById("register")

    let username = document.getElementById("usernameRegis").value
    let password = document.getElementById("passwordRegis").value

    array.push({
        username: username,
        password: password,
        user: false,
        active: false
    })
    alert("Register Success!")
    form.reset()

}


const logout = () => {
    loginPage()
    let form = document.getElementById("loginUser")
    form.reset()
}



// * init
const init = () => {
    loginPage()
}
init()


