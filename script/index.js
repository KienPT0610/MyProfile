let inputData = [];

function saveData(){
    let inputElement = document.getElementById("input-menu");
    let inputValue = inputElement.value;

    if(inputValue !== "") {
        inputData.push(inputValue);
        document.getElementById('notice').innerText = "them thanh cong " + inputValue;
        // console.log(inputData);
        inputValue = "";
        displayMenu();
    }
    event.preventDefault();
}

function displayMenu() {
    let dataList = document.getElementById("list-menu");
    dataList.innerHTML = "";
    let ul = document.createElement("ul");

    inputData.forEach(function(item){
        let li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });

    dataList.appendChild(ul)
}




