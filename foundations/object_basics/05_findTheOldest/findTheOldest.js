const findTheOldest = function(people) {

    let older = [0, {}];

    people.map((person) => {

        let yearOfDeath = 0;

        if (!person.yearOfDeath) {

            const year = new Date();
            yearOfDeath = year.getFullYear();

        } else {

            yearOfDeath = person.yearOfDeath;

        }

        if (yearOfDeath - person.yearOfBirth > older[0]) {
            older[0] = yearOfDeath - person.yearOfBirth;
            older[1] = person;
        }

    })

    return older[1];

};

// Do not edit below this line
module.exports = findTheOldest;
