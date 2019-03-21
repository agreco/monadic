
import test from "ava";
import alt from '../src/alt';

test('left path', t => t.is(alt(x => x += 1, x => x -= 1)(0), 1));

test('right path', t => t.is(alt(x => x, x => x += 1)(0), 1));
