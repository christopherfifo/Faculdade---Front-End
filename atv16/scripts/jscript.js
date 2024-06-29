const obj_sel_rede_social = document.querySelector("#sel_rede_social")
const obj_img_rede_social= document.querySelector('#img_rede_social')
const obj_p_rede_social = document.querySelector('#p_rede_social')

obj_sel_rede_social.addEventListener("change", funMudaFigura)



//* função para pegar o valor da option e adicionar na src do img (é mesmo nome da imagens)
function funMudaFigura(){
    obj_img_rede_social.setAttribute("src", "./imagens/" + obj_sel_rede_social.value + ".png")
    // obj_img_rede_social.setAttribute("src", "./imagens/" + obj_sel_rede_social.valueTolowerCase() + ".png")

    obj_img_rede_social.setAttribute("alt", obj_sel_rede_social.value)
    obj_img_rede_social.setAttribute("title", obj_sel_rede_social.value)
    obj_p_rede_social.innerHTML = 'Logo ' + obj_sel_rede_social.value
}

//criando tag no html

const array_img_figuras = document.querySelectorAll('.figuras')
const obj_div_adiciona_figura = document.querySelector('#div_adiciona_figura')

//cria a tag
const obj_img_nova = document.createElement('img')
const obj_input_novo = document.createElement('input')
for(obj_img of array_img_figuras){
    obj_img.addEventListener('click', function() {funAdiconarFigura(this.src, this.alt)} ) //this é para pegar os valores dos  parametros do obj_img que recebe o array_img_figuras
}

function funAdiconarFigura(p_src, p_alt){
    obj_img_nova.setAttribute('src', p_src)
    obj_img_nova.setAttribute('alt', p_alt)
    obj_img_nova.setAttribute('title', p_alt)
    obj_div_adiciona_figura.appendChild(obj_img_nova)
  
    obj_input_novo.setAttribute('type', 'text')
    obj_input_novo.setAttribute('disabled', true)
    obj_input_novo.setAttribute('value', p_alt)

  obj_input_novo.setAttribute('class', 'novo_input')

    obj_div_adiciona_figura.appendChild(obj_input_novo)
    
}