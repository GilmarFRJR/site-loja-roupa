// header começo----------------------------------------------------------------------------------

function abrirInformacos(){
    if ($('#infos').width() == 0){
    
        $("#infos").css({'width': '600px' , 'padding-right': '140px'})

        setTimeout(function(){
            $(".textoInfos").fadeIn().css('display', 'flex')
          }, 500)

    } else{
        $("#infos").css({'width': '0' , 'padding-right': '0'})
        $(".textoInfos").fadeOut(001)
        $('.blocoInfo').fadeOut(001)
    }
}


$('#botaoInfos').on('click', function() {

   

    if ($('body').width() > 1110){

        abrirInformacos()
            
    } else{
  
        $('#botaoInfos').prop('disabled', true)

        abrirInformacos()
        $('#logo').fadeToggle()

        setTimeout(function(){

            $('#botaoInfos').prop('disabled', false)
        }, 600)

    }})


$('.abrirSobreMim').on('click', function() {

    $('#telaSobreMim').fadeIn().css('display', 'flex')
    $('#container').css('background-color', 'aquamarine')

    $('#telaInfos').css('display', 'none')
    $('header').css('display', 'none')
    $('main').css('display', 'none')
    $('footer').css('display', 'none')

})


$('#fecharSobreMim').on('click', function(){

    $('#telaSobreMim').css('display', 'none')
    $('#container').css('background-color', 'white')

    $('header').css('display', 'block')
    $('main').css('display', 'block')
    $('footer').css('display', 'block')

})


$('#textoInfo1').on('mouseenter', function(){

    $('#blocoInfo1').fadeIn(300).css('display', 'flex')

})


$('#textoInfo2').on('mouseenter', function(){

    $('#blocoInfo2').fadeIn(300).css('display', 'flex')

})



$('#textoInfo3').on('mouseenter', function(){

    $('#blocoInfo3').fadeIn(300).css('display', 'flex')

})




$('.blocoInfo').on('mouseleave', function(){

    $(this).fadeOut()

})


$('#container').on('click', function(event) {
    
    if ($(event.target).is('#container')) {
      $('.blocoInfo').fadeOut()
    }

  })



function infosTelaPequena(){

if($('body').width() < 745){

    $('#botaoInfos').off('click').on('click', function() {

        $('#telaInfos').css('display', 'flex')
        $('#container').css('background-color', 'rgb(214, 54, 54)')
    
        $('header').css('display', 'none')
        $('main').css('display', 'none')
        $('footer').css('display', 'none')

})}}


$('#fecharTelaInfos').on('click',function(){

    $('#telaInfos').css('display', 'none')
    $('#container').css('background-color', 'white')

    $('header').css('display', 'flex')
    $('main').css('display', 'block')
    $('footer').css('display', 'block')

})

infosTelaPequena()









// header fim----------------------------------------------------------------------------------
