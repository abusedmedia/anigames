
$(document).ready(function(){
    $.get('scena.svg', function(data){
        
        var svg = $(data.documentElement)
        
        $('#back').append(svg)
        
        var width_view = $(window).width()
        var width_content = $('#back').width()
        
        var factor = 3000/width_content
        
        // add draggability to the whole scene
        new Impetus({
             source:'#back',
             boundX:[(width_content-width_view)*-1, 0],
             update: function (x, y) {
                 $('#back').css({x:x})
             }
        })
        
        
        // add behaviour on characters
        $('#persone > g').each(function(i, e){
            var _e = $(e)
            new Impetus({
                source:e,
                bubble:false,
                update: function (x, y) {
                    TweenMax.set(_e, {x:x*factor, y:y*factor})
                }
            })
        })
        
        $(svg).on('mousedown', function(e){
            console.log(e)
        })
        
        $('#persone > g').on('mousedown touchstart', function(){
            
            svg.append(this) // move to the top of the stack
            TweenMax.set(this, {scale:1.1, transformOrigin:'center center'})
        })
        
        $('#persone > g').on('mouseup touchend', function(){
            TweenMax.set(this, {scale:1, transformOrigin:'center center'})
        })

    })
})