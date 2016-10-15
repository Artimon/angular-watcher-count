# Angular Watcher Count

- Having more than 2,000 active watchers is considered as "bad smell".
- Now as we know that, how do we find it out?

With angular watcher count you can find out!

**Features**
- Reads out all watcher of elements that are part of the dom.

### 2 Steps Setup & HowTo

**1. Include Watcher Count Module**

Include watcher-count.js after angular.js and before your app code as this example shows.

```html
<script type='text/javascript' src="vendor/angular.min.js"></script>
<script type='text/javascript' src="vendor/angular-pads/watcher-count.js"></script>
<script type='text/javascript' src="app/app.js"></script>
```

**2. Add Watcher Count To Your App**

Simply add **pads.watcherCount** to your app depenencies.

```js
var myApp = angular.module('myApp', ['pads.watcherCount']);
```

**Usage**

You are ready to use the watcher count for your modules.

```js
angular.module('myApp').controller('MyCtrl', function ($scope, padsWatcherCount) {
    // Simply call the directive at any time you want to get the global watcher count.
    console.log(
        padsWatcherCount()
    );
});
```

License
----

MIT


**Free Software for your enjoyment!**