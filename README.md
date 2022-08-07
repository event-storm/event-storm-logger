[![publish](https://github.com/event-storm/event-storm-logger/actions/workflows/publish.yml/badge.svg)](https://github.com/event-storm/event-storm-logger/actions/workflows/publish.yml)
# event-storm-logger
Simple logger of event storm. Any updates will be visible in the console

## Usage Example
Note: use the logger for development purposes
```js
import { log } from 'event-storm-logger';
import { createStorm } from 'event-storm';

const storm = createStorm({});

process.env.NODE_ENV === 'development' && log(storm);
```

The output will look like this:
![Event storm log output example](https://github.com/event-storm/event-storm-logger/blob/main/images/output.png?raw=true)

Happy hacking :paw_prints:.
