input.onSound(DetectedSound.Loud, function () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.A, function () {
    music.playMelody("C D E F G A B C5 ", 120)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("A F E F D G E F ", 120)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Skull)
})
basic.showIcon(IconNames.StickFigure)
music.playMelody("C5 B A G F E D C ", 120)
basic.forever(function () {
	
})
