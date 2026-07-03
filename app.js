console.log("hello node.js!");
// console.log(process);
// console.log(process.argv);
console.log(process.argv[2], process.argv[3]);

// const greet = require(`./greet`);
// import greet from "./greet.js";

// const name = process.argv[2];

// const hours = new Date().getHours();

// // console.log(`hours`, hours);

// const greets = greet(hours);

// console.log(`${greets},${name}!`);

// Node.js me ek built-in OS module hota hai jo tumhare computer (Operating System) ki information deta hai.

// import os from "node:os";
// console.log(`CPUS`, os.cpus().length);
// console.log(`Total Memory`, os.totalmem() / (1024 * 1024 * 1024)); // Gb
// console.log(`Free Memory`, os.freemem() / (1024 * 1024)); // Mb
// console.log(`Uptime`, os.uptime() / (60 * 60)); // hours
// console.log(`Hostname`, os.hostname());
// console.log(`User info`, os.userInfo());
// console.log(`Machine`, os.machine());
