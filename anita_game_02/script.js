var original_width = 4600
var original_height = 800

var w = $(window).width()
var h = $(window).height()

var factorW = w/original_width
var factorH = h/original_height

var renderer = PIXI.autoDetectRenderer(original_width*factorH,h, {antialias:true, transparent:false})
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









