import content from "./content.js";

let filmRollWrapper = document.getElementById("film-roll-wrapper");
let bgMovie = document.getElementById("bg-movie");
let audiosWrapper = document.getElementById("audios-wrapper");

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
            </video>
        `
        audiosWrapper.innerHTML = `
            <audio loop>
                <source src="./audios/movie-projector-noise.mp3" type="audio/mp3">
            </audio>
        `

        audiosWrapper.children[0].volume =  megaphoneBtnBoolean ? 0.1 : 0;

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
        audiosWrapper.children[0].volume = 0.1;
        megaphoneBtnBoolean = true;
    }
})

window.addEventListener("resize",()=>{
    console.log(content[0].pathImage)
    configFilmRolls()
})

function configFilmRolls(){
    let viewWidth = window.innerWidth
    if(viewWidth > 1024){
        filmRollsGenerator(2,["","",""])
    }else if(viewWidth > 720){
        filmRollsGenerator(3,["",""])
    }else{
        filmRollsGenerator(6,[""])
    }
}

function filmRollsGenerator(nFilmRolls,nParts){
    let globalIndex = 0;
    let filmRollsHeight = 16
    for(let i = 0;i < nFilmRolls;i++){
        filmRollWrapper.innerHTML += `
            <div style="top:${filmRollsHeight}vh;transform: skew(5deg, 2deg);" class="film-roll">
                <div class="outline-1">
                    <div class="outline-2">
                        <div class="part">
                            <div class="placeholder-item"></div>
                        </div>
                        ${
                           nParts.map(()=>{
                            globalIndex++
                            return(`
                                <div class="part">
                                    <div style="background-image: url(${content[globalIndex - 1].pathImage})" class="item"></div>
                                </div>
                            `)
                           }) 
                        }
                        <div class="part">
                            <div class="placeholder-item"></div>
                        </div>
                    </div>
                </div>
            </div>
                        
        `
        filmRollsHeight += 134
    }
}

