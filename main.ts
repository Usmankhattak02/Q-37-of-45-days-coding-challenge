// Question 37. Large Shirts:
//  Modify the make_shirt() function so that shirts are large by default with a
// message that reads I love TypeScript. Make a large shirt and a medium shirt with the default
// message, and a shirt of any size with a different message.
function make_shirt(size:string = "large",message:string="I love TypeScript"){
    console.log(`Making a ${size} t-shirt with a message ${message} printed on it.`)
};
make_shirt();//dafualt lerge size and message
make_shirt("Medium");//dafualt message with dafualt size
make_shirt("small","i love codding")//costum message