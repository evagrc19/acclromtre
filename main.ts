basic.forever(function () {
    if (input.acceleration(Dimension.Y) < -100) {
        basic.showIcon(IconNames.Sad)
    } else if (input.acceleration(Dimension.Y) < 100) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
