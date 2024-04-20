
function openTab(index){
    window.location.href = index;
}

function openLink(link) {
    window.location.href = link;
}

function display(nameButton, nameDiv) {
    let button = document.getElementById(nameButton);
    let div = document.getElementById(nameDiv);

    button.addEventListener("click", function() {
        if(div.style.display === "none") {
            div.style.display = "block"
        } else {
            div.style.display = "none"            
        }
    });
}
