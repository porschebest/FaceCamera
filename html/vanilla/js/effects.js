/*
 *  Predefined filter effects with names for PhotoFilter.js
 *
 *  Last modified: March 1, 2014
 */

// Prepare image-layer effects

//事业
var memphisLayer = new Image();
memphisLayer.src = 'images/effects/G.png';
var memphisLayer2 = new Image();
memphisLayer2.src = 'images/effects/G2.png';

//面相
var deutlichLayer = new Image();
deutlichLayer.src = 'images/effects/Z.png';
var deutlichLayer2 = new Image();
deutlichLayer2.src = 'images/effects/Z2.png';

//健康
var sumieLayer = new Image();
sumieLayer.src = 'images/effects/T.png';
var sumieLayer2 = new Image();
sumieLayer2.src = 'images/effects/F.png';

//爱情
var rockstarLayer = new Image();
rockstarLayer.src = 'images/effects/KF_V.png';
var rockstarLayer2 = new Image();
rockstarLayer2.src = 'images/effects/KF_V.png';




// Define named effects

var ApplyEffects = {
	reset: function(img, format) {
		var f = new PhotoFilter(img, format);
		f.reset();
	},
	memphis: function(img, format) {
		// Sharp images with a magenta-meets-purple tint
		var f = new PhotoFilter(img, format);
		f.applyLayer(memphisLayer, memphisLayer2);
		f.render();
	},
	deutlich: function(img, format) {
		// High exposure
		var f = new PhotoFilter(img, format);
		f.applyLayer(deutlichLayer, deutlichLayer2);
		f.render();
	},
	sumie: function(img, format) {
		var f = new PhotoFilter(img, format);
		f.applyLayer(sumieLayer, sumieLayer2);
		f.render();
	},
	rockstar: function(img, format) {
		// applying a starry layer
		var f = new PhotoFilter(img, format);
		f.applyLayer(rockstarLayer, rockstarLayer2);
		f.render();

	}



//    var ctx=new Img();
//	ctx.src='images/effects/KF_V.png';
//	ctx.fillRect(50,50,50,10);
//	ctx.globalCompositeOperation=gco[n];
//	ctx.beginPath();
//	ctx.fillStyle="red";
//	ctx.arc(50,50,30,0,2*Math.PI);
//	ctx.fill();
//  var c=document.getElementById("myCanvas");
//    f.applyLayer(ctx);
//    f.render();
//  }

};
