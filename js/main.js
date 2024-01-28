// variables to set content in html 

let homeCard=document.getElementById("homeCard")
let cateCard=document.getElementById("cate-card")
let areaContent=document.getElementById("areaContent")
let ingredientContent=document.getElementById("ingredientContent")

let categoriesTypesContent=document.getElementById("categories-types-content")
let instructionDetails=document.getElementById("instruction-details")


// variables to remove display-none
let areaTypes=document.getElementById("areaTypes")
let areaTypeCard=document.getElementById("area-type-card")
let ingrTypes=document.getElementById("ingrTypes")
let ingrTypeCard=document.getElementById("ingre-type-Card")

let cateTypes=document.getElementById("categoriesTypes")
let cateTypeCard=document.getElementById("categories-type-card")



// loading screen //

$(document).ready(function(){

  $(".loading-screen").fadeOut(1000)
  $("body").css("overflow","auto")
  
  })




// nav bar //

  // for close and open side navbar
  $(".sideNav").css("left", `-${$(".sideNav").outerWidth()}px`);
  $(".openIcon").click(function () {
    if ($(".sideNav").css("left") === "0px") {
      $(".sideNav").css("left", `-${$(".sideNav").outerWidth()}px`);
    } else {
      $(".sideNav").css("left", 0);
    }
  });








/////////////////////////////////////////////////////////// fetch API//////////////////////////////// /////

// home Api//
let homeData ;
async function getHomeData()
{
    let homeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    let homeApi= await homeResponse.json()
    let homeData=homeApi.meals

    displayHomeData(homeData)

    console.log(homeData)
   
}


// categories Api //
let cateData ;
async function getCateData()
{
    let cateResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let cateApi= await cateResponse.json()
    let cateData=cateApi.categories

    displayCateData(cateData)

    console.log(cateData)
   
}

// area Api//
let areaData ;
async function getAreaData()
{

    let areaResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let areaApi= await areaResponse.json()
    let areaData=areaApi.meals

    displayAreaData(areaData)



   
}


// ingre Api//
let ingreData ;
async function getIngreData()
{
    let ingreResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let ingreApi= await ingreResponse.json()
    let ingreData=ingreApi.meals

    displayIngreData(ingreData)

    console.log(ingreData)
   
}










////////////// first open or refrech the website ///////////////////////////
let home=document.getElementById("home")
let instruction=document.getElementById("instruction")
let search=document.getElementById("search")
let categories=document.getElementById("categories")
let area=document.getElementById("area")
let ingredients=document.getElementById("ingredients")
let contactUs=document.getElementById("contactUs")



function refresh()
{
  home.classList.remove("d-none");
  contactUs.classList.add("d-none");
  

  
  
  getHomeData()
}
refresh()

// ////////////////// on click  ///////// nav bar////////////

document.getElementById("areaLink").addEventListener("click" , function(){
  getAreaData()
  area.classList.remove("d-none");

  home.classList.add("d-none");
  categories.classList.add("d-none");
  ingredients.classList.add("d-none");
  search.classList.add("d-none");
  instruction.classList.add("d-none");
  contactUs.classList.add("d-none");



})

document.getElementById("categoriesLink").addEventListener("click" , function(){
  getCateData()
  categories.classList.remove("d-none");
  
  home.classList.add("d-none");
  ingredients.classList.add("d-none");
  search.classList.add("d-none");
  instruction.classList.add("d-none");
  contactUs.classList.add("d-none");
  area.classList.add("d-none");
  


  


})

document.getElementById("ingredientsLink").addEventListener("click" , function(){
  getIngreData()
  ingredients.classList.remove("d-none");
  
  home.classList.add("d-none");
  categories.classList.add("d-none");
  area.classList.add("d-none");
  search.classList.add("d-none");
  instruction.classList.add("d-none");
  contactUs.classList.add("d-none");
  
  

})





document.getElementById("contactLink").addEventListener("click" , function(){


  contactUs.classList.remove("d-none");

  area.classList.add("d-none");
  home.classList.add("d-none");
  categories.classList.add("d-none");
  ingredients.classList.add("d-none");
  search.classList.add("d-none");
  instruction.classList.add("d-none");
  



})

document.getElementById("searchLink").addEventListener("click" , function(){

  search.classList.remove("d-none");

  area.classList.add("d-none");
  home.classList.add("d-none");
  categories.classList.add("d-none");
  ingredients.classList.add("d-none");
  contactUs.classList.add("d-none");
  instruction.classList.add("d-none");
  
})


































// /////////////////////////////////////////////// displays /////////////////////////////////////////////////////////////////


/////////////////////////////// home Display /////////////////////////////////////////////

function displayHomeData(arr) {

    let cartoona = "";

    for (let i =0; i < arr.length; i++) {
        cartoona += `

        <div class="home-content col-md-3 " id="homecontent" onclick=" getInstructions('${arr[i].idMeal}')">

        <div class="home-card position-relative ">
          <img class="layout-img img-fluid rounded-4" src="${arr[i].strMealThumb}" alt="home-img" id="homeImg">
          <div class="layout-name position-absolute rounded-4 d-flex align-items-center justify-content-center" >
            <h3 class="text-black" id="home-class">${arr[i].strMeal}</h3>
          </div>
        </div>
      </div>

        `
    }

    homeCard.innerHTML = cartoona
}







