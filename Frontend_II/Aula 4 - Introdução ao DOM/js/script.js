const items = document.querySelectorAll('.selections li')



items.forEach(function(option){
    option.addEventListener('click', function() {
         const change = document.querySelector(this)
         change.style.background = "black"

    })

})






