import { detailedDiff } from 'deep-object-diff';

function log(storm) {
  storm.addMiddleware((next, prev, options) => {
    const difference = detailedDiff(prev, next);
    console.groupCollapsed('Event storm logger');

    console.group('%cAdded', 'color: green');
    console.log(difference.added);
    console.groupEnd();

    console.group('%cChanged', 'color: orange');
    console.log(difference.updated);
    console.groupEnd();

    console.group('%cDeleted', 'color:red');
    console.log(difference.deleted);
    console.groupEnd();

    console.group('%cPublish options', 'color:info');
    console.log(options);
    console.groupEnd();

    console.groupEnd();
  });
}

export default log;
