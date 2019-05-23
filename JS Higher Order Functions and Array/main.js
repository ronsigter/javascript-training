const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// // for
// // for(let i = 0; i<companies.length; i++){
// //   console.log(companies[i]);
// // }

// // forEach - loop through array. does not return anything
// // companies.forEach(function(company){
// //   console.log(company.name);
// // });

// // filter - filtering inside the array
// // A. Filter Can Drink
// // ==USING FOR LOOP
// // let canDrink = [];
// // for(let i = 0; i < ages.length; i++){
// //   if(ages[i] >= 22){
// //     canDrink.push(ages[i]);
// //   }
// // }
// // console.log(canDrink);
// // ==USING FILTER ES6
// // const canDrink = ages.filter(function(age){
// //   if(age>=21){
// //     return true;
// //   }
// // })
// // console.log(canDrink);
// // ==USING ARROW FUNCTION
// const canDrink = ages.filter(age => age>=21);
// // console.log(canDrink);

// // B. Filter retail companies
// // ==USING FILTER ES6
// // const retailCompanies = companies.filter(function(company){
// //   if(company.category === 'Retail'){
// //     return true;
// //   }
// // });
// // console.log(retailCompanies);
// // ==USING ARROW FUNCTION
// const retailCompanies = companies.filter(company => company.category === 'Retail');
// // console.log(retailCompanies);

// // C. Filter 80's Company
// const eightiesCompanies = companies.filter(company =>
//   (company.start >= 1980 && company.start <= 1990));
// // console.log(eightiesCompanies);

// // D. Laster 10 years or more
// const lastedTenYears = companies.filter((company) => (
//   company.end - company.start >= 10
// ));
// // console.log(lastedTenYears);


// // map - create new arrays from the current array while filtering
// // A. Create array of company names
// const companyNames = companies.map(function(company){
//   return company.name;
// });
// // console.log(companyNames);
// // B. Create array of Company names that shows its start and end year
// const companyNamesWithDates = companies.map(company => (
//   `${company.name} : ${company.start}-${company.end}`
// ));
// // console.log(companyNamesWithDates);
// // C. Square-Root of ages
// const agesSquare = ages.map(age => Math.sqrt(age));
// // console.log(agesSquare);
// // D. Ages x 2
// const agesTimesTwo = ages.map(age => 2*age);
// // console.log(agesTimesTwo);
// // E. Sqr first then multiply by 2
// const ageSqrThenMult = ages
//   .map(age => Math.sqrt(age))
//   .map(age => age*2);
// // console.log(ageSqrThenMult);

// // sort
// // A. Sort Companies by Start Year
// // const sortedCompanies = companies.sort(function(c1, c2){
// //   if(c1.start > c2.start){
// //     return 1;
// //   } else {
// //     return -1;
// //   }
// // });

// const sortedCompanies = companies.sort((a, b) => (
//   a.start > b.start ? 1 : -1
// ));
// // console.log(sortedCompanies);

// // B. Sort Ages
// const sortAges = ages.sort((a, b) => a-b);
// // console.log(sortAges);

// // reduce
// // let ageSum = 0;
// // for(let i=0; i<ages.length; i++){
// //   ageSum += ages[i];
// // }

// // const ageSum = ages.reduce(function(total,age){
// //   return total + age;
// // }, 0);
// // console.log(ageSum);
// const ageSum = ages.reduce((total, age) =>
//   total + age, 0
// );
// // console.log(ageSum);

// // Get total years for all companies
// // const totalYears = companies.reduce(function(total, company){
// //   return total + (company.end - company.start);
// // }, 0)
// // console.log(totalYears);

// const totalYears = companies.reduce((total, company) =>
//   total + (company.end - company.start), 0);
// // console.log(totalYears);


// COMBINE METHODS
const combined = ages
  .map(age => age*2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined)

