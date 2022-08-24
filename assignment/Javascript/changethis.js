// Changing the value of "this"//
// "this" references to the object which is executing the current function"//


const shwet = {
    title: 'shwet',
    tags: ['shikha', 'Karn', 'Singh'],
    showTags() {
        const self = this;                //here self has been declared as local//
        this.tags.forEach(function(tag) {
            console.log(self.title, tag);
        });
    }
};

// shwet.showTags();

// 
function playVideo() {
    console.log(this);
}
playVideo.call({ name: 'Shwet Shikha' }, 1, 2);
playVideo.apply({ name: 'Shwet' }, [1, 2, 3]);    
// const fn = 
playVideo.bind({ name: 'Shikha' })();                                                                         //the call method//
playVideo();                               // this is called as window object


//The use of "bind" for returning title along with tags //
const one = {
    title: 'some',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }.bind(this));

    }
};
one.showTags();

//smaller syntax
//without the bind function//
// Use of error function//

const two = {
    title: 'some',
    tags: ['d', 'e', 'f'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });

    }
};
two.showTags();


