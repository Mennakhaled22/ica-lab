// globals in node can be accessed through any place.
// there are few of them like __dirname, __filename, require, module, process
// they are not part of the window object like in the browser


console.log(__dirname);
console.log(__filename);
setInterval(() => {
    console.log("Hello World");
},1000);