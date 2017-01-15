function setUpBackground(){
    
    var back = new PIXI.Sprite( rsc['images/fondale_low.jpg'+v].texture )
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
        .on('mouseupoutside', onUp)
        .on('touchend', onUp)
        .on('touchendoutside', onUp)
    
    function onDown(e){
        this.data = e.data
        this.dragging = true
        ThrowPropsPlugin.untrack(this, "x");
        ThrowPropsPlugin.track(this, "x");
        this.startX = e.data.global.x - this.x
    }
    
    function onMove(e){
        if(this.dragging){
            this.x = this.data.global.x - this.startX
        } 
    }
    
    function onUp(e){
        this.dragging = false
        TweenLite.to(this, 1, {throwProps:{x:{velocity:"auto", max:0, min:(calcWidth-w)*-1}}, ease:Strong.easeOut});
    }
    
}