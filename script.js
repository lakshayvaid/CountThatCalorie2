const fooditemname = document.getElementById("fooditemsname");
const caloriesearch = document.getElementById("caloriesearchbtn");

const apikey = "2hAgC0slwAeA3SxE4hrKBg==o7Tg0VaVKysrzG5x";

const options = {
  method: "GET",
  headers: { "X-Api-Key": apikey },
};

let startcountbtn = document.getElementById("scbtn");
let homepage = document.getElementById("homepage");
let result = document.getElementById("result");
let searchctn = document.getElementById("searchctn");
// let caloriesearchbtn=document.getElementById('caloriesearchbtn');
let gosearchagain = document.getElementById("gosearchagain");

//---------------------------Hiding home and result page---------------------------

function hidehomeandresult() {
  homepage.style.display = "none";
  result.style.display = "none";
  searchctn.style.display = "flex";
}

startcountbtn.addEventListener("click", hidehomeandresult);

const fatval = document.getElementById("fatval");
const proteinval = document.getElementById("proteinval");
const calorieval = document.getElementById("calorieval");
const inputbyuser = document.getElementById("search");
let nutritionval = document.getElementById("nutritionval");

//  The main get response function
async function getresponse() {
  // console.log(fooditementered);
  // console.log(fooditemname);

  const fooditementered = inputbyuser.value;
  console.log(fooditementered);
  const apiurl =
    "https://api.api-ninjas.com/v1/nutrition?query=" + fooditementered;

  // Go to result page

  // var sectionTopOffset = result.offsetTop;
  // window.scrollTo({
  //   top: sectionTopOffset,
  //   behavior: "smooth"
  // });

  try {
    const response = await fetch(apiurl, options);
    const data = await response.json();
    console.log(data);

    console.log(" Calories are : " + data[0].calories);
    console.log(" Fat is : " + data[0].fat_total_g + "g");
    console.log(" Protein is : " + data[0].protein_g + "g");
    console.log(" Carbs are : " + data[0].carbohydrates_total_g + "g");

    // fatval.innerHTML=data[0].fat_total_g;
    // calorieval.innerHTML=data[0].calories;
    // proteinval.innerHTML=data[0].protein_g;

    if (fooditementered === "") {
      fooditemname.innerHTML = " NO Results Found !!!!";
      homepage.style.display = "none";
      result.style.display = "flex";
      searchctn.style.display = "none";
      fatval.innerHTML = "0";
      calorieval.innerHTML = "0";
      proteinval.innerHTML = "0";
      nutritionval.style.display = "none";
    } else {
      homepage.style.display = "none";
      result.style.display = "flex";
      searchctn.style.display = "none";
      fooditemname.innerHTML = fooditementered;
      fatval.innerHTML = data[0].fat_total_g;
      calorieval.innerHTML = data[0].calories;
      proteinval.innerHTML = data[0].protein_g;
    }
  } catch (error) {
    fooditemname.innerHTML = " NO Results Found !!!!";
    homepage.style.display = "none";
    result.style.display = "flex";
    searchctn.style.display = "none";
  }

  // window.location.replace("resultpage.html")
}

// Here we are calling the function getresponse
caloriesearch.addEventListener("click", getresponse);

//---------------------------------------------Hiding home and result page------------------------------------------------

let placeholdertext = inputbyuser.ariaPlaceholder;
function hideresultandsearch() {
  fatval.innerHTML = "0";
  calorieval.innerHTML = "0";
  proteinval.innerHTML = "0";
  inputbyuser.value = "";
  inputbyuser.placeholdertext = placeholdertext;
  homepage.style.display = "none";
  result.style.display = "none";
  searchctn.style.display = "flex";
}

gosearchagain.addEventListener("click", hideresultandsearch);

// going to search section again

// let placeholdertext=inputbyuser.ariaPlaceholder;

// function gotosearch(){

//     // window.location.replace("index.html")

//     inputbyuser.value="";
//     inputbyuser.placeholdertext=placeholdertext;
//     var sectionTopOffset = searchctn.offsetTop;

//     // Scroll to the target section
//     // window.scrollTo({
//     //   top: sectionTopOffset,
//     //   behavior:"auto"
//     // });
//   }

// gosearchagain.addEventListener('click', gotosearch);

// Now till here the api is working perfectle now i have to made changes so that on
// clicking every value should change according to the result and it should directly
// go to result section in the website

// further requirements
