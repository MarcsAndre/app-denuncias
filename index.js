function exibirSenha(elemento){
    let elementoPai = elemento.parentNode
   
    let icone = elementoPai.querySelector('ion-icon').name
    console.log(icone==='eye-outline')
    if(icone === 'eye-outline'){
        elementoPai.querySelector('ion-icon').name = 'eye-off-outline'
        elementoPai.querySelector('input').type = 'password'
    }else{
        elementoPai.querySelector('ion-icon').name='eye-outline'
        elementoPai.querySelector('input').type = 'text'
    }

}


function submissao(elemento){
    elemento.preventDefault()
    console.log('elemento')
}