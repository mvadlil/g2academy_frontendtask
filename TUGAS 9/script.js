
// *  data
// arrayKendaraanAktif
let kendaraanAktif = []

// arrayHistoryKendaraan
let historyKendaraan = []

let kode = 1

let kapasitasMotor = 10
let kapasitasMobil = 10

// * Check in Script

const showKendaraan = (kendaraan = kendaraanAktif) => {
    let thead = document.querySelector("table[type=dataKendaraan] tbody")
    let tableKendaraan = kendaraan.map((value, index) => {
        return `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>PARKIR${value.kode}</td>
                <td>${value.platNomor.toUpperCase()}</td>
                <td>${value.jenisKendaraan.toUpperCase()}</td>
                <td>${value.checkIn.toLocaleString()}</td>
                <td><button type="button" class="btn btn-warning" onclick="checkOut(${value.kode})">Check Out</button></td>
            </tr>
        `
    })
    thead.innerHTML = tableKendaraan.join("")
    totalKendaraan()
}


const checkIn = (array = kendaraanAktif, mobil = kapasitasMobil, motor = kapasitasMotor) => {
    event.preventDefault()
    const form = document.inputKendaraan

    if (getJenisKendaraan() == "mobil" && mobil > 0 && form.inputPlatNomor.value.length > 0) {
        array.push({
            kode: kode,
            platNomor: form.inputPlatNomor.value.toLowerCase(),
            jenisKendaraan: getJenisKendaraan(),
            checkIn: generateTime()
        })
        kode += 1
        kapasitasMobil -= 1
        form.reset()
        showKendaraan()
    } else if (getJenisKendaraan() == "motor" && motor > 0 && form.inputPlatNomor.value.length > 0) {
        array.push({
            kode: kode,
            platNomor: form.inputPlatNomor.value.toLowerCase(),
            jenisKendaraan: getJenisKendaraan(),
            checkIn: generateTime()
        })
        kode += 1
        kapasitasMotor -= 1
        form.reset()
        showKendaraan()
    } else {
        alert("Kapasitas penuh, tidak bisa menerima parkir! \natau Jenis/Plat nomor kendaraan belum diisi!")
    }

}

const generateTime = () => {
    let newTime = new Date()
    return newTime
}

const getJenisKendaraan = () => {
    let jenisKendaraan = document.getElementsByName('jenisKendaraan')
    for (let i = 0; i < jenisKendaraan.length; i++) {
        if (jenisKendaraan[i].checked) {
            return jenisKendaraan[i].value
        }
    }
}

const totalKendaraan = (mobil = kapasitasMobil, motor = kapasitasMotor) => {

    let mobilHTML = document.getElementById("kapasitasMobil")
    let motorHTML = document.getElementById("kapasitasMotor")

    let totalKendaraanHTML = document.getElementById("totalKendaraan")
    let totalMotorHTML = document.getElementById("totalMotor")
    let totalMobilHTML = document.getElementById("totalMobil")

    let totalMotor = 0
    let totalMobil = 0
    for(let i = 0; i < kendaraanAktif.length; i++) {
        if (kendaraanAktif[i].jenisKendaraan == "motor") {
            totalMotor += 1
        } else {
            totalMobil += 1
        }
    }

    totalKendaraanHTML.innerHTML = kendaraanAktif.length
    totalMotorHTML.innerHTML = totalMotor
    totalMobilHTML.innerHTML = totalMobil

    mobilHTML.innerHTML = mobil
    motorHTML.innerHTML = motor

}

// * Checkout Script

const deleteArray = (array, index) => {
    array.splice(index,1)
}

