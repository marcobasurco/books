const game = {
    'suspects' : [
        {
            name: 'Rusty',
            color: 'orange'
        },
        {
            name: 'Miss Scarlet',
            color: 'red'
        }
    ]
}

var gameLoop = function() {
    for (var i = 0; i < game.suspects.length; i++){
        console.log('outer loop');
        for ( var key in game.suspects[i]){
            console.log('inner loop');
            if (game.suspects[i][key] === 'Rusty') {
                console.log('Found \'em !');
            } else {
                console.log('next time!');
            }
        }
    }
}

gameLoop();

var [{color: firstColor}, {color: secondColor}] = suspects;

