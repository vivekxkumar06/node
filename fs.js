// import * as fs from "node:fs";
import * as fs from "node:fs/promises";

async function deleteFolder(folderpath) {
  await fs.rm(folderpath, { recursive: true });
}

async function deleteFile(filepath) {
  await fs.unlink(filepath);
}

async function readFile(pathname) {
  const data = await fs.readFile(pathname, "utf-8");

  console.log("data", data);
}

async function createFolder(foldername) {
  await fs.mkdir(foldername, { recursive: true });
}

async function appendFile(pathname, content = "") {
  await fs.appendFile(pathname, content);
}

async function createFile(pathname, content = "") {
  await fs.writeFile(pathname, content);
}
createFile("./hello.txt", "hello.js\n");

async function getFileInfo(filepath) {
  const stats = await fs.stat(filepath);
  console.log(stats);
}

getFileInfo("./hello.txt");

// deleteFolder("./contents/images/logos");
// deleteFile("./hello.txt");
// createFolder("./contents/images/logos");
// readFile("./hello.txt");

// async function createFile(pathname) {
//   try {
//     await fs.writeFile(pathname, "hello.javascript\n");
//     await fs.appendFile(pathname, "hello.js");
//   } catch (error) {
//     console.log("err", err);
//   }

//   console.log("file writting!");
// }
// createFile("./hello.txt");

// function createFile(pathname) {
// promises
// sync
//   fs.writeFileSync(pathname, "Hello node.js!\n");
//   fs.appendFileSync(pathname, "hello javascript");
// async
// Error first callbacks
//   fs.writeFile(pathname, "Hello node.js!\n", (err) => {
//     if (err) {
//       console.log("file not created");
//       return;
//     }
//     console.log("File has been created asynchrounes");
//   });
//   fs.appendFile(pathname, "Hello node.js javascript", (err) => {
//     if (err) {
//       console.log("file not created");
//       return;
//     }
//     console.log("File has been created asynchrounes");
//   });
//   console.log("file operation done!");
// }

// createFile("./hello.txt");
