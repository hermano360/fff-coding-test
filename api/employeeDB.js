const employeeIDs = [0,1,2,3,4,5,6,7,8,9,10,11]

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
  }
]


module.exports = {
  employeeIDs,
  profileInfoById: (id) =>{
    return profileInformation[id]
  },
  profileInformation
}
