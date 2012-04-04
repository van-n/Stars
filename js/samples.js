$(function() {
	//alert('I am ready!');
	
	/*$('#parrentDiv').click(function() {
		$('#parrentDiv p').css('color', 'red');
	});*/
	
	$('#toggleButton').click(function() {
		//$('#parrentDiv').toggle();
		$('#parrentDiv').fadeOut(3000);
		
		/*if ($('#parrentDiv').css('display')!='none')
		{
			$('#toggleButton').val('hide');
			$('#parrentDiv').fadeIn();
		}
		else
		{	
			$('#toggleButton').val('show');
			$('#parrentDiv').fadeOut();
		}*/
	});
	
	//$('#parrentDiv p').remove();
	
		//$('#greenDiv').fadeOut(3000);
		//$('#yellowDiv').fadeIn(3000);
		//$('#yellowDiv').fadeOut(3000);
		//$('#greenDiv').fadeIn(3000);
		
		if ($('#greenDiv').css('display')=='none')
		{
			alert('asdg	43wg');
		}
	
});