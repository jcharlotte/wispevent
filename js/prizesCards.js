const namazu = document.getElementById("prizes");
const frontnamazu = document.getElementById("front-prizes");
const backnamazu = document.getElementById("back-prizes");

const angel = document.getElementById("autograph");
const frontangel = document.getElementById("front-autograph");
const backangel = document.getElementById("back-autograph");

const grid = document.getElementById("main");
const center = document.getElementById("center");
const korporkur = document.getElementById("current-event");
const placeholder = korporkur.getAttribute("src");
const bigautograph = document.getElementById("bigautograph");
const bigprizes = document.getElementById("bigprizes");
const main = document.getElementById("grid");
const alternative = document.getElementById("alternative");
var count = document.getElementById("turned").innerHTML;
const words = document.querySelectorAll("#location > p");
const brow = document.getElementById("browser");
const chall = document.getElementById("challenge");





grid.addEventListener("click", function () {
    if (count == 0) {
        angel.addEventListener("click", function () {
            if (backangel.classList.contains("hide")) {
                words.forEach(e => {
                    e.classList.remove("orange");
                });
                backangel.classList.remove("hide");
                frontangel.classList.add("hide");
                korporkur.setAttribute("src", placeholder);
                main.classList.add("hide");
                alternative.classList.remove("hide");
                angel.classList.add("flippedreverse");
                brow.classList.add("orange");
            }
        });

        namazu.addEventListener("click", function () {
            words.forEach(e => {
                e.classList.remove("orange");
            });
            if (frontangel.classList.contains("hide")) {
                if (backnamazu.classList.contains("hide")) {
                    backnamazu.classList.remove("hide");
                    frontnamazu.classList.add("hide");
                    bigautograph.classList.add("hide");
                    bigprizes.classList.remove("hide");
                    namazu.classList.add("flippedreverse");
                    chall.classList.add("orange");
                }
            }
        });
    }


});

