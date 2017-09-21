const employeeIDs = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]

const profileInformation = [
  {
    pictureUrl: 'headshot0',
    name: "Albert Sample",
    description: "Accounting"
  },
  {
    pictureUrl: 'headshot1',
    name: "Bob Sample",
    description: "Builder"
  },
  {
    pictureUrl: 'headshot2',
    name: "Carl Sample",
    description: "Cat Walker"
  },
  {
    pictureUrl: 'headshot3',
    name: "Doug Sample",
    description: "Doctor"
  },
  {
    pictureUrl: 'headshot4',
    name: "Evan Sample",
    description: "Entertainer"
  },
  {
    pictureUrl: 'headshot5',
    name: "Francis Sample",
    description: "Fighter"
  },
  {
    pictureUrl: 'headshot6',
    name: "George Sample",
    description: "Gourmet Chef"
  },
  {
    pictureUrl: 'headshot7',
    name: "Herminio Garcia",
    description: "Front-End Developer"
  },
  {
    pictureUrl: 'headshot8',
    name: "Ingrid Sample",
    description: "Inchworm"
  },
  {
    pictureUrl: 'headshot9',
    name: "Jake Sample",
    description: "Jailer"
  },
  {
    pictureUrl: 'headshot10',
    name: "Kyle Sample",
    description: "Karate Man"
  },
  {
    pictureUrl: 'headshot11',
    name: "Laura Sample",
    description: "Lawyer"
  },
  {
    pictureUrl: 'headshot0',
    name: "Albert Sample1",
    description: "Accounting"
  },
  {
    pictureUrl: 'headshot1',
    name: "Bob Sample1",
    description: "Builder"
  },
  {
    pictureUrl: 'headshot2',
    name: "Carl Sample1",
    description: "Cat Walker"
  },
  {
    pictureUrl: 'headshot3',
    name: "Doug Sample1",
    description: "Doctor"
  },
  {
    pictureUrl: 'headshot4',
    name: "Evan Sample1",
    description: "Entertainer"
  },
  {
    pictureUrl: 'headshot5',
    name: "Francis Sample1",
    description: "Fighter"
  },
  {
    pictureUrl: 'headshot6',
    name: "George Sample1",
    description: "Gourmet Chef"
  },
  {
    pictureUrl: 'headshot7',
    name: "Herminio Garcia1",
    description: "Front-End Developer"
  },
  {
    pictureUrl: 'headshot8',
    name: "Ingrid Sample1",
    description: "Inchworm"
  },
  {
    pictureUrl: 'headshot9',
    name: "Jake Sample1",
    description: "Jailer"
  },
  {
    pictureUrl: 'headshot10',
    name: "Kyle Sample1",
    description: "Karate Man"
  },
  {
    pictureUrl: 'headshot11',
    name: "Laura Sample1",
    description: "Lawyer"
  },
  {
    pictureUrl: 'headshot0',
    name: "Albert Sample2",
    description: "Accounting"
  },
  {
    pictureUrl: 'headshot1',
    name: "Bob Sample2",
    description: "Builder"
  },
  {
    pictureUrl: 'headshot2',
    name: "Carl Sample2",
    description: "Cat Walker"
  },
  {
    pictureUrl: 'headshot3',
    name: "Doug Sample2",
    description: "Doctor"
  },
  {
    pictureUrl: 'headshot4',
    name: "Evan Sample2",
    description: "Entertainer"
  },
  {
    pictureUrl: 'headshot5',
    name: "Francis Sample2",
    description: "Fighter"
  },
  {
    pictureUrl: 'headshot6',
    name: "George Sample2",
    description: "Gourmet Chef"
  },
  {
    pictureUrl: 'headshot7',
    name: "Herminio Garcia2",
    description: "Front-End Developer"
  },
  {
    pictureUrl: 'headshot8',
    name: "Ingrid Sample2",
    description: "Inchworm"
  },
  {
    pictureUrl: 'headshot9',
    name: "Jake Sample2",
    description: "Jailer"
  },
  {
    pictureUrl: 'headshot10',
    name: "Kyle Sample2",
    description: "Karate Man"
  },
  {
    pictureUrl: 'headshot11',
    name: "Laura Sample2",
    description: "Lawyer"
  }
]


module.exports = {
  employeeIDs,
  profileInfoById: (id) =>{
    return profileInformation[id]
  },
  profileInformation
}
