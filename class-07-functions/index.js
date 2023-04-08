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
watch(__filename, file.watch.bind(file))

// a diferenca entre um e outro, é que um vc passa os argumentos como array e outro uma lista de argumentos
file.watch.call({ showContent: () => console.log('call: hey sinon!') }, null, __filename )
file.watch.apply({ showContent: () => console.log('apply: hey sinon!') }, [null, __filename] )