//////////////////////////////////////////////// categories Display  ///////////////////////////////

function displayCateData(arr) {

  let cartoona = "";

  for (let i =0; i < arr.length; i++) {
      cartoona += `
      <div class="categories-content col-md-3 "onclick=" getCateType('${arr[i].strCategory}')">
  
      <div class="categories-card position-relative">
        <img class="layout-img img-fluid rounded-4" src="${arr[i].strCategoryThumb}" alt="categories-img" id="categoriesImg">
        <div
          class="layout-name position-absolute rounded-4 d-flex text-center flex-column">
          <h3 class="text-black" id="categoriesClass">${arr[i].strCategory}</h3>
          <p class="categoriesText text-center" id="categoriesText">${arr[i].strCategoryDescription}</p>
        </div>
      </div>

    </div>
      `
  }

  cateCard.innerHTML = cartoona
}
async function getCateType(mealClass) {

  // Clear the content before loading new content

  cateCard.innerHTML = "";

  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealClass}`);
  response = await response.json();
  let responseData = response.meals;
  console.log(responseData);
  displayCateType(responseData)
  

  // step to show the section 
  cateTypes.classList.remove("d-none");
  


}


function displayCateType(arr)
{
  let cartoona = "";

  for (let i = 0; i < arr.length; i++) {
    cartoona += `

    <div class="area-types-content col-md-3 " onclick=" getInstructions('${arr[i].idMeal}')">
  
    <div class="area-types-card position-relative   ">
      <img class="layout-img img-fluid rounded-4" src="${arr[i].strMealThumb}"
        id="areaTypesImg">
      <div
        class="layout-name position-absolute rounded-4 d-flex align-items-center justify-content-center flex-column  ">
        <h3 class="text-black" id="areaTypesClass">${arr[i].strMeal}</h3>

      </div>
    </div>


  </div>
    `;
  }

  cateCard.innerHTML = cartoona;


}




























///////////////////////////////////////// Area Display ///////////////////////////////////////////

function displayAreaData(arr) {
  let cartoona = "";

  for (let i = 0; i < arr.length; i++) {
    cartoona += `
      <div class="col-md-3 d-flex flex-column justify-content-center align-items-center" onclick="getAreaType('${arr[i].strArea}')">
        <i class="area-icon fa-solid fa-house-laptop fs-1" id="areaIcon"></i>
        <p class="country-name mt-1 fs-2" id="countryName">${arr[i].strArea}</p>
      </div>
    `;
  }

  areaContent.innerHTML = cartoona;
}
////// Area Type ///////
async function getAreaType(area) {

  // Clear the content before loading new content

  areaContent.innerHTML = "";
  homeCard.innerHTML="";

  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
  response = await response.json();
  let responseData = response.meals;
  console.log(responseData);
  displayAreaType(responseData);

  // step to show the section 
  areaTypes.classList.remove("d-none");
  areaTypes.classList.add("d-block");


}
function displayAreaType(arr)
{
  let cartoona = "";

  for (let i = 0; i < arr.length; i++) {
    cartoona += `

    <div class="area-types-content col-md-3 " onclick=" getInstructions('${arr[i].idMeal}')">
  
    <div class="area-types-card position-relative   ">
      <img class="layout-img img-fluid rounded-4" src="${arr[i].strMealThumb}"
        id="areaTypesImg">
      <div
        class="layout-name position-absolute rounded-4 d-flex align-items-center justify-content-center flex-column  ">
        <h3 class="text-black" id="areaTypesClass">${arr[i].strMeal}</h3>

      </div>
    </div>


  </div>
    `;
  }

  areaTypeCard.innerHTML = cartoona;


}







////// instruction by Id ///////
async function getInstructions(mealID) {
  // Clear the content before loading new content
  
  areaTypeCard.innerHTML="" ;
  homeCard.innerHTML="";
  ingrTypeCard.innerHTML="";
  cateCard.innerHTML="";

  
  
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
  response = await response.json();
  let responseData = response.meals;
  console.log(responseData);
  displayInstructions(responseData)

  // step to show the section 
  instruction.classList.remove("d-none");
  instruction.classList.add("d-block");

  
}

function displayInstructions(arr)
{
  let cartoona = "";

  for (let i = 0; i < arr.length; i++) {
    cartoona += `

    <div class="col-md-4">
    <img class="img-fluid" src="${arr[i].strMealThumb}" alt="home-img-Instructions" id="instrImg">
    <p class="fs-3 fw-bold text-white" id="instrMainName">${arr[i].strMeal}</p>
  </div>

  <div class="col-md-8 Instructions-content">
    <h2 class="fw-bold text-white" id="instration-logo">Instructions</h2>
    <p class="text-white Instructions-content" id="instrContent">${arr[i].strInstructions}</p>

    <p class="area fs-2 text-white fw-bold" id="area">Area : ${arr[i].strArea}</p>

    <p class=" category-Side fs-2 text-white fw-bold" id="categorySide">Category :${arr[i].strCategory}</p>

    <div class=" recipes fs-2 text-white fw-bold d-flex gap-3" id="recipes">

      <p>Recipes :</p>

      <div class="d-flex align-items-center justify-content-center rounded-3 px-3">${arr[i].strMeasure1}</div>
      <div class="d-flex align-items-center justify-content-center rounded-3 px-3">${arr[i].strMeasure2}</div>
      <div class="d-flex align-items-center justify-content-center rounded-3 px-3">${arr[i].strMeasure3}</div>

    </div>

    <div class="tags fs-2 text-white fw-bold d-flex flex-column " id="tags">
      <p>Tags :</p>

      <div class="tag-content d-flex gap-5" id="tagContent">
        <div class="tagName  rounded-4 px-3 d-flex align-items-center justify-content-center">${arr[i].strIngredient1}</div>

        <div class="py-4 gap-4 d-flex">
          <a class="btn btn-danger Source-btn" id="btnSource" href="${arr[i].strMealThumb}">Source </a>
          <a class="btn btn-success Youtbe-btn" id="btnYoutube" href="${arr[i].strYoutube}">Youtbe </a>
        </div>

      </div>





    </div>

  </div>
    `;
  }

  instructionDetails.innerHTML = cartoona;


}






///////////////////////////////////////////////// ingredients Display /////////////////////////////////////

function displayIngreData(arr) {

  let cartoona = "";

  for (let i =0; i < arr.length; i++) {
      cartoona += `

      <div class="col-md-3 d-flex flex-column text-center" onclick=" getIngreType('${arr[i].strIngredient}')">
      <i class=" ingr-icon fa-solid fa-drumstick-bite fs-1 text-white " id="ingrIcon"></i>
      <p class="text-center text-white fs-2">${arr[i].strIngredient}</p>
    </div>

      `
  }

  ingredientContent.innerHTML = cartoona
}

async function getIngreType(mealClass) {

  // Clear the content before loading new content

  ingredientContent.innerHTML = "";

  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealClass}`);
  response = await response.json();
  let responseData = response.meals;
  console.log(responseData);
  displayIngreType(responseData);

  // step to show the section 
  ingrTypes.classList.remove("d-none");
  


}


