var personaggi = ['images/anita.png', 
                  'images/petra.png', 
                  'images/rachele.png', 
                  'images/maya.png',
                  'images/giorgia.png',
                  'images/anitap.png',
                  'images/francy.png',
                  'images/rick.png'
                 ]

personaggi.forEach(function(d, i){
    PIXI.loader.add(d)
})

PIXI.loader
    .add('images/fondale.jpg')
    .load(onLoaded)

function onLoaded(){
    
    setUpBackground()
    setUpPeople()
    
}