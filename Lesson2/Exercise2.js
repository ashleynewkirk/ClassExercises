const course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};
//Get the following values:
//Name of the course ('JavaScript Applications')
console.log(course.name);
//Name of the second teacher ('Shane')
console.log(course.teachers[1]);
//Name of the first student ('Steve')
console.log(course.students[0].name);
//Katy's computer type ('macbook')
console.log(course.students[1].computer.type);

//The preReq equipment object
console.log(course.preReqs.equipment);
//The second OSOption from equipment prereqs ('osx')
console.log(course.preReqs.equipment.OSOptions[1]);
//string listing the OSOptions separated by 'or' ('linux or osx') - Not sure about this one!
//console.log(course.preReqs.equipment.OSOptions[0] + ' or ' + course.preReqs.equipment.OSOptions.OSOptions[1]);
//An array of all the students that are using OSX.
if(course.students.computer.OS[0] == 'OSX'){
    console.log(course.students.name);
};
