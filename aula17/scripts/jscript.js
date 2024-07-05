const obj_num_largura =document.querySelector('#num_largura')
const obj_num_altura =document.querySelector('#num_altura')
const obj_div_poligono =document.querySelector('#div_poligono')
const obj_p_perimetro =document.querySelector('#p_perimetro')

obj_num_largura.addEventListener("change",  funRedimensionaPoligono)
obj_num_altura.addEventListener("change",  funRedimensionaPoligono)



function funRedimensionaPoligono(){

    if(obj_num_largura.value <50 || obj_num_largura.value > 100 
        || obj_num_altura.value < 50 || obj_num_altura.value > 100)
    {
        alert('valores invalidos')
        return;
    }
    obj_div_poligono.style.width = obj_num_largura.value + "px";
    obj_div_poligono.style.height = obj_num_altura.value + "px";

    let area = obj_num_largura.value * obj_num_altura.value
    obj_div_poligono.innerHTML = 'Area:' + area + 'px²'

    let perim = parseInt(obj_num_largura.value) + parseInt(obj_num_largura.value) + parseInt(obj_num_altura.value) + parseInt(obj_num_altura.value)
    obj_p_perimetro.innerHTML = 'perimetro: ' +perim + 'px'
}

const array_titulos = document.querySelectorAll('.titulo')

for (obj_titulo of array_titulos){
    obj_titulo.addEventListener("click", function(){funExibirtexto(this)})
}

function funExibirtexto(par_titulo){
    const obj_texto = par_titulo.children[0] //| children pegar o elemento fillho do que você quer

    if(obj_texto.style.display == 'flex'){
        obj_texto.style.display = 'none'
        return;
    }
    obj_texto.style.display = 'flex'
}


//parte que eu preciso para o meu site


const obj_div_modal = document.querySelector('#div_modal')
const obj_bt_fechar = document.querySelector('#p_fechar span') //span dentro daquele id
const array_img = document.querySelectorAll('#linguagens img')
const obj_img_modal = document.querySelector("#img_modal")
const obj_p_modal = document.querySelector("#p_modal")

for(obj_img of array_img){
    obj_img.addEventListener('click', function () { funExibirModal (this.src , this.alt)}) //| manda os paremetros da imagem
}

obj_bt_fechar.addEventListener('click', funFecharModal)

function funExibirModal  (par_src, par_alt){

    obj_img_modal.setAttribute("src", par_src)
    obj_img_modal.setAttribute('alt', par_alt)
    obj_div_modal.setAttribute('titulo', par_alt)

    obj_p_modal.innerHTML = par_alt

    obj_div_modal.style.display = 'block'
}

function funFecharModal(){

    obj_div_modal.style.display ="none"
}