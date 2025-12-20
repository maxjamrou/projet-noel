function wait(time) {
    return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
}

async function animation() {
  let time = Math.floor((Math.random()+1)*3)*500;
  const presents = document.getElementsByClassName("closed");
  let present = presents[Math.floor(Math.random()*4)];
  await wait(time);
  present.classList.add("animation");
  await wait(800);
  present.classList.remove("animation");
}


setInterval(animation, 1000);

function customPopUp(name){
  return `
  <div id = "popup">
    <div id = "popup_header">
      <button id = "return">
        X
      </button>
    </div>
    <div id = "popup_content">
      <h1> Merry christmas ${name}</h1>
      ${name}'s password :
      <input type = "password" placeholder="password"/>
      <input type = "submit" value = "submit"/>
    </div>
  </div>`;
}

const createPopUp = function (event) {

  const targetElement = event.target; 

  if (targetElement.closest(".present")) {
    let present = targetElement.closest(".present")
    if(document.querySelector("#popup_screen")){
      let popup_screen = document.querySelector("#popup_screen");
      popup_screen.innerHTML = customPopUp(present.dataset.value);
    } else {
      let popup_screen = document.createElement("div");
      popup_screen.id = "popup_screen";
      popup_screen.innerHTML = customPopUp(present.dataset.value);
      document.body.insertBefore(popup_screen, document.querySelector("#grille"));
    }   
  } else if(targetElement.closest(".present") == null && targetElement.closest("#popup") == null || targetElement.closest("#return")){
    if(document.querySelector("#popup_screen")){
      let popup_screen = document.querySelector("#popup_screen");
      popup_screen.remove();
    }
  }
};

document.querySelector("body").addEventListener("click", createPopUp, false);

const putSomeMusic = function(event){
  if (event.target.closest("#musique")){
    let musique = event.target.closest("#musique");
    let son = document.querySelector("#musique > div");
    let audio = document.querySelector("audio");
    if (musique.className == "muet"){
      musique.className = "bavard";
      son.innerHTML = "🔉";
      audio.muted = false;
    }
    else if (musique.className == "bavard"){
      musique.className = "muet";
      son.innerHTML = "🔇";
      audio.muted = true;
    }
  }
}

document.querySelector("body").addEventListener("click", putSomeMusic, false);
