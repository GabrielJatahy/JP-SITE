// ativand o menu do mobile

function mostraMenu(){
    $('header nav#nav-esquerdo ul#menu-principal').css('display', 'flex');
    $('header nav#nav-esquerdo ul.menu-principal').addClass('animate__animated animate__fadeInRight animate__slow');

    $('header nav#nav-esquerdo ul#icone-menu li#menu').css('display', 'none');
    $('header nav#nav-esquerdo ul#icone-menu li#menuX').css('display', 'flex');   

}

function esconderMenu(){
    $('header nav#nav-esquerdo ul#menu-principal').css('display', 'none');

    $('header nav#nav-esquerdo ul#icone-menu li#menu').css('display', 'flex');
    $('header nav#nav-esquerdo ul#icone-menu li#menuX').css('display', 'none'); 
}

let controle = true;

$('header nav#nav-esquerdo ul#icone-menu').click(function() {
    if(controle === true){
        mostraMenu();
        controle = false;
    } else {
        esconderMenu();
        controle = true;
    }
})