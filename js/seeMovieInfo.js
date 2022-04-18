export function goToThisInfoMovie(){
    let buttons = document.querySelectorAll('button')

    buttons.forEach(button => {
        button.addEventListener('click',() =>{
            let id = button.id
            window.location.href=(`./movie.html?id=${id}`)
        })
    })
}