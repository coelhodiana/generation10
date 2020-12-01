let btn = document.querySelector('#genbtn');
let urls = [
    "https://coelhodiana.github.io/fundamentos-web/",
    "https://vanmtv.github.io/poe/",
    "https://victormirandas.github.io/RotMG-News/",
    "https://rafyy2102.github.io/Landing-OnePiece/",
    "https://niiicks.github.io/hue-destinos/",
    "https://israel0101.github.io/Web-Bootstrap/landingPage",
    "https://laurabrosens.github.io/Bootstrap1-Sense8/"
]

function gobtn() {
    btn.href = urls[Math.floor(Math.random() * (urls.length))]
}
