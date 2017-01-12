function setUpPeople(){

    personaggi.forEach(function(d, i){
        var p = new PIXI.Sprite( rsc[d].texture )
        mainContainer.addChild(p)
        
        p.buttonMode = true
        p.interactive = true
        p.scale.set(.42)
        p.x = 100 + 200*i
        p.y = h/2 + 50
        p.startPos = {x:p.x, y:p.y}
        
        p.on('mousedown', onDown)
            .on('touchstart', onDown)
        
            .on('mouseup', onUp)
            .on('touchend', onUp)
        
            .on('mousemove', onMove)
            .on('touchmove', onMove)
    })
    
    
    function onDown(e){
        this.data = e.data
        this.alpha = .75
        this.dragging = true
        this.startPos.x = e.data.global.x - this.x
        this.startPos.y = e.data.global.y - this.y
        this.parent.setChildIndex(this, this.parent.children.length-1)
        e.stopPropagation()
    }
    
    function onUp(e){
        this.alpha = 1
        this.dragging = false
        this.data = null
        e.stopPropagation()
    }
    
    function onMove(e){
        if(this.dragging){
            //var pos = this.data.getLocalPosition(this.parent)
            //this.position.set(pos.x, pos.y)
            this.x = this.data.global.x - this.startPos.x
            this.y = this.data.global.y - this.startPos.y
            e.stopPropagation()
        }
    }
        
}