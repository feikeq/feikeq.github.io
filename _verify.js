/*
  使用方法：
  在网站某处JS代码中加入
  document.write('<script src="//www.fk68.net/verify.js"><\/script>');
  或在HTML中加入
  <script src="//www.fk68.net/verify.js"></script>
  
*/

var feikeworld = function(){

	switch(window.location.hostname)
	{
	case 'banling.com':
	  //执行代码块 1
	  var wzID = window.location.href.split('#')[1];
	  if(wzID == '54cf1126e4b04e3061adfd8f' || wzID =='551a5888e4b02669194b7d88'){
	  	setTimeout(function(){$('.banling_com').html('');},1000) ;
	  }
            if(wzID =='552b6ea6e4b0da2c5e169552'){
                setTimeout(function(){window.location = "http://www.ibanling.com/huodongjieshu/end.html";},100) ;
            }
	  return true;
	  break;

	case '127.0.0.1':
	  //执行代码块 1
	  console.log('本地测试验证失败');
	  return true;
	  break;

	case 'www.xxx.com':
	  //执行代码块 2
	  $(function(){
	  	//请将网站费用结清
	  	$('body').html('&#35831;&#23558;&#32593;&#31449;&#36153;&#29992;&#32467;&#28165;');
	  });
	  return false;
	  break;

	default:
	  //n 与 case 1 和 case 2 不同时执行的代码
	  	var str=('\n _____  _____  ___  __ ___ _____    __  __  _____  _____  ____   _____ \n/   __\\/   __\\/___\\|  |  //   __\\  /   /  \\/  _  \\/  _  \\/  _/  |  _  \\\n|   __||   __||   ||  _ < |   __|  |  /\\  ||  |  ||  _  <|  |---|  |  |\n\\__/   \\_____/\\___/|__|__\\\\_____/  \\__/\\__/\\_____/\\__|\\_/\\_____/|_____/\n');
	  	str +='\n 废客联邦';
	  	str +='\n http://www.FK68.net';
	  	if (window.console) console.log(str);
	  return true;
	}
}
feikeworld();