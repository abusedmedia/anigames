var original_width = 2300
var original_height = 400

var w = $(window).width()
var h = $(window).height()
var globalH = h

var factorW = w/original_width
var factorH = h/original_height
var calcWidth = original_width*factorH

var renderer = PIXI.autoDetectRenderer(w,h, {antialias:false, transparent:false})
document.body.appendChild(renderer.view)

var stage = new PIXI.Container()
var rsc = PIXI.loader.resources
var mainContainer = new PIXI.Container()
stage.addChild(mainContainer)


function loop(){
    requestAnimationFrame(loop)
    renderer.render(stage)
}

loop()









