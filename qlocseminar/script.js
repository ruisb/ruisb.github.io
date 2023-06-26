

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



function getAnchor()
{
      var url = window.location.hash.substr(0);
      var idx = url.indexOf("#")
      var anchor = idx != -1 ? url.substring(idx+1) : "";
      return(anchor);
}

function toggle2(showHideDiv, switchTextDiv) {
	var ele = document.getElementById(showHideDiv);

	//var text = document.getElementById(switchTextDiv);
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		//text.innerHTML = "restore";
  	}
	else {
		ele.style.display = "block";
		//text.innerHTML = "collapse";
	}
}


function toggle_abstract(showHideDiv,linkDiv) {
	var ele = document.getElementById(showHideDiv);
	var par = document.getElementById(linkDiv);

	if(ele.style.display == "block") {
    		ele.style.display = "none";
                par.classList.toggle('link-abstract-open');
  	}
	else {
		ele.style.display = "block";
                par.classList.toggle('link-abstract-open');
	}
}

function show2(showHideDiv, switchTextDiv) {
	var ele = document.getElementById(showHideDiv);

		ele.style.display = "block";
}



$( window ).on("load", function() {
       var id = getAnchor();
       if (id==""){}else{
//console.log('abstract'+id);
       show2('abstract'+id,'title')};
});




