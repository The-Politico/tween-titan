# tween-titan 🦹‍♀️🦸‍♂️
**tl;dr:** A small-but-mighty vanilla Javascript library for interpolating an element's style based on the user's scroll.

See the fuller, flashier explanation at [tween-titan.app](https://tween-titan.app).

If you're using React, we've also built a library called [react-tween-titan](https://github.com/the-politico/react-tween-titan/).

## Usage
Tween-titan can be imported as a module:

```
import { TweenSelf, TweenWaypoints } from 'tween-titan';
```

Or it can be used on an HTML page as a script.

```
<script src="http://unpkg.com/tween-titan"></script>
<script type="text/javascript">
  const { TweenSelf, TweenWaypoints } = TweenTitan;
  ...
</script>
```

## API reference
### TweenSelf({ options })
Tweens an element based on its own vertical position in the user's viewport.

Returns a `Tween` object.

#### Options
* `target` (HTMLElement) (**required**): The thing you want to tween
* `margin` (Object):
  * `top` (number): Add (or subtract) pixels to the top of the scrollable viewport.
  * `bottom` (number): Add (or subtract) pixels to the bottom of the scrollable viewport.
* `waypoints` (Array of `waypoint` objects):
  * `percent` (number): The percentage in the scroll experience where the styles should be fully transitioned.
  * `style`: (Object): A set of CSS properties in Javascript style indicating what the element should look like.
* `stepFunction` (function(percent, style, target)): A function that executes every time the tween updates.

### TweenWaypoints({ options })
Tweens an element based on the position of separate waypoint elements relative to the viewport.

Returns a `Tween` object.

#### Options
* `target` (HTMLElement) (**required**): The thing you want to tween
* `margin` (number): The number of pixels above (or below) the position of each waypoint that the tween should start.
* `waypoints` (Array of `waypoint` objects) (**required**):
  * `elem` (HTMLElement): The waypoint element
  * `style`: (Object): A set of CSS properties in Javascript style indicating what the element should look like.
* `stepFunction` (function(percent, style, target)): A function that executes every time the tween updates.

### The `Tween` object
#### Methods
- `Tween.destroy()`: Removes all listeners associated with a tween.
- `Tween.refresh()`: Manually paints the tween in the proper state depending on user scroll position.

## Examples

### A simple spinning square
As you scroll down the page, a red square spins. ([Codepen](https://codepen.io/arm5077/pen/oNooLQY?editors=1111))

```
<html>
  <style type='text/css'>
    .runway {
      height: 150vh;
    }

    .square {
      margin-top: 100vh;
      width: 50px;
      height: 50px;
      background-color: red;
    }
  </style>
  <body>
    <div class='runway'>
      <div class='square'></div>
    </div>
  </body>
  <script src="http://unpkg.com/tween-titan"></script>
  <script type="text/javascript">
    const { TweenSelf } = TweenTitan;

    const target = document.querySelector('.square');
    const tween = TweenSelf.create({
      target,
      waypoints: [
        {
          percent: 0,
          style: { transform: 'rotate(0deg)' }
        },
        {
          percent: 1,
          style: { transform: 'rotate(360deg)' }
        }
      ],
    });
  </script>
</html>
```

### Same square, but keyed to waypoints
The red square, now stuck in the center of your screen, spins in different directions depending on which waypoint you've run through. ([Codepen](https://codepen.io/arm5077/pen/wvPPWRx?editors=1111))

```
<html>
  <style type='text/css'>
    .runway {
      height: 300vh;
    }

    .waypoint {
      margin-top: 100vh;
      width: 100%;
      border-top: 1px dashed black;
    }

    .square {
      width: 50px;
      height: 50px;
      position: fixed;
      top: calc(50vh - 25px);
      left: calc(50vw - 25px);
      background: red;
    }
  </style>
  <body>
    <div class='runway'>
      <div class='square'></div>
      <div class='waypoint' id='waypoint-1'></div>
      <div class='waypoint' id='waypoint-2'></div>
      <div class='waypoint' id='waypoint-3'></div>
    </div>
  </body>
  <script src="http://unpkg.com/tween-titan"></script>
  <script type="text/javascript">
    const { TweenWaypoints } = TweenTitan;

    const target = document.querySelector('.square');
    const waypoint1 = document.querySelector('#waypoint-1');
    const waypoint2 = document.querySelector('#waypoint-2');
    const waypoint3 = document.querySelector('#waypoint-3');
    const tween = TweenWaypoints.create({
      target,
      waypoints: [
        {
          elem: waypoint1,
          style: { transform: 'rotate(0deg)' }
        },
        {
          elem: waypoint2,
          style: { transform: 'rotate(360deg)' }
        },
        {
          elem: waypoint3,
          style: { transform: 'rotate(0deg)' }
        },
      ],
    });
  </script>
</html>
```
