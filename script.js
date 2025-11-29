function wait(time) {
    return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
}

async function animation() {
  let time = Math.floor((Math.random()+1)*3)*500;
  const presents = document.getElementsByClassName("present");
  let present = presents[Math.floor(Math.random()*4)];
  await wait(time);
  present.classList.add("animation");
  await wait(800);
  present.classList.remove("animation");
}


setInterval(animation, 1000);

function customPopUp(name){
  return `<div id = "popup">
    ${name}'s password :
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
  } else if(targetElement.closest(".present") == null && targetElement.closest("#popup") == null){
    if(document.querySelector("#popup_screen")){
      let popup_screen = document.querySelector("#popup_screen");
      popup_screen.remove();
    }
  }
};

document.querySelector("body").addEventListener("click", createPopUp, false);
console.log("coucou");