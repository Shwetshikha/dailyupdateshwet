//method --> Object
//function -> global (winddow, global)
// This refers to the object that is executing the current function//

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

// video.stop = function() {
//     console.log(this);
// }

// video.stop();

// install nodejs if this command is not running// // shifted to ubuntu //

// let x = 5;
// let y = 2;
// let z = x + y;{
//     console.log(z)
// }


// Constructor function//
function Video(title) {
    this.title = title;
    console.log(this);
}
const v = new Video('b');


// New function//
const shwet = {
    title: 'd',
    tags: ['d', 'b', 'c'],
        showTags() {
            this.tags.forEach(function(tag) {
                console.log(this.title, tag);
            }, this);
        }
    };
    shwet.showTags();
