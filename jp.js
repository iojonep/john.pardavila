// JAVASCRIPT FILE FOR SITE JOHN PARDAVILA DOT COM
$(function(){
$('#jpmain_screen, .jpinfocell').hide();
$('#jp_1').css('z-index','2');
$('#jp_right, #jp_left, #jp_nav > div > img').css('opacity','0.0');


setTimeout(function(){
	$('#jpmain_screen').slideDown();
	
	setTimeout(function(){
		$('#home_1').slideDown(800)
		
		setTimeout(function(){
			$('#jp_right, #jp_left, #jp_nav > div > img').css('opacity','.4').hide().fadeIn(1000)
		}, 250);
		
	}, 650);	
		
}, 200);



// DETERMINE SIDE TO POST 
$(document).on('click', '#jp_right,#jp_left', function(){

// GET VAR
	var theid = parseInt($('#slidePos').val()) + 1;
	theid = '#home_' + theid;
 

});

$(document).on('mouseover', '#jp_right, #jp_left, #jp_nav > div > img', function(){
	$('#jp_right, #jp_left, #jp_nav > div > img').css('opacity','.8');

});

$(document).on('mouseout', '#jp_right, #jp_left, #jp_nav > div > img', function(){
	$('#jp_right, #jp_left, #jp_nav > div > img').css('opacity','.4');

});


// ###########################################################################################	
// DIRECTIONAL FUNCTION	
$(document).on('click', '#jp_right', function(){
	
	// HIDE LETTERS
	$('#jpmain_screen, .jpinfocell, #jp_nav').hide();
	
	// GET VARS
	var length = parseInt($("#jpimg_screen").children().length)
	var curpos = $('#slidePos').val();
	var newpos = parseInt(curpos) + 1;
	
	// MAKE POST
	if(newpos > length){
		newpos = newpos - length;	
	}
	
	// ASIGN POST
	var homedv = '#home_'+newpos;
		
	// ASSIGN LEFT OR RIGHT
	determine_side(homedv);	
		
	// CONSTR
	var np = '#jp_'+newpos;
	var cp = '#jp_'+curpos;
	
	// CHANGE
	$(cp).css('z-index','2');
	$(np).css('margin-left','100%').css('z-index','2');
	
	// MOVE OUT
	$(np).animate({
		height: "100%",
		width: "100%",
		opacity: 1.0,
		marginLeft: "0"
	}, 1000 );
	
	// MOVE OUT
	$(cp).animate({
		height: "100%",
		width: "100%",
		opacity: 1.0,
		marginLeft: "-100%"
	}, 1000 );

	// SET CURRENT BACK TO 100
	
	$(np).css('margin-left','100%').css('z-index','1');
	$('#slidePos').val(newpos);
	
setTimeout(function(){
	$('#jpmain_screen').slideDown();
	
	setTimeout(function(){
		$(homedv).slideDown(500);
		$('#jp_nav').fadeIn(1000);	
	}, 500);	
		
}, 1250);
	
}); // END ON

// ###########################################################################################
$(document).on('click', '#jp_left', function(){
	
	// HIDE LETTERS
	$('#jpmain_screen, .jpinfocell, #jp_nav').hide();
	
	// GET VARS
	var length = parseInt($("#jpimg_screen").children().length)
	var curpos = $('#slidePos').val();
	var newpos = parseInt(curpos) - 1
	
	// MAKE POST

	if(newpos == 0){
		newpos = newpos + length;	
	}
	
	// ASIGN POST
	var homedv = '#home_'+newpos;
	
		
	// ASSIGN LEFT OR RIGHT
	determine_side(homedv);
	
	// CONSTR
	var np = '#jp_'+newpos;
	var cp = '#jp_'+curpos;
	
	
	// CHANGE
	$(cp).css('z-index','2');
	$(np).css('margin-left','-100%').css('z-index','2');
	
	// MOVE OUT
	$(np).animate({
		height: "100%",
		width: "100%",
		opacity: 1.0,
		marginLeft: "0"
	}, 1000 );
	
	// MOVE OUT
	$(cp).animate({
		height: "100%",
		width: "100%",
		opacity: 1.0,
		marginLeft: "100%"
	}, 1000 );

	// SET CURRENT BACK TO 100
	
	$(np).css('margin-left','-100%').css('z-index','1');
	$('#slidePos').val(newpos);
	
setTimeout(function(){
	$('#jpmain_screen').slideDown();
	
	setTimeout(function(){
		$(homedv).slideDown(500);
		$('#jp_nav').fadeIn(1000);	
	}, 500);		
		
}, 1250);
	
}); // END ON

	
}); // END ONLOAD

// #################################################################################
// #################################################################################
// FUNCTIONS
function determine_side(id){
	
	var classes = $(id).attr('class');
	if(classes.indexOf('rightnav') > 0){
		$('#jpmain_screen').css('left','').css('right', '4%');
	} else {
		$('#jpmain_screen').css('right','').css('left', '4%');	
	}
		
}
