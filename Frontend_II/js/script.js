const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('click', function (){


    const header_main = document.querySelector('div.header-flex')
    console.log(header_main)




    header_main.classList.toggle('dark-header')
    document.body.classList.toggle('dark-bg')


})