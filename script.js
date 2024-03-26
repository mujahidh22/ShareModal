const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");

//Modal open function
const openModal=()=>{
  console.log("Modal id Open");
  modal.classList.add("active");           //modal k andr "active" class ko add kr diya jo scale ko 1 kr deta h
  overlay.classList.add("overlayactive");  //modal k andr "overlayactive" class ko add kr diya jo scale ko 1 kr deta h
};

//Modal close function
const closeModal=()=>{
  modal.classList.remove("active");          //modal k andr jo "active" class data tha usse remove kr diya
  overlay.classList.remove("overlayactive"); //modal k andr jo "overlayactive" class data tha usse remove kr diya
};