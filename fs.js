// import * as fs from "node:fs";
import * as fs from "node:fs/promises";

//  async function listItems(listpath = "./") {
//   const items = await fs.readdir(listpath, { withFileTypes: true });
//   console.log(items);
// }
// listItems();

// async function getFileInfo(filepath) {
//   const stats = await fs.stat(filepath);
//   return {
//     size: `${(stats.size / 1024).toFixed(2)} KB`,
//     created: stats.birthtime.toLocaleString(),
//   };
// }
// getFileInfo("./hero.txt").then((data) => {
//   console.log("data", data);
// });
// async function deleteFolder(folderpath) {
//   await fs.rm(folderpath, {recursive : true})
// }
// deleteFolder('./foldername')
// async function deleteFile (pathname) {
//   await fs.unlink(pathname)
// }
// deleteFile('./anyfile')

// async function readFile(pathname) {
//   const data = await fs.readFile(pathname, "utf-8");
//   console.log("data", data);
// }

// readFile("./hero.txt");

// async function createFolder(folderpath) {
//   await fs.mkdir(folderpath, { recursive: true });
// }

// async function createFile(pathname, contact = "") {
//   await fs.writeFile(pathname, contact);
// }
// createFolder("./contact/image/logo");
// async function createFile(pathname) {
//   try {
//     await fs.writeFile(pathname, "hello.js\n");
//     await fs.appendFile(pathname, "hello javascript");
//   } catch (error) {
//     console.log("err", err);
//   }

//   console.log("file has been created");
// }

// createFile("./hero.txt");
// function createFile(pathname) {
// fs.writeFileSync(pathname, "hello node.js\n");
// fs.appendFileSync(pathname, "hello javascript");
// console.log("file has been create");
// error first callback
//   fs.writeFile(pathname, "hello node.js\n", (err) => {
//     if (err) {
//       console.log("something went wrong while creating file");
//       return;
//     }

//     fs.appendFile(pathname, "hello javascript\n", (err) => {
//       if (err) {
//         console.log("something went wrong while creating file");
//         return;
//       }
//       console.log("file has been created");
//     });
//     console.log("file has been created");
//   });

//   console.log("file ooperation done");
// }

// createFile("./hello.txt");
