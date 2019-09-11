
import { GetOrElseC, Monadical } from './index';
import curry from './curry';

const getOrElseC: GetOrElseC = curry(<T>(val: T, container: Monadical<T>) => container.getOrElse(val));

export default getOrElseC;
