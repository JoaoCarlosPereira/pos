// 1) Exemplo 1
$('.example-1 li').click(function(){
	// remove a classe de transição
	$(this).removeClass('has-transition');
	  
	// altera a propriedade esperando acabar com a transição,
	// já que a classe não está mais ali  
	$(this).css('margin-left', 0);
	  
	// coloca a classe de transição novamente  
	$(this).addClass('has-transition');

	// altera a propriedade
	$(this).css('margin-left', 100);
});




// 2) Exemplo 2
$('.example-2 li').click(function(){
	// remove a classe de transição
	$(this).removeClass('has-transition');

	// altera a propriedade
	$(this).css('margin-left', 0);
	  
	// força o reflow para as mudanças serem aplicadas imediatamente
	$(this)[0].offsetHeight; // só um exemplo também funciona com outras propriedades
	  
	// coloca a classe de transição de volta
	$(this).addClass('has-transition');
	  
	// altera a propriedade
	$(this).css('margin-left', 100);
});