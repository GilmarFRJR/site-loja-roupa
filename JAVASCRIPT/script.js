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
  
        $('#botaoInfos').prop('desativado', true)

        abrirInformacos()
        $('#logo').fadeToggle()

        setTimeout(function(){

            $('#botaoInfos').prop('desativado', false)
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



// carrossel começo----------------------------------------------------------------------------------


    $('#slideCamisa2').hide()

    $('#slideCamisa3').hide()

    $('#slideBlusa2').hide()

    $('#slideBlusa3').hide()

    $('#slideTenis2').hide()

    $('#slideTenis3').hide()
    
    
    $('#proximoSlideA').on('click', function() {

        if($('#slideAnteriorA').hasClass('desativado')){

            $('#slideAnteriorA').removeClass('desativado')

            $('#slideCamisa1').fadeOut(600)

            $('#slideCamisa2').fadeIn(600)

        } else{

            $('#proximoSlideA').addClass('desativado')

            $('#slideCamisa2').fadeOut(600)

            $('#slideCamisa3').fadeIn(600)

        }

    })
    
   
    $('#slideAnteriorA').click(function() {

        if($('#proximoSlideA').hasClass('desativado')){

            $('#proximoSlideA').removeClass('desativado')

            $('#slideCamisa3').fadeOut(600)

            $('#slideCamisa2').fadeIn(600)

        } else{

            $('#slideAnteriorA').addClass('desativado')

            $('#slideCamisa2').fadeOut(600)

            $('#slideCamisa1').fadeIn(600)

        }

    })
       





    $('#proximoSlideB').on('click', function() {

        if($('#slideAnteriorB').hasClass('desativado')){

            $('#slideAnteriorB').removeClass('desativado')

            $('#slideBlusa1').fadeOut(600)

            $('#slideBlusa2').fadeIn(600)

        } else{

            $('#proximoSlideB').addClass('desativado')

            $('#slideBlusa2').fadeOut(600)

            $('#slideBlusa3').fadeIn(600)

        }

    })
    
   
    $('#slideAnteriorB').click(function() {

        if($('#proximoSlideB').hasClass('desativado')){

            $('#proximoSlideB').removeClass('desativado')

            $('#slideBlusa3').fadeOut(600)

            $('#slideBlusa2').fadeIn(600)

        } else{

            $('#slideAnteriorB').addClass('desativado')

            $('#slideBlusa2').fadeOut(600)

            $('#slideBlusa1').fadeIn(600)

        }

    })
       





    $('#proximoSlideC').on('click', function() {

        if($('#slideAnteriorC').hasClass('desativado')){

            $('#slideAnteriorC').removeClass('desativado')

            $('#slideTenis1').fadeOut(600)

            $('#slideTenis2').fadeIn(600)

        } else{

            $('#proximoSlideC').addClass('desativado')

            $('#slideTenis2').fadeOut(600)

            $('#slideTenis3').fadeIn(600)

        }

    })
    
   
    $('#slideAnteriorC').click(function() {

        if($('#proximoSlideC').hasClass('desativado')){

            $('#proximoSlideC').removeClass('desativado')

            $('#slideTenis3').fadeOut(600)

            $('#slideTenis2').fadeIn(600)

        } else{

            $('#slideAnteriorC').addClass('desativado')

            $('#slideTenis2').fadeOut(600)

            $('#slideTenis1').fadeIn(600)

        }

    })
       
    
   
    $('#slideAnteriorA').addClass('desativado')

    $('#slideAnteriorB').addClass('desativado')

    $('#slideAnteriorC').addClass('desativado')



// carrossel fim----------------------------------------------------------------------------------
