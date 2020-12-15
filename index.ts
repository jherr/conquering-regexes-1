import * as chalk from "chalk";

import numbers from "./numbers";
import good from "./good";

// Filter out just the 503 phone numbers
const phoneRe = /^(\(\d{3}\)|\d{3})-\d{3}-\d{4}$/;
const phones = numbers.filter(
  (phone) => phone.match(phoneRe)?.[1].replace(/[()]/g, "") === "503"
);

// Print out the results
console.clear();
numbers.forEach((number) => {
  const passedRegex = phones.includes(number);
  const shouldInclude = good.includes(number);
  const color = passedRegex && shouldInclude ? chalk.green : chalk.red;
  console.log(
    `${shouldInclude ? "✅" : "🚫"} : ${passedRegex ? "✅" : "🚫"} : ${color(
      number
    )}`
  );
});
