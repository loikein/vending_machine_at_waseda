// pageTop button
//http://serinaishii.hatenablog.com/entry/2015/11/06/%E8%B6%85%E7%B0%A1%E5%8D%98%26%E3%82%B3%E3%83%94%E3%83%9A%E3%81%A7OK%EF%BC%81%E3%83%9A%E3%83%BC%E3%82%B8%E3%83%88%E3%83%83%E3%83%97%E3%81%B8%E6%88%BB%E3%82%8B%E3%83%9C%E3%82%BF%E3%83%B3%E3%81%AE

$(function(){
var topBtn=$('#pageTop');
topBtn.hide();

	//◇ボタンの表示設定
	$(window).scroll(function(){
		if($(this).scrollTop()>80){
			//---- 画面を80pxスクロールしたら、ボタンを表示する
			topBtn.fadeIn();
		}else{
			//---- 画面が80pxより上なら、ボタンを表示しない
			topBtn.fadeOut();
		} 
	});

	// ◇ボタンをクリックしたら、スクロールして上に戻る
	topBtn.click(function(){
		$('body,html').animate({
		scrollTop: 0},200);
		return false;
	});
});