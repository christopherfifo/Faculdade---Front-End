const obj_sel_cor  = document.querySelector("#sel_cor")
const obj_div_cor = document.querySelector("#div_cor")
const obj_cb_fundo_escuro = document.querySelector("#cb_fundo_escuro")
const obj_html = document.querySelector("html")
const obj_bt_desfocar = document.querySelector("#bt_desfocar")
const  obj_bt_focar = document.querySelector("#bt_focar")
const obj_img_foco = document.querySelector("#img_foco")

//adicionar eventos para chmar funções
obj_sel_cor.addEventListener('change', funMudaCorFundo)
obj_cb_fundo_escuro.addEventListener('click', funFundoEscuro )
obj_bt_desfocar.addEventListener("click", funDesfocar)
obj_bt_focar.addEventListener("click", funFocar)

function funMudaCorFundo() {
        obj_div_cor.setAttribute('class', obj_sel_cor.value)
}

//pega a o valor do obj_cb_fundo_escuro e coloca como classe no html
function funFundoEscuro(){
    //checked ve es esta clicado/marcado
    if(obj_cb_fundo_escuro.checked){
    obj_html.setAttribute("class", obj_cb_fundo_escuro.value)
    return;
    }

    obj_html.removeAttribute("class")
}

//função para ddesfocar
function funDesfocar(){
    obj_img_foco.setAttribute("class", obj_bt_desfocar.value)
}

function funFocar(){
    obj_img_foco.setAttribute("class", obj_bt_focar.value )
}
