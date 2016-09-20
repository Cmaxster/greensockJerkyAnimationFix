# greensockJerkyAnimationFix
A fix for jerky/janky HTML5 animation in browser while using GSAP JavaScript library.

I found while using GSAP, specifically in Chrome on Mac, there was a distinct jittery quality to the image rendering while scaling down an image slowly.

I did some digging around to find ways to reduce this effect and create a smoother transition..

These were the options I found:

• use x,y values instead of absolute top,left in TweenLite tweens.
• use the 'will-change' property to indicate the property will animate. (seems to work best)
• try using the 'perspective', 'translateZ', and 'force3D' property to force 3D rendering, specifically on the container element of the image. (however, it should be noted, I've had limited success with this last one.

