var objectProfiles = [
    {
        "names":"Muhammad Fadlil",
        "birth":"1996-07-27",
        "address":"Jalan Sirsak",
        "website":"www.duatujuh.com"
    }
];

let nameDefault = document.getElementById("nameDefault");
let birthDefault = document.getElementById("birthDefault");
let addressDefault = document.getElementById("addressDefault");
let websiteDefault = document.getElementById("websiteDefault");

nameDefault.innerHTML = objectProfiles[0].names;
birthDefault.innerHTML = objectProfiles[0].birth;
addressDefault.innerHTML = objectProfiles[0].address;
websiteDefault.innerHTML = objectProfiles[0].website;



function clickIni(e) {

    e.preventDefault();

    let names = document.getElementById("names").value;
    let birth = document.getElementById("birth").value;
    let address = document.getElementById("address").value;
    let website = document.getElementById("website").value;

    let nameDefault = document.getElementById("nameDefault");
    let birthDefault = document.getElementById("birthDefault");
    let addressDefault = document.getElementById("addressDefault");
    let websiteDefault = document.getElementById("websiteDefault");

    nameDefault.innerHTML = names;
    birthDefault.innerHTML = birth;
    addressDefault.innerHTML = address;
    websiteDefault.innerHTML = website;

    document.getElementsByClassName

}

function setCircle(classId, dotId, e) {
    e.preventDefault();

    for ( let i = 1; i <= dotId; i++ ) {

        if ( i <= dotId ) {
            let setDotClass = document.getElementById("dot-" + classId + i);
            setDotClass.classList.remove("dot-grey");
            setDotClass.classList.add("dot-blue");
        }

    }

}


// save profile

function saveProfile() {
    let names = document.getElementById("names").value;
    let birth = document.getElementById("birth").value;
    let address = document.getElementById("address").value;
    let website = document.getElementById("website").value;


}