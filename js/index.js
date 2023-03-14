import content from "./content.js";
let filmRollWrapper = document.getElementById("film-roll-wrapper")

let filmRolls = document.getElementsByClassName("film-roll");
console.log(content)
for(let i = 0;i < filmRolls.length;i++){
    let parts = document.getElementsByClassName("part")

    content
}

content.forEach((v,i)=>{
    filmRolls.item(i)
    filmRollWrapper.innerHTML += `
    <div class="film-roll">
        <div class="outline-1">
            <div class="outline-2">
                <div class="part">
                    <div class="item"></div>
                </div>
                <div class="part">
                    <img class="item" src="../images/rua-do-ouvidor.jpg" />
                </div>
                <div class="part">
                    <img class="item" src="../images/rua-do-ouvidor.jpg" />
                </div>
                <div class="part">
                    <img class="item" src="../images/rua-do-ouvidor.jpg" />
                </div>
                <div class="part">
                    <div class="item"></div>
                </div>
            </div>
        </div>
    </div>
`
})
