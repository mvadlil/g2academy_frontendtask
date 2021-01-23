let container = document.getElementById("container")
let dot = document.querySelector('.dot')
let dotBlack = document.querySelector('.dot-black')

const makeADots = () => {
    let content = ""
        for (let i = 1; i <= 5; i++) {
            for (let j = 1; j <= 5; j++) {
                if (i == 1 || i == 3) {
                    content += dotBlack.outerHTML
                } else if (j == 1) {
                    content += dotBlack.outerHTML
                } else {
                    content += dot.outerHTML
                }
            }
            content += `<br>`
        }
        container.innerHTML = content
}

makeADots()