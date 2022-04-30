const panels = document.querySelectorAll('.panel')

  panels.forEach(panel => {
    panel.addEventListener('click', () => {
      removeActiveclasses()
      panel.classList.add('active') 
    })
})

  function removeActiveclasses(){
      panels.forEach(panel => {
        panel.classList.remove('active') 
      })
  }

  
$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});
