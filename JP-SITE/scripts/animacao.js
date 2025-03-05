// Ação de navegação header-nav-menu
$('header nav#nav-esquerda ul.menu-principal li:eq(0)').click(function(){
    // Rola até o topo da página (header)
    $('html, body').animate({scrollTop: 0}, 1000);
});

$('header nav#nav-esquerda ul.menu-principal li:eq(1)').click(function(){
    // Rola até a seção "Sobre"
    $('html, body').animate({scrollTop: $('section.sobre').offset().top}, 1000);
});

$('header nav#nav-esquerda ul.menu-principal li:eq(2)').click(function(){
    // Rola até a seção "Trabalhos"
    $('html, body').animate({scrollTop: $('section.trabalhos').offset().top}, 1000);
});

$('header nav#nav-esquerda ul.menu-principal li:eq(3)').click(function(){
    // Rola até a seção "Parceiros"
    $('html, body').animate({scrollTop: $('section.parceiros').offset().top}, 1000);
});

$('header nav#nav-esquerda ul.menu-principal li:eq(4)').click(function(){
    // Rola até a seção "Contato"
    $('html, body').animate({scrollTop: $('section.contato').offset().top}, 1000);
});

  // Ação de navegação footer
  $('footer .nav-footer ul.menu-principal li:eq(0) a').click(function() {
    console.log("Clicou no Início no Footer");
    // Rola até o topo da página (header)
    $('html, body').animate({scrollTop: 0}, 1000);
});

$('footer .nav-footer ul.menu-principal li:eq(1) a').click(function() {
    console.log("Clicou na Seção Sobre no Footer");
    // Rola até a seção "Sobre"
    $('html, body').animate({scrollTop: $('section.sobre').offset().top}, 1000);
});

$('footer .nav-footer ul.menu-principal li:eq(2) a').click(function() {
    console.log("Clicou na Seção Trabalhos no Footer");
    // Rola até a seção "Trabalhos"
    $('html, body').animate({scrollTop: $('section.trabalhos').offset().top}, 1000);
});

$('footer .nav-footer ul.menu-principal li:eq(3) a').click(function() {
    console.log("Clicou na Seção Parceiros no Footer");
    // Rola até a seção "Parceiros"
    $('html, body').animate({scrollTop: $('section.parceiros').offset().top}, 1000);
});

$('footer .nav-footer ul.menu-principal li:eq(4) a').click(function() {
    console.log("Clicou na Seção Contato no Footer");
    // Rola até a seção "Contato"
    $('html, body').animate({scrollTop: $('section.contato').offset().top}, 1000);
});

// Seção sobre (com animação de entrada)
$('div.sobre-mestre').css('opacity', 0);

$('div.sobre-mestre').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div.sobre-mestre').addClass('animate__animated animate__fadeInUp animate__slow');
    } else {
        $('div.sobre-mestre').removeClass('animate__animated animate__fadeInUp animate__slow');
    }
}, {
    offset: '550px'
});
