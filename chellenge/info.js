
// const test = "https://api.nal.usda.gov/fdc/v1/food/782112?api_key=nnrFB3V6VzYFB4Z4X04tPeVQxG3z6jmoZPjLZ3W4";
const baseUrl = "https://api.nal.usda.gov/fdc";
const getFoodUrl = "/v1/food/";
const api_key = "api_key=nnrFB3V6VzYFB4Z4X04tPeVQxG3z6jmoZPjLZ3W4";
const backup_key = "&api_key=S9HrsyaUZMDzgSfjn42NbrosT761yDCmGwXfN2ES";

// fetch(test)
//     .then(response => response.json())
//     .then(data => console.log(data));

function search_food(foodname){
       
    let search = "https://fdc.nal.usda.gov/fdc-app.html#/?query=" + foodname;
    window.open(search);
    

    // ******the search data is too big to handle in this project.*****
    // let searchUrl = "https://api.nal.usda.gov/fdc/v1/foods/search?query="+foodname+"&api_key=nnrFB3V6VzYFB4Z4X04tPeVQxG3z6jmoZPjLZ3W4";
    // console.log(searchUrl);
    // urlPath = searchUrl;
    // fetch(urlPath)
    // .then (response => response.json())
    // .then (data => {
    //     //code inside.
        
    //     console.log(data)}
    // );
    
}

function commonFood(foodid){
    reset();
    
    const foodcall = "https://api.nal.usda.gov/fdc/v1/food/";
    let foodurl = foodcall+foodid+"?"+api_key;
    fetch(foodurl)
    .then (response => response.json())
    .then (data => {
        //creating hiding section for detail information
        // let container = document.createElement('div');
        // container.className = "detailInfo";
        let container = document.getElementById('detailInfo');

        let table = document.createElement('table');
        table.className = "detailTable";

        let tableh1 = document.createElement('h3');
        tableh1.className = "portion";
        tableh1.innerHTML = "Portion: 100g";

        let tr1 = document.createElement('tr');
        //first table row with table head
        let thName = document.createElement('th');
        thName.className = "NutriName";
        thName.innerText = "Name";
        let thAmount = document.createElement('th');
        thAmount.className = "foodAmount";
        thAmount.innerText = "Amount";
        let thUnit = document.createElement('th');
        thUnit.className = "foodUnit";
        thUnit.innerText = "Unit";

        tr1.appendChild(thName);
        tr1.appendChild(thAmount);
        tr1.appendChild(thUnit);
        table.appendChild(tr1);

        //looping to getting detail information
        let foodName = document.createElement('h3');
        foodName.innerHTML = data.description;
        for (let i = 0; i < data.foodNutrients.length;i++){
            let newTr = document.createElement('tr');
            let nameTd = document.createElement('td');
            let amountTd = document.createElement('td');
            let unitTd = document.createElement('td');

            nameTd.innerText = data.foodNutrients[i].nutrient.name;
            amountTd.innerText = data.foodNutrients[i].amount;
            unitTd.innerText = data.foodNutrients[i].nutrient.unitName;

            newTr.appendChild(nameTd);
            newTr.appendChild(amountTd);
            newTr.appendChild(unitTd);
            table.appendChild(newTr);
        }

        container.appendChild(foodName);
        container.appendChild(table);
        // let common = document.getElementById("common");
        // common.appendChild(container);
        
        container.className = "";
        container.className = "show";
        
    });
}
function reset(){
    let resetObject = document.getElementById("detailInfo");
    resetObject.className = "";
    resetObject.innerHTML = "";
    // while(resetObject.lastElementchild){
    //     resetObject.removeChild(resetObject.lastElementchild);
    // }
}




//I-NUMBER 550943203
//1. using json data to write html. fetch everytime to write data on html with javascript or does it need to be inside fetch. Search food and viewing all food list.
//2. page reference. changed page number in the json does not change the list showing up.
//3. how to get input type search value once it is submitted