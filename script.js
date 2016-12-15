     



//////////////////////////////////////////////////////////

        /* Gallary */

function gallery(sSelector) {
    var g = this;
    g.init(sSelector);
    g.pictures = g.findObject(".b-picture");
    g.arrowPrew = g.findObject(".b-preview__arrow_prev");
    g.arrowNext = g.findObject(".b-preview__arrow_next");
    g.preview = g.findObject(".b-preview");
    g.previewImage = g.findObject(".b-preview__image");
    g.previewText = g.findObject(".b-preview__text");
    g.pictureImage = g.findObject(".b-picture__image");
    g.current = 0;
    g.max = g.pictures.length;
    
    g.showPreview = function(){
    	var picture = $(this); //div з картинкою по якій ми клікнули
    	g.current = g.pictures.index(picture); //$().index()
        g.display(picture);
    };
    g.closePreview = function(event){
    	if (!event || $(event.target).hasClass('b-preview')) {
    		g.preview.removeClass('b-preview_shown');
    	}
    };
    g.escclosePreview = function(event){
    	if (event.which == 27) {
    		g.closePreview();
    	}
    }
    g.showImage = function(iShift){
    	if (iShift==1){
    		if (g.current < g.max - 1){
    			g.current++;
    		}
    	}
    	else{
    		if (g.current > 0) {
    			g.current--;
    		}
    	}
    	g.display(
    		g.findObject('.b-picture:eq(' + g.current + ')')
    	)
    };
    g.display = function(oPicture){
    	var 
    	smallImage = oPicture.find(".b-picture__image");
    	bigImageSrc = smallImage.attr('src').replace('small_','');
    	g.previewImage.attr('src',bigImageSrc);
    	g.previewText.html(g.current + 1 + '/' + g.max);
    	g.preview.addClass('b-preview_shown');
    };
    g.showPrevious = function(){
    	g.showImage(-1);
    };
    g.showNext = function(){
    	g.showImage(1);
    }; 
    g.pictures.click(g.showPreview);         
    g.preview.click(g.closePreview);         
    g.arrowPrew.click(g.showPrevious);       
    g.arrowNext.click(g.showNext);           
    g.previewImage.click(g.showNext);        
    $('body').keyup(g.escclosePreview);      
                                             
}                                            
gallery.prototype = new Component();
//////////////////////////////////////////////////////////

      /* Scroll */
function Scroll(sSelector){
  var s = this;  
s.showHideTopBtn = function(){
  if ($(window).scrollTop() > 300) {
    s.topBtn.fadeIn();
  }
  else s.topBtn.fadeOut(); 
}
s.slowScroll = function(){
  $('html,body')
  .stop()
  .animate({scrollTop:0},'middle');
  return false;
}
s.main = function(){
  s.init(sSelector);
  s.topBtn = s.findObject('.topBtn');
  $(window).scroll(s.showHideTopBtn);
  s.topBtn.click(s.slowScroll);
}
$(document).ready(s.main);
}
Scroll.prototype = new Component();
        /* Scroll */

////////////////////////////////////////////////////////////




