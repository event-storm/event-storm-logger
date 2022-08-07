import { IStormState } from 'event-storm';

export function createStorm<T extends AnyObject>(data: T): IStorm<T>;
