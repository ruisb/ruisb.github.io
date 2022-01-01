$('.open-menu').on('click', function(){
	
	if($('.mobile-menu').is(':visible')) {
    $('.mobile-menu').Hide()

    //$('.show-filters').img('css/img/menu.svg')
  } else{
    $('.mobile-menu').fadeIn()
    $('.open-menu').fadeOut()
   // $('.show-filters').text('Hide filters')
  }
  
  return false
})

$('.close-menu').on('click', function(){
	
	if($('.mobile-menu').is(':visible')) {
    $('.mobile-menu').fadeOut()
    $('.open-menu').fadeIn()
    //$('.show-filters').img('css/img/menu.svg')
  } else{
    $('.mobile-menu').fadeIn()
   // $('.show-filters').text('Hide filters')
  }
  
  return false
})