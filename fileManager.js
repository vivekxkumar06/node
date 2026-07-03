#!/usr/bin/env node

import * as readline from "node:readline/promises";
import * as fs from "node:fs/promises";

import chalk from "chalk";

import { stdin, stdout } from "node:process";
import { listItems } from "./fs.js";

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});
async function createFolder(pathname) {
  await fs.mkdir(pathname, { recursive: true });
}
async function createFile(pathname, content = "") {
  await fs.writeFile(pathname, content);
}
async function appendFile(pathname, content = "") {
  await fs.appendFile(pathname, content);
}
async function deleteFile(filepath) {
  await fs.unlink(filepath);
}

async function deleteFolder(folderpath) {
  await fs.rm(folderpath, { recursive: true });
}

async function menu() {
  console.clear();

  console.log(chalk.blue.bold(`\n 📁 file manager \n`));

  const options = [
    "Create Folder",
    "Create File",
    "Write File",
    "Delete File",
    "Delete Folder",
    "List Items",
    "Exit",
  ];
  options.forEach((opt, i) =>
    console.log(chalk.yellow(`${i + 1}.`) + " " + chalk.white(opt)),
  );

  const answer = await rl.question(chalk.cyan("\nSelect option:"));

  switch (answer) {
    case "1":
      const folderpath = await rl.question(chalk.cyan("Folder path:"));

      await createFolder(folderpath);

      console.log("Folder Created");
      break;

    case "2":
      const filepath = await rl.question(chalk.cyan("File path: "));

      const initialContent = await rl.question(chalk.cyan("Initial content"));

      await createFile(filepath, initialContent);

      console.log("file Created");
      break;

    case "3":
      const appendfilepath = await rl.question(chalk.cyan("File path: "));

      const appendContent = await rl.question(chalk.cyan(" content"));

      await appendFile(appendfilepath, `\n${appendContent}`);

      console.log("file Created");
      break;

    case "4":
      const deletefilepath = await rl.question(chalk.cyan("file to delete:"));
      await deleteFile(deletefilepath);

      console.log("file delete");
      break;

    case "5":
      const deletefolderpath = await rl.question(
        chalk.cyan("folder to delete:"),
      );
      await deleteFolder(deletefolderpath);

      console.log("folder delete");
      break;

    case "6":
      const listpath = await rl.question(
        chalk.cyan("Folder path (Enter for current): "),
      );

      const items = await listItems(listpath || "./");

      console.log("\nContents:");

      items.forEach((item) => {
        const icon = item.type == "folder" ? "📁 " : "📄";

        console.log(`${icon} ${chalk.yellow(item.name)}`);
      });
      break;

    case "7":
      rl.close();

      return;

    default:
      console.log(chalk.red("⚠️ Invaild options"));
  }

  await rl.question(chalk.green("\n press Enter to contiue...."));

  menu();
}

menu();
