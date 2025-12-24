const cadeaux = {
  "Krater" : {
    cad_cur : "Krater_cadeau.png",
    couleur : "green",
    password : "Krater2024!",
    kdo: [
      "https://mundosteam.shop/wp-content/uploads/2024/02/Diseno-sin-titulo-53.png", 
      "https://assetsio.gnwcdn.com/Chai-in-Hi-Fi-Rush.png?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
    ],
    alt : ["Hifi Rush", ""],
    wordinmiddle : ""
  },
    "Ella" : {
    cad_cur : "Ella_cadeau.png",
    couleur : "orange",
    password : "Ella2024!",
    kdo: [
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2EDQyFzWp1XhmZ7tvSlDIW/2f35348a2691c1cc21cb869bb6a23380/r6-bundle-elite-bandit-ncsa-thumb-960x540_349434.jpg", 
      "https://www.goclecd.fr/wp-content/uploads/SteamGiftCard20EUR.jpg"
    ],
    alt : ["One elite skin", "20€ Steam gift card"],
    wordinmiddle : "from"
  },
    "Anouk" : {
    cad_cur : "Anouk_cadeau.png",
    couleur : "dark_red",
    password : "Anouk2024!",
    kdo: [
      "https://deadbydaylight.com/static/9c3d45b3980f8bb46db59e4dc2db9974/e1e52/dbd_chap16_silenthill_keyart_71022f961b.jpg", 
      "https://assets.deadbydaylight.com/dbd_chap2_halloween_keyart_c3c79d313b.jpg"
    ],
    alt : ["Silent Hill Chapter DBD", "Halloween Chapter DBD"],
    wordinmiddle : "+"
  },
    "Alex" : {
    cad_cur : "Alex_cadeau.png",
    couleur : "blue_sky",
    password : "Alex2024!",
    kdo: [
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7ICTRITCPph7Y66qVW0uTQ/07623eba75db6ff4f4754a81b31cf555/R6-operator-ela-elite.png", 
      "https://assets.nintendo.eu/image/upload/f_auto,c_limit,w_992,q_auto:low/MNS/NOE/70010000000963/SQ_NSwitch_Minecraft"
    ],
    alt : ["One elite skin", "Minecraft"],
    wordinmiddle : "OR"
  }
};

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
      <button>
        X
      </button>
    </div>
    <div id = "popup_content">
      <h1 id="text"> Merry christmas ${name}</h1>
      ${name}'s password :
      <input type = "password" placeholder="password" id = "password"/>
      <input type = "submit" value = "submit" id = "submit"/>
    </div>
  </div>`;
}

let present;

const createPopUp = function (event) {

  const targetElement = event.target; 

  if (targetElement.closest(".present")) {
    present = targetElement.closest(".present")
    if(document.querySelector("#popup_screen")){
      let popup_screen = document.querySelector("#popup_screen");
      popup_screen.innerHTML = customPopUp(present.dataset.value);
    } else {
      let popup_screen = document.createElement("div");
      popup_screen.id = "popup_screen";
      popup_screen.innerHTML = customPopUp(present.dataset.value);
      document.body.insertBefore(popup_screen, document.querySelector("#grille"));
    }   
  } else if(targetElement.closest(".present") == null && targetElement.closest("#popup") == null || targetElement.closest("button")){
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
      audio.play();
    }
    else if (musique.className == "bavard"){
      musique.className = "muet";
      son.innerHTML = "🔇";
      audio.muted = true;
      audio.pause();
    }
  }
}

document.querySelector("body").addEventListener("click", putSomeMusic, false);

const checkPassword = function(event){
  if (event.target.closest("#submit")){
    let password = document.querySelector("#password");
    let popup_screen = document.querySelector("#popup_screen");
    let name = present.dataset.value;
    if(password.value === cadeaux[name].password){
      popup_screen.innerHTML = `
      <div id = "popup2">
        <div id = "popup_header">
          <button>
            X
          </button>
        </div>
        <h2 id="text2"> Here you go, merry christmas ${name}!</h2>

        <div id = "cadeau_container">
          <div id="cadeau_un">
            <img src="${cadeaux[name].kdo[0]}" alt="${cadeaux[name].alt[0]}" id="cadeau_image"/>
            <p id = "lgd1">${cadeaux[name].alt[0]}</p>
          </div>
          <div id="word_in_middle">
            ${cadeaux[name].wordinmiddle}
          </div>
          <div id="cadeau_deux">
            <img src="${cadeaux[name].kdo[1]}" alt="${cadeaux[name].alt[1]}" id="cadeau_image"/>
            <p id = "lgd2">${cadeaux[name].alt[1]}</p>
          </div>
        </div>
      </div>`;
      if(window.screen.width < window.screen.height){
        document.querySelector("#cadeau_container").id = "cadeau_container_column";
      }
    } else {
      password.value = "";
      password.placeholder = "Wrong password, try again!";
    }
  }
};

document.querySelector("body").addEventListener("click", checkPassword, false);

function changesize(){
  if(window.screen.width < window.screen.height){
    if(document.querySelector("#cadeau_container") != null){
        document.querySelector("#cadeau_container").id = "cadeau_container_column";
    }
  }
  if(window.screen.width >= window.screen.height){
    if(document.querySelector("#cadeau_container_column") != null){
      document.querySelector("#cadeau_container_column").id = "cadeau_container";
    }
  }
}

window.onresize = changesize;