const checkOut = (kodeCheckout, array1 = kendaraanAktif, array2 = historyKendaraan) => {
    event.preventDefault()

    // find index di array1
    let index = array1.findIndex(x => x.kode == kodeCheckout)

    if(confirm("Are you sure to Check out this Order?")) {

        // durasi
        let checkOutTime = generateTime()
        let satuMenit = 1000*60
        let satuDetik = 1000
        let getDurasi = () => {
            let interval = checkOutTime.getTime() - array1[index].checkIn.getTime()
            let durasi = Math.ceil(interval / satuMenit)
            return durasi
        }

        // biaya
        let getBiaya = () => {
            let biaya = 0
            if (array1[index].jenisKendaraan == "motor") {
                if (getDurasi() < 2) {
                    biaya = 2000
                } else {
                    biaya = (1000 * (getDurasi() - 1)) + 2000
                }
            } else {
                if (getDurasi() < 2) {
                    biaya = 3000
                } else {
                    biaya = (1500 * (getDurasi() - 1)) + 3000
                }
            }
            return biaya
        }

        // push array
        array2.push({
            kode: array1[index].kode,
            platNomor: array1[index].platNomor,
            jenisKendaraan: array1[index].jenisKendaraan,
            checkIn: array1[index].checkIn,
            checkOut: checkOutTime,
            durasi: getDurasi(),
            biayaParkir: getBiaya()
        })
        
        // tambah kapasitas parkir
        if (array1[index].jenisKendaraan == "mobil") {
            kapasitasMobil += 1
        } else {
            kapasitasMotor += 1
        }

        deleteArray(array1, index)
        showKendaraan()
        showHistory()
    }
}

const showHistory = (history = historyKendaraan) => {
    let thead = document.querySelector("table[type=dataHistory] tbody")
    let tableHistory = history.map((value, index) => {
        return `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>PARKIR${value.kode}</td>
                <td>${value.platNomor.toUpperCase()}</td>
                <td>${value.jenisKendaraan.toUpperCase()}</td>
                <td>${value.checkIn.toLocaleString()}</td>
                <td>${value.checkOut.toLocaleString()}</td>
                <td>${value.durasi} Menit</td>
                <td>Rp. ${value.biayaParkir}</td>
            </tr>
        `
    })

    thead.innerHTML = tableHistory.join("")
    showTotalParkir()
}

const showTotalParkir = (array = historyKendaraan) => {
    let incomeParkir = document.getElementById("incomeParkir")
    let totalIncome = 0
    for ( let i = 0; i < array.length; i++ ) {
        totalIncome += array[i].biayaParkir
    }

    let tfoot = `
        <tr>
            <td colspan="7">Total Biaya Parkir</td>
            <td><h5>Rp. ${totalIncome}</h5></td>
        </tr>
    `

    incomeParkir.innerHTML = tfoot
}

// * init
const init = () => {
    showKendaraan()
}
init()

// * duplicate function
const duplicateCheckIn = (totalDuplicate) => {
    for (let i = 0; i < totalDuplicate; i++) {
        kendaraanAktif.push({
            kode: kode,
            platNomor: "BMOBIL" + i,
            jenisKendaraan: "mobil",
            checkIn: generateTime()
        })
        kode += 1
        kapasitasMobil -= 1

        kendaraanAktif.push({
            kode: kode,
            platNomor: "BMOTOR" + i,
            jenisKendaraan: "motor",
            checkIn: generateTime()
        })
        
        kode += 1
        kapasitasMotor -= 1
        showKendaraan()
    }
}

// * hidden page script

const daftarKendaraanNavbar = () => {
    let form = document.getElementById("all-form")
    let history = document.getElementById("history-parkir")
    let kendaraan = document.getElementById("daftar-kendaraan")

    form.hidden = true
    history.hidden = true
    kendaraan.hidden = false
}

const dashboard = () => {
    let form = document.getElementById("all-form")
    let history = document.getElementById("history-parkir")
    let kendaraan = document.getElementById("daftar-kendaraan")

    form.hidden = false
    history.hidden = false
    kendaraan.hidden = false
}

const history = () => {
    let form = document.getElementById("all-form")
    let history = document.getElementById("history-parkir")
    let kendaraan = document.getElementById("daftar-kendaraan")

    form.hidden = true
    history.hidden = false
    kendaraan.hidden = true
}

// * Utility Time
const displayTime = () => {
    let refresh=1000; // Refresh rate in milli seconds
    setTimeout('displayTimeHTML()',refresh)
}

const displayTimeHTML = () => {
    let liveTime = new Date()
    document.getElementById('time').innerHTML = liveTime;
    displayTime();
}

// * Login
function login() {
    event.preventDefault()

    let form = document.loginUser
    let inputEmail = form.email.value
    let inputPassword = form.password.value

    let bodyLogin = document.getElementById("bodyLogin")
    let navbar = document.getElementById("navbar")

    if (inputEmail == "admin" && inputPassword == "admin") {
        bodyLogin.hidden = true
        navbar.hidden = false
        dashboard()
    } else {
        alert("Username or password is wrong!")
    }
}

