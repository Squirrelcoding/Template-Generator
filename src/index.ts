#!/usr/bin/env node

import {prompt} from "inquirer"
import writeLocalFile from "./write"
import {join} from "path"

prompt([
  {
    name: "choice",
    message: "What would you like to generate?",
    type: "list",
    choices: ["Basic HTML page", "Node file (express)", "Basic Java File", "Basic C++ File", "Basic C File"]
  },
  {
    name: "filename",
    message: "What will you name the file?",
    type: "input"
  }
])
.then(function (answer: any): void {
  var path: string = answer.choice;
    switch (path) {
      case "Basic HTML page":
        path = join("../examples/other/html1.html")
        break;
      case "Node file (express)":
        path = join("../examples/node/express1.js")
        break
      case "Basic Java File":
        path = join("../examples/other/java1.java")
        break
      case "Basic C++ File":
        path = join("../examples/C-languages/cpp1.cpp")
        break
      case "Basic C File":
        path = join("../examples/C-languages/c1.c")
        break
    }
  console.log(answer.choice)
  console.log(path)
  writeLocalFile(answer.filename, path);
});