function displayIngreType(arr)
{
  let cartoona = "";

  for (let i = 0; i < arr.length; i++) {
    cartoona += `

    <div class="area-types-content col-md-3 " onclick=" getInstructions('${arr[i].idMeal}')">
  
    <div class="area-types-card position-relative   ">
      <img class="layout-img img-fluid rounded-4" src="${arr[i].strMealThumb}"
        id="areaTypesImg">
      <div
        class="layout-name position-absolute rounded-4 d-flex align-items-center justify-content-center flex-column  ">
        <h3 class="text-black" id="areaTypesClass">${arr[i].strMeal}</h3>

      </div>
    </div>


  </div>
    `;
  }

  ingrTypeCard.innerHTML = cartoona;


}













///////////////////////////////////////////////// Contact us /////////////////////////////////////


  // Attach event listeners to input elements
  document.getElementById('name').addEventListener('input', validateName);
  document.getElementById('phone').addEventListener('input', validatePhone);
  document.getElementById('password').addEventListener('input', validatePassword);
  document.getElementById('email').addEventListener('input', validateEmail);
  document.getElementById('age').addEventListener('input', validateAge);
  document.getElementById('re-password').addEventListener('input', validateRePassword);

  function validateName() {
    var name = document.getElementById('name').value;
    var errorSpan = document.getElementById('nameError');
    errorSpan.innerText = name === "" ? 'Name is required' : '';
  }

  function validatePhone() {
    var phone = document.getElementById('phone').value;
    var errorSpan = document.getElementById('phoneError');
    errorSpan.innerText = phone === "" || !/^\d{10}$/.test(phone) ? 'Please enter a valid phone number' : '';
  }

  function validatePassword() {
    var password = document.getElementById('password').value;
    var errorSpan = document.getElementById('passwordError');
    errorSpan.innerText = password === "" ? 'Password is required' : '';
  }

  function validateEmail() {
    var email = document.getElementById('email').value;
    var errorSpan = document.getElementById('emailError');
    errorSpan.innerText = email === "" || !/\S+@\S+\.\S+/.test(email) ? 'Please enter a valid email address' : '';
  }

  function validateAge() {
    var age = document.getElementById('age').value;
    var errorSpan = document.getElementById('ageError');
    errorSpan.innerText = age === "" || isNaN(age) ? 'Please enter a valid age' : '';
  }

  function validateRePassword() {
    var password = document.getElementById('password').value;
    var repassword = document.getElementById('re-password').value;
    var errorSpan = document.getElementById('repasswordError');
    errorSpan.innerText = repassword === "" || repassword !== password ? 'Passwords do not match' : '';
  }

  ////////// icon   ////////////
  $(document).ready(function () {
    $("#icon").on("click", function () {
        $(this).toggleClass("active");
    });
});



///////////////////////////////////////////////// Search  /////////////////////////////////////

