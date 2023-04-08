'use strict';

const { watch, promises: { readFile } } = require('fs')

class File {
   watch(event, filename) {
        console.log('this', this)
        console.log('arguments', Array.prototype.slice.call(arguments))
        this.showContent(filename)
    }

    async showContent(filename) {
        console.log((await readFile(filename)).toString())
    }
}

const file = new File()
// on this way, it will ignore the 'this' from File class and get the 'this' from the watch.
// watch(__filename, file.watch)

// to avoig get the 'this' form the function
// watch(__filename, (event, filename) => file.watch(event, filename))
// kind of ugly, uhn?

// we could make the context explicit 
// the 'bind' return one function with 'this', ignoring the 'watch'
watch(__filename, file.watch.bind(file))

// the difference between them is:
// in the first you will pass the arguments as an array and in the other as a list of arguments
file.watch.call({ showContent: () => console.log('call: hey sinon!') }, null, __filename )
file.watch.apply({ showContent: () => console.log('apply: hey sinon!') }, [null, __filename] )
