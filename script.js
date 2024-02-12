const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrosel(){
    idx++
    if(idx > img.length - 1){
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 300}px)`;
    
}

setInterval(carrosel, 1800);

function fecharModal_unicesumar()
{
  document.getElementById('fundo_unicesumar').style.display = 'none';
  document.getElementById('modal_unicesumar').style.display = 'none';
}
function fecharModal_certificado()
{
  document.getElementById('fundo_certificado').style.display = 'none';
  document.getElementById('modal_certificado').style.display = 'none';
}
function fecharModal_educa()
 {
  document.getElementById('fundo_educa').style.display = 'none';
  document.getElementById('modal_educa').style.display = 'none';
}
function fecharModal_curriculo()
{
  document.getElementById('fundo_curriculo').style.display = 'none';
  document.getElementById('modal_curriculo').style.display = 'none';
}
/*----------------------------------------------------------------*/

function abrirModal_unicesumar()
{
  document.getElementById('fundo_unicesumar').style.display = 'block';
  document.getElementById('modal_unicesumar').style.display = 'block';
}
function abrirModal_certificado()
{
  document.getElementById('fundo_certificado').style.display = 'block';
  document.getElementById('modal_certificado').style.display = 'block';
}
function abrirModal_educa()
{
  document.getElementById('fundo_educa').style.display = 'block';
  document.getElementById('modal_educa').style.display = 'block';
}
function abrirModal_curriculo()
{
  document.getElementById('fundo_curriculo').style.display = 'block';
  document.getElementById('modal_curriculo').style.display = 'block';
}
