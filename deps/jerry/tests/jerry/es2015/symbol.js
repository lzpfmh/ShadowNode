/* Copyright JS Foundation and other contributors, http://js.foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var a = Symbol ("foo");
var b = Symbol ("bar");

assert (a !== b);
assert (a === a);
assert (typeof a === "symbol")
assert (a.toString() == "Symbol(foo)")

var o = { c : 10, d : 20};
o[a] = 5;
assert (o[a] == 5);

var counter = 0;

for (var v in o) {
  counter++;
}

assert (counter === 2);

var keys = Object.keys (o);
assert (keys.toString() === "c,d")
assert (keys.length === 2)

try {
  new Date (Symbol ("2018-11-09"));
  assert (false);
} catch (e) {
  assert (e instanceof TypeError)
}

try {
  a + "append_string";
  assert (false);
} catch (e) {
  assert (e instanceof TypeError)
}

assert (Object (a) == a)
assert (Object (a) !== a)


var a = Symbol.for ("foo");
var b = Symbol.for ("foo");

assert (a === b);
assert (a == b);

assert (Symbol.keyFor (a) === "foo")
assert (Symbol.keyFor (b) === "foo")
