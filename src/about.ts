#!/usr/bin/env node
import * as figlet from "figlet"

figlet('Template Generator', function(err, data) {
  console.log(data)
  console.log("Template Generator is a CLI tool that helps you generate templates for new files!")
  console.log("Version: 1.0")
  console.log("Supported Languages: node, C, C++, Java and HTML.")
  console.log("Repository: https://github.com/Squirrelcoding/Template-Generator")
})