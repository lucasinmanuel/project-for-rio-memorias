import content from "./content.js";

let filmRollWrapper = document.getElementById("film-roll-wrapper");
let bgMovie = document.getElementById("bg-movie");
let audiosWrapper = document.getElementById("audios-wrapper");
let modalWrapper = document.getElementById("modal-wrapper");

let movieBtn = document.getElementById("movie-btn");
let megaphoneBtn = document.getElementById("megaphone-btn");

let movieBtnBoolean = true;
let megaphoneBtnBoolean = true;

movieBtn.addEventListener("click",()=>{
    if(movieBtnBoolean){
        movieBtn.style.opacity = 0.6;
        bgMovie.innerHTML = `
            <video muted autoplay loop>
                <source src="./videos/old-cinema-filter.mp4" type="video/mp4">
                <source src="./videos/old-cinema-filter.webm" type="video/webm">
            </video>
        `
        audiosWrapper.innerHTML = `
            <audio loop>
                <source src="./audios/movie-projector-noise.mp3" type="audio/mp3">
                <source src="./audios/movie-projector-noise.ogg" type="audio/ogg">
            </audio>
        `

        audiosWrapper.children[0].volume =  megaphoneBtnBoolean ? 0.03 : 0;

        audiosWrapper.children[0].autoplay = true;
        audiosWrapper.children[0].load();

        megaphoneBtn.style.display = "block";
        movieBtnBoolean = false;

        configFilmRolls()
    }else{
        movieBtn.style.opacity = 1;
        filmRollWrapper.innerHTML = "";
        bgMovie.innerHTML = "";
        audiosWrapper.innerHTML = "";
        megaphoneBtn.style.display = "none";
        movieBtnBoolean = true;
    }
})

megaphoneBtn.addEventListener("click",()=>{
    if(megaphoneBtnBoolean){
        megaphoneBtn.style.opacity = 0.6;
        audiosWrapper.children[0].volume = 0;
        megaphoneBtnBoolean = false;
    }else{
        megaphoneBtn.style.opacity = 1;
        audiosWrapper.children[0].volume = 0.03;
        megaphoneBtnBoolean = true;
    }
})

window.addEventListener("resize",()=>{
    !movieBtnBoolean && configFilmRolls()
})

function configFilmRolls(){
    filmRollWrapper.innerHTML = "";
    let viewWidth = window.innerWidth;
    if(viewWidth > 1024){
        filmRollsGenerator(2,["","",""])
    }else if(viewWidth > 720){
        filmRollsGenerator(3,["",""])
    }else{
        filmRollsGenerator(6,[""])
    }
}

function filmRollsGenerator(nFilmRolls,nParts){
    let contentIndex = 0;
    let filmRollsHeight = 16
    for(let i = 0;i < nFilmRolls;i++){
        filmRollWrapper.innerHTML += `
            <div style="top:${filmRollsHeight}vh;transform: skew(5deg, 2deg);" class="film-roll">
                <div class="outline-1">
                    <div class="outline-2">
                        <div class="placeholder-part">
                            <div class="placeholder-item"></div>
                        </div>
                        ${
                           nParts.map(()=>{
                            contentIndex++
                            return(`
                                <div class="part">
                                    <div alt="${content[contentIndex - 1].title}" title="${content[contentIndex - 1].title}" style="background-image: url(${content[contentIndex - 1].pathImage})" class="item"></div>
                                </div>
                            `)
                           }).join("")
                        }
                        <div class="placeholder-part"">
                            <div class="placeholder-item"></div>
                        </div>
                    </div>
                </div>
            </div>
                        
        `
        filmRollsHeight += 134
    }
    let parts = document.getElementsByClassName("part");
    for(let i = 0;i < parts.length;i++){
        parts[i].addEventListener("click",()=>{
            modalGenerator(i)
        })
    }
}

function modalGenerator(partIndex){
    document.body.style.overflowY = "hidden";
    modalWrapper.style.display = "block";
    modalWrapper.innerHTML = `
        <div class="modal">
            <b id="close-modal">X</b>
            <div class="credits">
                <span>${content[partIndex].creditText}</span>
                <span>Foto tirada do site: <a target="_blank" href="${content[partIndex].creditLink}">${content[partIndex].creditLink}</a></span>
            </div>
            <div class="overview">
                <img src="${content[partIndex].pathImage}" />
                <div>
                    <h1>${content[partIndex].title}</h1>
                    <p>${content[partIndex].overview.split("::")[0]}</p>
                </div>
            </div>
            ${
                content[partIndex].overview.split("::").slice(1,).map((value)=>{
                    return(`<p>${value}</p>`)
                }).join("")
            }
        </div>
    `
    document.getElementById("close-modal").addEventListener("click",()=>{
        document.body.style.overflowY = "auto";
        modalWrapper.style.display = "none";
        modalWrapper.innerHTML = "";
    })
}

