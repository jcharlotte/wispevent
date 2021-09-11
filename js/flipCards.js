const current = document.getElementById("current-event");
const text = document.querySelectorAll("#location > p");
const ingame = document.getElementById("ingame");
const challenge = document.getElementById("challenge");
const meme = document.getElementById("meme");
const housing = document.getElementById("housing");
const screenshot = document.getElementById("screenshot");
const browser = document.getElementById("browser");
const content = document.getElementById("content");


const cardone = document.getElementById("one");
const frontone = document.getElementById("front-one");
const backone = document.getElementById("back-one");

cardone.addEventListener("click", function () {
    if (backone.classList.contains("hide")) {
        text.forEach(e => {
            e.classList.remove("orange");
        });
        backone.classList.remove("hide");
        frontone.classList.add("hide");
        const img = document.querySelector("#back-one > img");
        const picture = img.getAttribute("src");
        current.setAttribute("src", picture);
        cardone.classList.add("flipped");
        challenge.classList.add("orange");
    }
});

const cardtwo = document.getElementById("two");
const fronttwo = document.getElementById("front-two");
const backtwo = document.getElementById("back-two");

cardtwo.addEventListener("click", function () {
    if (backtwo.classList.contains("hide")) {
        text.forEach(e => {
            e.classList.remove("orange");
        });
        backtwo.classList.remove("hide");
        fronttwo.classList.add("hide");
        const img = document.querySelector("#back-two > img");
        const picture = img.getAttribute("src");
        current.setAttribute("src", picture);
        cardtwo.classList.add("flippedreverse");
        challenge.classList.add("orange");
    }
});

const cardthree = document.getElementById("three");
const frontthree = document.getElementById("front-three");
const backthree = document.getElementById("back-three");

cardthree.addEventListener("click", function () {
    if (backthree.classList.contains("hide")) {
        text.forEach(e => {
            e.classList.remove("orange");
        });
        backthree.classList.remove("hide");
        frontthree.classList.add("hide");
        const img = document.querySelector("#back-three > img");
        const picture = img.getAttribute("src");
        current.setAttribute("src", picture);
        cardthree.classList.add("flipped");
        screenshot.classList.add("orange");
        ingame.classList.add("orange");
    }
});

const cardfour = document.getElementById("four");
const frontfour = document.getElementById("front-four");
const backfour = document.getElementById("back-four");

cardfour.addEventListener("click", function () {
    if (backfour.classList.contains("hide")) {
        text.forEach(e => {
            e.classList.remove("orange");
        });
        backfour.classList.remove("hide");
        frontfour.classList.add("hide");
        const img = document.querySelector("#back-four > img");
        const picture = img.getAttribute("src");
        current.setAttribute("src", picture);
        cardfour.classList.add("flippedreverse");
        meme.classList.add("orange");
    }
});

const cardfive = document.getElementById("five");
const frontfive = document.getElementById("front-five");
const backfive = document.getElementById("back-five");

cardfive.addEventListener("click", function () {
    if (backfive.classList.contains("hide")) {
        text.forEach(e => {
            e.classList.remove("orange");
        });
        backfive.classList.remove("hide");
        frontfive.classList.add("hide");
        const img = document.querySelector("#back-five > img");
        const picture = img.getAttribute("src");
        current.setAttribute("src", picture);
        cardfive.classList.add("flippedreverse");
        challenge.classList.add("orange");
    }
});

const cardsix = document.getElementById("six");
const frontsix = document.getElementById("front-six");
const backsix = document.getElementById("back-six");

cardsix.addEventListener("click", function () {
    if (backsix.classList.contains("hide")) {
        text.forEach(e => {
            e.classList.remove("orange");
        });
        backsix.classList.remove("hide");
        frontsix.classList.add("hide");
        const img = document.querySelector("#back-six > img");
        const picture = img.getAttribute("src");
        current.setAttribute("src", picture);
        cardsix.classList.add("flipped");
        challenge.classList.add("orange");
    }
});

const cardseven = document.getElementById("seven");
const frontseven = document.getElementById("front-seven");
const backseven = document.getElementById("back-seven");

cardseven.addEventListener("click", function () {
    if (backseven.classList.contains("hide")) {
        text.forEach(e => {
            e.classList.remove("orange");
        });
        backseven.classList.remove("hide");
        frontseven.classList.add("hide");
        const img = document.querySelector("#back-seven > img");
        const picture = img.getAttribute("src");
        current.setAttribute("src", picture);
        cardseven.classList.add("flippedreverse");
        meme.classList.add("orange");
    }
});

const cardeight = document.getElementById("eight");
const fronteight = document.getElementById("front-eight");
const backeight = document.getElementById("back-eight");

cardeight.addEventListener("click", function () {
    if (backeight.classList.contains("hide")) {
        text.forEach(e => {
            e.classList.remove("orange");
        });
        backeight.classList.remove("hide");
        fronteight.classList.add("hide");
        const img = document.querySelector("#back-eight > img");
        const picture = img.getAttribute("src");
        current.setAttribute("src", picture);
        cardeight.classList.add("flipped");
        challenge.classList.add("orange");
    }
});

