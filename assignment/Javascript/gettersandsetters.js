
const person = {
    firstName: 'Shwet',
    lastName: 'Shikha',

    }
    console.log(person.firstName + " " + person.lastName)

    const name = {
        firstName: 'Shwet',
        lastName: 'Shikha',
        fullName() {
            return `${person.firstName} ${person.lastName}`
         }

    };
    console.log('${name.firstName} ${name.lastName}')

    // setters and getters//
    // const per = {
    //     oneName: 'Manvi',
    //     secondName: 'Kapoor',
    //     goodName() {
    //         return`${per.oneName} ${per.secondName}`
    //     },
    //     set myName(value){
    //         const parts = value.split(' ');
    //         this.oneName = parts[0];
    //         this.secondName = parts[1];

    //     }
    // };
    //  console.log(per.goodName());
    //  console.log(goodName);


    // Error Handlling//


    const people = {
        oneName: 'Manvi',
        secondName: 'Kapoor',
        set allName(value) {
            
            if (typeof value !== 'string') return;
            throw new Error('Value is not String.');

            const parts = value.split(' ');
            this.oneName = parts[0];
            this.secondName = parts[1];
        }
    };

    try {
        people.oneName
    }
    people.allName = null;
    console.log(people);