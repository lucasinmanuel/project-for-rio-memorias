import content from "./content.js";

let movieBtn = document.getElementById("movie-btn");
let bgMovie = document.getElementById("bg-movie");

movieBtn.addEventListener("click",()=>{
    bgMovie.innerHTML = `
        <video muted autoplay loop>
            <source src="./videos/old-cinema-filter.mp4" type="video/mp4">
        </video>
    `
    configFilmRolls()
})

window.addEventListener("resize",()=>{
    console.log(content[0].pathImage)
    configFilmRolls()
})

function configFilmRolls(){
let filmRollWrapper = document.getElementById("film-roll-wrapper");

    let viewWidth = window.innerWidth
    if(viewWidth> 1024){
            filmRollWrapper.innerHTML = `
                <div style="top:16vh;transform: skew(5deg, 2deg);" class="film-roll">
                    <div class="outline-1">
                        <div class="outline-2">
                            <div class="part">
                                <div class="placeholder-item"></div>
                            </div>
                            <div class="part">
                                <div style="background-image: url(${content[0].pathImage})" class="item"></div>
                            </div>
                            <div class="part">
                                <div style="background-image: url(${content[1].pathImage})" class="item"></div>
                            </div>
                            <div class="part">
                                <div style="background-image: url(${content[2].pathImage})" class="item"></div>
                            </div>
                            <div class="part">
                                <div class="placeholder-item"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="top:150vh;transform: skew(-5deg, -2deg);" class="film-roll">
                    <div class="outline-1">
                        <div class="outline-2">
                            <div class="part">
                                <div class="placeholder-item"></div>
                            </div>
                            <div class="part">
                                <div style="background-image: url(${content[3].pathImage})" class="item"></div>
                            </div>
                            <div class="part">
                                <div style="background-image: url(${content[4].pathImage})" class="item"></div>
                            </div>
                            <div class="part">
                                <div style="background-image: url(${content[5].pathImage})" class="item"></div>
                            </div>
                            <div class="part">
                                <div class="placeholder-item"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `
    }else if(viewWidth > 720){
        filmRollWrapper.innerHTML = `
            <div style="top:16vh;transform: skew(5deg, 2deg);" class="film-roll">
                <div class="outline-1">
                    <div class="outline-2">
                        <div class="part">
                            <div class="placeholder-item"></div>
                        </div>
                        <div class="part">
                            <div style="background-image: url(${content[0].pathImage})" class="item"></div>
                        </div>
                        <div class="part">
                            <div style="background-image: url(${content[1].pathImage})" class="item"></div>
                        </div>
                        <div class="part">
                            <div class="placeholder-item"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="top:150vh;transform: skew(-5deg, -2deg);" class="film-roll">
                <div class="outline-1">
                    <div class="outline-2">
                        <div class="part">
                            <div class="placeholder-item"></div>
                        </div>
                        <div class="part">
                            <div style="background-image: url(${content[2].pathImage})" class="item"></div>
                        </div>
                        <div class="part">
                            <div style="background-image: url(${content[3].pathImage})" class="item"></div>
                        </div>
                        <div class="part">
                            <div class="placeholder-item"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="top:284vh;transform:skew(5deg, 2deg);" class="film-roll">
                <div class="outline-1">
                    <div class="outline-2">
                        <div class="part">
                            <div class="placeholder-item"></div>
                        </div>
                        <div class="part">
                            <div style="background-image: url(${content[4].pathImage})" class="item"></div>
                        </div>
                        <div class="part">
                            <div style="background-image: url(${content[5].pathImage})" class="item"></div>
                        </div>
                        <div class="part">
                            <div class="placeholder-item"></div>
                        </div>
                    </div>
                </div>
            </div>
         `
    }else{
        filmRollWrapper.innerHTML = `
            <div style="top:16vh;transform: skew(5deg, 2deg);" class="film-roll">
                <div class="outline-1">
                    <div class="outline-2">
                        <div class="part">
                            <div class="placeholder-item"></div>
                        </div>
                        <div class="part">
                            <div style="background-image: url(${content[0].pathImage})" class="item"></div>
                        </div>
                        <div class="part">
                            <div class="placeholder-item"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="top:150vh;transform: skew(-5deg, -2deg);" class="film-roll">
                <div class="outline-1">
                    <div class="outline-2">
                        <div class="part">
                            <div class="placeholder-item"></div>
                        </div>
                        <div class="part">
                            <div style="background-image: url(${content[1].pathImage})" class="item"></div>
                        </div>
                        <div class="part">
                            <div class="placeholder-item"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="top:284vh;transform:skew(5deg, 2deg);" class="film-roll">
                <div class="outline-1">
                    <div class="outline-2">
                        <div class="part">
                            <div class="placeholder-item"></div>
                        </div>
                        <div class="part">
                            <div style="background-image: url(${content[2].pathImage})" class="item"></div>
                        </div>
                        <div class="part">
                            <div class="placeholder-item"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="top:418vh;transform:skew(-5deg, -2deg);" class="film-roll">
                <div class="outline-1">
                    <div class="outline-2">
                        <div class="part">
                            <div class="placeholder-item"></div>
                        </div>
                        <div class="part">
                            <div style="background-image: url(${content[3].pathImage})" class="item"></div>
                        </div>
                        <div class="part">
                            <div class="placeholder-item"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="top:552vh;transform:skew(5deg, 2deg);" class="film-roll">
                <div class="outline-1">
                    <div class="outline-2">
                        <div class="part">
                            <div class="placeholder-item"></div>
                        </div>
                        <div class="part">
                            <div style="background-image: url(${content[4].pathImage})" class="item"></div>
                        </div>
                        <div class="part">
                            <div class="placeholder-item"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="top:686vh;transform:skew(-5deg, -2deg);" class="film-roll">
                <div class="outline-1">
                    <div class="outline-2">
                        <div class="part">
                            <div class="placeholder-item"></div>
                        </div>
                        <div class="part">
                            <div style="background-image: url(${content[5].pathImage})" class="item"></div>
                        </div>
                        <div class="part">
                            <div class="placeholder-item"></div>
                        </div>
                    </div>
                </div>
            </div>
         `
    }
}
