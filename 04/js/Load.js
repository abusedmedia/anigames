var v = '?t=2'
var personaggi = ['images/anita.png'+v, 
                  'images/petra.png'+v, 
                  'images/rachele.png'+v, 
                  'images/maya.png'+v,
                  'images/giorgia.png'+v,
                  'images/anitap.png'+v,
                  'images/francy.png'+v,
                  'images/rick.png'+v
                 ]

personaggi.forEach(function(d, i){
    PIXI.loader.add(d)
})

PIXI.loader
    .add('images/fondale_low.jpg'+v)
    .load(onLoaded)

function onLoaded(){
    
    setUpBackground()
    setUpPeople()
    
}