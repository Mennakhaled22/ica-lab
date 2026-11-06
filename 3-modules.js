// every file in node is a module by default
// modules are encapsulated code (only share minimum)
// we can export and import them when needed
const names= require('./4-names');
const sayHi= require('./5-utils');
require('./7-mind-grenade');
sayHi("Menna");
sayHi(names.John);
sayHi(names.Peter);