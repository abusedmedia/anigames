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
            .on('mouseupoutside', onUp)
            .on('touchend', onUp)
            .on('touchendoutside', onUp)
        
            .on('mousemove', onMove)
            .on('touchmove', onMove)
        
        
        
    })
    
    
    function onDown(e){
        this.data = e.data
        this.id = e.data.identifier
        
        var c = getCoords(this.id, this.data)
            
        this.alpha = .75
        this.dragging = true
        this.startPos.x = c.x - this.x
        this.startPos.y = c.y - this.y
        this.parent.setChildIndex(this, this.parent.children.length-1)
        ThrowPropsPlugin.untrack(this, "x,y");
        ThrowPropsPlugin.track(this, "x,y");
        e.stopPropagation()
    }
    
    function onUp(e){
        this.alpha = 1
        this.dragging = false
        this.data = null
        
        TweenLite.to(this, 1, {throwProps:{x:{velocity:"auto", max:calcWidth, min:0}, y:{velocity:"auto", max:globalH-this.height, min:0}}, ease:Strong.easeOut});
        //ThrowPropsPlugin.untrack(this, "x,y");
        e.stopPropagation()
    }
    
    function onMove(e){
        if(this.dragging){
            var c = getCoords(this.id, this.data)
            var gx = c.x 
            var gy = c.y
            
            //var pos = this.data.getLocalPosition(this.parent)
            //this.position.set(pos.x, pos.y)
            
            this.x = gx - this.startPos.x
            this.y = gy - this.startPos.y
            //e.stopPropagation() // this block the multitouch feature
        }
    }
    
    
    function getCoords(id, data){
        var gx = data.global.x 
        var gy = data.global.y
        var tts = data.originalEvent.touches
        if(tts){
            var t
            for(var i=0; i<tts.length; ++i){
                var _t = tts[i]
                if(_t.identifier == id){

                    t = _t
                    gx = t.clientX
                    gy = t.clientY
                }
            }
        }
        return {x:gx, y:gy}
    }
        
}