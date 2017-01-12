function setUpBackground(){
    
    var back = new PIXI.Sprite( rsc['images/fondale_low.jpg'].texture )
    mainContainer.addChild(back)
    back.scale.set(factorH, factorH)
    
    mainContainer.startX = 0
    mainContainer.dragging = false
    mainContainer.interactive = true
    
    mainContainer.on('mousedown', onDown)
        .on('touchstart', onDown)
        .on('mousemove', onMove)
        .on('touchmove', onMove)
        .on('mouseup', onUp)
        .on('touchend', onUp)
    
    function onDown(e){
        this.data = e.data
        this.dragging = true
        this.startX = e.data.global.x - this.x
    }
    function onMove(e){
        if(this.dragging){
            this.x = this.data.global.x - this.startX
        } 
    }
    function onUp(e){
        this.dragging = false
    }
    
}