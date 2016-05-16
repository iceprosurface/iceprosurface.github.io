$(function(){
	$(".ni").each(function(){
	  $(this).html($(this).html().replace(/&amp;#125;/g,'}'));
	  $(this).html($(this).html().replace(/&amp;#123;/g,'{'));
	});
});