const cardnine = document.getElementById("nine");
const frontnine = document.getElementById("front-nine");
const backnine = document.getElementById("back-nine");

cardnine.addEventListener("click", function () {
    if (backnine.classList.contains("hide")) {
        text.forEach(e => {
            e.classList.remove("orange");
        });
        backnine.classList.remove("hide");
        frontnine.classList.add("hide");
        const img = document.querySelector("#back-nine > img");
        const picture = img.getAttribute("src");
        current.setAttribute("src", picture);
        cardnine.classList.add("flipped");
        housing.classList.add("orange");
    }
});

const cardten = document.getElementById("ten");
const frontten = document.getElementById("front-ten");
const backten = document.getElementById("back-ten");

cardten.addEventListener("click", function () {
    if (backten.classList.contains("hide")) {
        text.forEach(e => {
            e.classList.remove("orange");
        });
        backten.classList.remove("hide");
        frontten.classList.add("hide");
        const img = document.querySelector("#back-ten > img");
        const picture = img.getAttribute("src");
        current.setAttribute("src", picture);
        cardten.classList.add("flippedreverse");
        challenge.classList.add("orange");
    }
});

const cardeleven = document.getElementById("eleven");
const fronteleven = document.getElementById("front-eleven");
const backeleven = document.getElementById("back-eleven");

cardeleven.addEventListener("click", function () {
    if (backeleven.classList.contains("hide")) {
        text.forEach(e => {
            e.classList.remove("orange");
        });
        backeleven.classList.remove("hide");
        fronteleven.classList.add("hide");
        const img = document.querySelector("#back-eleven > img");
        const picture = img.getAttribute("src");
        current.setAttribute("src", picture);
        cardeleven.classList.add("flipped");
        challenge.classList.add("orange");
    }
});

const cardtwelve = document.getElementById("twelve");
const fronttwelve = document.getElementById("front-twelve");
const backtwelve = document.getElementById("back-twelve");

cardtwelve.addEventListener("click", function () {
    if (backtwelve.classList.contains("hide")) {
        text.forEach(e => {
            e.classList.remove("orange");
        });
        backtwelve.classList.remove("hide");
        fronttwelve.classList.add("hide");
        const img = document.querySelector("#back-twelve > img");
        const picture = img.getAttribute("src");
        current.setAttribute("src", picture);
        cardtwelve.classList.add("flippedreverse");
        ingame.classList.add("orange");
    }
});

const cardthirteen = document.getElementById("thirteen");
const frontthirteen = document.getElementById("front-thirteen");
const backthirteen = document.getElementById("back-thirteen");

cardthirteen.addEventListener("click", function () {
    if (backthirteen.classList.contains("hide")) {
        text.forEach(e => {
            e.classList.remove("orange");
        });
        backthirteen.classList.remove("hide");
        frontthirteen.classList.add("hide");
        const img = document.querySelector("#back-thirteen > img");
        const picture = img.getAttribute("src");
        current.setAttribute("src", picture);
        cardthirteen.classList.add("flippedreverse");
        screenshot.classList.add("orange");
        ingame.classList.add("orange");
    }
});

const cardfourteen = document.getElementById("fourteen");
const frontfourteen = document.getElementById("front-fourteen");
const backfourteen = document.getElementById("back-fourteen");

cardfourteen.addEventListener("click", function () {
    if (backfourteen.classList.contains("hide")) {
        text.forEach(e => {
            e.classList.remove("orange");
        });
        backfourteen.classList.remove("hide");
        frontfourteen.classList.add("hide");
        const img = document.querySelector("#back-fourteen > img");
        const picture = img.getAttribute("src");
        current.setAttribute("src", picture);
        cardfourteen.classList.add("flipped");
        content.classList.add("orange");
    }
});

const cardfifteen = document.getElementById("fifteen");
const frontfifteen = document.getElementById("front-fifteen");
const backfifteen = document.getElementById("back-fifteen");

cardfifteen.addEventListener("click", function () {
    if (backfifteen.classList.contains("hide")) {
        text.forEach(e => {
            e.classList.remove("orange");
        });
        backfifteen.classList.remove("hide");
        frontfifteen.classList.add("hide");
        const img = document.querySelector("#back-fifteen > img");
        const picture = img.getAttribute("src");
        current.setAttribute("src", picture);
        cardfifteen.classList.add("flippedreverse");
        screenshot.classList.add("orange");
    }
});

const cardsixteen = document.getElementById("sixteen");
const frontsixteen = document.getElementById("front-sixteen");
const backsixteen = document.getElementById("back-sixteen");

cardsixteen.addEventListener("click", function () {
    if (backsixteen.classList.contains("hide")) {
        text.forEach(e => {
            e.classList.remove("orange");
        });
        backsixteen.classList.remove("hide");
        frontsixteen.classList.add("hide");
        const img = document.querySelector("#back-sixteen > img");
        const picture = img.getAttribute("src");
        current.setAttribute("src", picture);
        cardsixteen.classList.add("flipped");
        challenge.classList.add("orange");
    }
});