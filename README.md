# tween-titans
To the rescue!

## API reference
**TweenSelf([options])**
Tweens an element based on its position in the user's viewport.

Returns a `Tween` object.

_Options:_
* `target` (HTMLElement): The thing to tween
* `margin` (Object):
  * `top` (number): Add (or subtract) pixels to the top of the scrollable viewport.
  * `bottom` (number): Add (or subtract) pixels to the top of the scrollable viewport.
* `waypoints` (Array of `waypoint` objects): The styles the element should transition through during the tween.
  * `percent` (number): The percentage in the scroll experience where the styles should be fully transitioned.
  * `style`: (Object): A set of CSS properties in Javascript style indicating what the element should look like.
* `stepFunction` (function(percent)): A function that executes every time the tween updates.


**Tween.paint()**
Updates the tween to the interpolated state based on the current scroll.
