let stars = Math.floor(Math.random() * 100);

const isGreaterThan40 = stars > 40;

if (isGreaterThan40) {
  // true path
  console.log("thats great!", stars);
} else {
  // false path
  console.log("bad luck!", stars);
}

if (stars > 40) {
  // true path
  console.log("thats great!", stars);
} else if (stars < 10) {
  // second true path
  console.log("bad luck!", stars);
} else {
  // false path
  console.log("Nothing special", stars);
}

// Type Coersion
// "truthy" values
("asdfasdfasdf");
234983;
true;
{
}
[];

// "falsy" values
("");
0;
null;
undefined;
false;
