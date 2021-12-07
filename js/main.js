fetch('https://api.nobelprize.org/2.1/laureates')
.then(function(response){
    return response.json();
})
.then(function (data){
    let laureatesObject = data;
    console.log(laureatesObject);

    for (const laureate of laureatesObject){
    //creates the input for selecting how to search
    let laureateCard = document.createElement('article');
    let name = document.createElement('h2');
    name.innerHTML = laureate.fullName.en;

    }
    //creates a <section> for each laureate

    function search(){

    }


});