// @author: Chad Elston
var t1 = new TimelineLite();
function initializeBanner() { setupBanner(); }
function setupBanner() {
    CSSPlugin.defaultForce3D = false;
    document.getElementById('banner').addEventListener('click',onClickTag); // banner clickTag template being used..
    TweenLite.set(feature, {x: -48, y:-170, transformOrigin:"0% 0%"}); //important to use x,y NOT top/left!!
    //TweenLite.set ( [featureFrame ], {perspective: 1000, force3D:true}); //using Tweenlite to force 3D rendering/perspective.
	animateBanner();
}
function animateBanner() { 
	TweenLite.to(feature, 8.00, {scale:0.50, x:0, y:0, ease:Power2.easeOut}) // scale 0.50 276 182
}