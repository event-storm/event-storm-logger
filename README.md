# event-storm-logger
Simpler logger of event storm. Any updates will be visible in the console

## usage example

```js
import { log } from 'event-storm-logger';
import { createStorm } from 'event-storm';

const storm = createStorm({});

process.env.NODE_ENV === 'development' && log(storm);
```
