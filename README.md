Here is my deployed![site](https://saraiba33.github.io/js-modules-exercise/)
# JavaScript Modules Exercise

* Add a folder called `utilities`
* In this folder, add a file called `difference.js`
* In this file, import the function `difference` from the [`lodash`](https://www.npmjs.com/package/lodash) package on npm. Note that you'll also need to set up a node project and install Lodash for this to work.
* Write a function that accepts two arrays, and uses the `difference` function to return the string "The difference between `[1, 2, 3]` and `[2, 3, 4]` is `[1, 4]`", where `[1, 2, 3]` is taken from the contents of the first array, `[2, 3, 4]` is taken from the contents of the second array, and `[1, 4]` is the taken from the result of passing the two arrays into `difference`.
* Export this function as a default export.
* In the existing `index.js` file, import this function.
* Use the function to get the difference string for the two arrays included there. Put this string in the element in `index.html` with the id of "target."
* Use [Parcel](https://parceljs.org/) or another module bundler to serve up the site.
