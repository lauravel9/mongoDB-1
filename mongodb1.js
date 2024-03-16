db.createCollection('users')

db.users.insertMany([
    
{
    name: 'laura',
    lastname: 'ruiz',
    email: 'lauraruiz@gmail.com',
    city: 'florencia',
    country: 'italia',
    salary: 4000,
    age: 21,
    height: 160,
    weight: 60
},

{
    name: 'kevin',
    lastname: 'molina',
    email: 'kevinmolina@gmail.com',
    city: 'paris',
    country: 'francia',
    salary: 4000,
    age: 19,
    height: 175,
    weight: 65
},

{
    name: 'mateo',
    lastname: 'velez',
    email: 'mateovelez@gmail.com',
    city: 'buenos aires',
    country: 'argentina',
    salary: 1200,
    age: 24,
    height: 180,
    weight: 90
},

{
    name: 'samantha',
    lastname: 'rojas',
    email: 'samantharojas@gmail.com',
    city: 'londres',
    country: 'inglaterra',
    salary: 3000,
    age: 26,
    height: 185,
    weight: 70
},

{
    name: 'mariana',
    lastname: 'carmona',
    email: 'marianacarmona@gmail.com',
    city: 'rio de janeiro',
    country: 'brasil',
    salary: 1000,
    age: 23,
    height: 175,
    weight: 65
},

{
    name: 'pepe',
    lastname: 'castro',
    city: 'berlin',
    country: 'alemania',
    salary: 2000,
    age: 22,
    height: 170,
    weight: 75
},

{
    name: 'daniel',
    lastname: 'perez',
    email: 'danielperez@gmail.com',
    city: 'tokyo',
    country: 'japon',
    salary: 2000,
    age: 19,
    height: 175,
    weight: 65
},

{
    name: 'santiago',
    lastname: 'bermudez',
    email: 'santiagobermudez@gmail.com',
    city: 'guadalajara',
    country: 'mexico',
    salary: 800,
    age: 23,
    height: 175,
    weight: 55
},

{
    name: 'juliana',
    lastname: 'ortiz',
    email: 'julianaortiz@gmail.com',
    city: 'paris',
    country: 'francia',
    salary: 1200,
    age: 29,
    height: 173,
    weight: 70
},

{
    name: 'duvan',
    lastname: 'mejia',
    city: 'munich',
    country: 'alemania',
    salary: 4000,
    age: 37,
    height: 185,
    weight: 105
},

{
    name: 'valeria',
    lastname: 'reyes',
    email: 'valeriareyes@gmail.com',
    city: 'ottawa',
    country: 'canada',
    salary: 1500,
    age: 46,
    height: 185,
    weight: 120
},

{
    name: 'juan pablo',
    lastname: 'torres',
    email: 'juanpablotorres@gmail.com',
    city: 'londres',
    country: 'inglaterra',
    salary: 3000,
    age: 35,
    height: 180,
    weight: 70
},

{
    name: 'carolina',
    lastname: 'trujillo',
    city: 'toronto',
    country: 'canada',
    salary: 2000,
    age: 25,
    height: 185,
    weight: 70
},

{
    name: 'jhoan',
    lastname: 'sanchez',
    email: 'jhoansanchez@gmail.com',
    city: 'sydney',
    country: 'australia',
    salary: 2000,
    age: 20,
    height: 175,
    weight: 150
},

{
    name: 'sebastian',
    lastname: 'valencia',
    email: 'sebastianvalencia@gmail.com',
    city: 'sevilla',
    country: 'españa',
    salary: 4000,
    age: 26,
    height: 185,
    weight: 70
},

{
    name: 'felipe',
    lastname: 'ramirez',
    email: 'feliperamirez@gmail.com',
    city: 'roma',
    country: 'italia',
    salary: 1000,
    age: 27,
    height: 180,
    weight: 75
},

{
    name: 'alejo',
    lastname: 'sanchez',
    email: 'alejosanchez@gmail.com',
    city: 'valencia',
    country: 'españa',
    salary: 4000,
    age: 30,
    height: 175,
    weight: 70
},

{
    name: 'andres',
    lastname: 'valdez',
    email: 'andresvaldez@gmail.com',
    city: 'toronto',
    country: 'canada',
    salary: 4500,
    age: 25,
    height: 165,
    weight: 70
},

{
    name: 'matias',
    lastname: 'fernandez',
    email: 'matiasfernandez@gmail.com',
    city: 'santiago',
    country: 'chile',
    salary: 1000,
    age: 22,
    height: 165,
    weight: 70
},

{
    name: 'matias',
    lastname: 'fernandez',
    email: 'matiasfernandez@gmail.com',
    city: 'sao paulo',
    country: 'brasil',
    salary: 1000,
    age: 22,
    height: 165,
    weight: 130
},

{
    name: 'samuel',
    lastname: 'rios',
    city: 'Mumbai',
    country: 'india',
    age: 32,
    height: 176,
    weight: 75
},

{
    name: 'isabella',
    lastname: 'patiño',
    city: 'Medellin',
    country: 'colombia',
    age: 27,
    height: 170,
    weight: 65
},

]);




//1
db.users.find({age: {$gt: 18}});
//2
db.users.find({$or: [{city: {$eq: 'londres'}}, {city: {$eq: 'paris'}}]});
//3
db.users.find({$and: [{salary: {$gt: 2000}}, {age: {$lt: 30}}]});

//4
db.users.find({$and: [{country: {$eq: 'españa'}}, {salary: {$gt: 3000}}]});
//5
db.users.find({$and: [{age: {$gt: 25}}, {age: {$lt: 35}}]});
//6
db.users.find({country: {$ne: 'estados unidos'}});
//7
db.users.find({city: {$eq: 'londres'}, $or:[{salary: {$gt: 2500}}, {age: {$gt: 30}}]});
//8
db.users.find({$and: [{country: {$eq: 'australia'}}, {weight: {$gt: 140}}]});
//9
db.users.find({$and: [{city: {$ne: 'londres'}}, {city: {$ne: 'paris'}}]});
//10
db.users.find({$or: [{salary: {$lt: 2000}}, {age: {$gt: 40}}]});
//11
db.users.find({country: {$eq: 'canada'}, $or:[{salary: {$gt: 4000}}, {height: {$gt: 180}}]});
//12
db.users.find({country: {$eq: 'italia'}, $and:[{age: {$gt: 20}}, {age: {$lt: 30}}]});
//13
db.users.find({email: {$exists: false}});
//14
db.users.find({country: {$eq: 'francia'}, $and: [{salary: {$gt: 3000}}, {salary: {$lt: 5000}}]});
//15
db.users.find({country: {$eq: 'brasil'}, $and: [{weight: {$lt: 120}}, {salary: {$gt: 140}}]});
//16
db.users.find({age: {$lt: 25}, $or: [{country: {$eq: 'argentina'}}, {country: {$eq: 'chile'}}]});
//17
db.users.find({salary: {$lt: 3000}, $and: [{country: {$ne: 'españa'}}, {country: {$ne: 'mexico'}}]});
//18
db.users.find({country: {$eq: 'alemania'}, $or: [{salary: {$lt: 4000}}, {age: {$lt: 35}}]});
//19
db.users.find({and: [{country: {$ne: 'colombia'}}, {height: {$lt: 170}}]});
//20
db.users.find({and: [{country: {$eq: 'india'}}, {email: {$exists: false}}]});
