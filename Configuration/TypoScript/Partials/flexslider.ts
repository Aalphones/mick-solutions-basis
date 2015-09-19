plugin.tx_flexslider {
    settings {
            # Boolean: Define whether the image caption should be shown or not
        showCaption = 1
            # String: Select your animation type, "fade" or "slide"
        animation = fade
            # String: Select the sliding direction, "horizontal" or "vertical"
        slideDirection = horizontal
            # Boolean: Animate slider automatically
        slideshow = 0
            # Integer: Set the speed of the slideshow cycling, in milliseconds
        slideshowSpeed = 7000
            # Integer: Set the speed of animations, in milliseconds
        animationDuration = 600
            # Boolean: Display control navigation
        controlNav = 1
            # Boolean: Create navigation for previous/next navigation? (true/false)
        directionNav = 1
            # Boolean: Allow slider navigating via keyboard left/right keys
        keyboardNav = 1
            # Boolean: Allow slider navigating via mousewheel
        mousewheel = 0
            # Boolean: Create pause/play dynamic element
        pausePlay = 0
            # Boolean: Randomize slide order
        randomize = 0
            # Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        animationLoop = 1
            # Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
        pauseOnHover = 0
            # Image settings in px - experimental!
            # If you don't really NEED them, just keep the options empty!
            # Cropping works - just type something like width = 960c
        images {
            width =
            height =
            minWidth =
            minHeight =
            maxWidth =
            maxHeight =
        }
    }
}