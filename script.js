window.onload = function(){
    document.querySelector("#btn-menu").addEventListener('click', function(){
        document.querySelector(".header ul").classList.toggle("none-ul")
    })
}