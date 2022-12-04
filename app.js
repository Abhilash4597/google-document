const option = document.querySelectorAll(".option_select");

const request = document.querySelector('.request')

    for(let i=0; i<option.length; i++){
        option[i].addEventListener('mouseover' ,()=>{
            option[i].style.backgroundColor = "lightgray"
        })
        option[i].addEventListener('mouseleave' ,()=>{
            option[i].style.backgroundColor = "white"
        })    
    }
