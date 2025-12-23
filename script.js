const cadeaux = [
  {
    name : "Krater",
    cad_cur : "Krater_cadeau.png",
    couleur : "green",
    password : "Krater2024!",
    kdo: [
      "https://mundosteam.shop/wp-content/uploads/2024/02/Diseno-sin-titulo-53.png", 
      "https://assetsio.gnwcdn.com/Chai-in-Hi-Fi-Rush.png?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
    ],
    wordinmiddle : ""
  },
    {
    name : "Ella",
    cad_cur : "Ella_cadeau.png",
    couleur : "brown",
    password : "Ella2024!",
    kdo: [
      "https://preview.redd.it/elite-skins-v0-acfqvgygv3wd1.jpeg?auto=webp&s=84463b97022ad0e57b3b7f8ed2a6ae606c72f586", 
      "https://m.media-amazon.com/images/I/71oXniR1hHL.jpg"
    ],
    wordinmiddle : "from"
  },
    {
    name : "Anouk",
    cad_cur : "Anouk_cadeau.png",
    couleur : "blue",
    password : "Anouk2024!",
    kdo: [
      "https://deadbydaylight.com/static/9c3d45b3980f8bb46db59e4dc2db9974/e1e52/dbd_chap16_silenthill_keyart_71022f961b.jpg", 
      "https://assets.deadbydaylight.com/dbd_chap2_halloween_keyart_c3c79d313b.jpg"
    ],
    wordinmiddle : "+"
  },
    {
    name : "Alex",
    cad_cur : "Alex_cadeau.png",
    couleur : "purple",
    password : "Alex2024!",
    kdo: [
      "https://preview.redd.it/elite-skins-v0-acfqvgygv3wd1.jpeg?auto=webp&s=84463b97022ad0e57b3b7f8ed2a6ae606c72f586", 
      "https://assets.nintendo.eu/image/upload/f_auto,c_limit,w_992,q_auto:low/MNS/NOE/70010000000963/SQ_NSwitch_Minecraft"
    ],
    wordinmiddle : "OR"
  },
];

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