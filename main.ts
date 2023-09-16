// Collision logic
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let cell: Sprite = null
let virus: Sprite = null
// Initialize player
let player2 = sprites.create(img`
    . . . . . . . . 
    . . . 5 5 . . . 
    . . 5 5 5 5 . . 
    . 5 5 1 1 5 5 . 
    . . 5 1 1 5 . . 
    . . . 5 5 . . . 
    . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player2)
// Initialize viruses
game.onUpdateInterval(2000, function () {
    virus = sprites.create(img`
        . . . . . 
        . 4 4 4 . 
        . 4 6 4 . 
        . 4 4 4 . 
        . . . . . 
        `, SpriteKind.Enemy)
    virus.setPosition(randint(0, 160), randint(0, 120))
    virus.setVelocity(randint(-30, 30), randint(-30, 30))
})
// Initialize cells
game.onUpdateInterval(1000, function () {
    cell = sprites.create(img`
        . . . . . 
        . 2 2 2 . 
        . 2 3 2 . 
        . 2 2 2 . 
        . . . . . 
        `, SpriteKind.Food)
    cell.setPosition(randint(0, 160), randint(0, 120))
    cell.lifespan = 3000
})
