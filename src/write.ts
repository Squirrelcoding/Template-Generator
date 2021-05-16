import {readFile, writeFile} from "fs";


export default function writeLocalFile(filename: string, readContent: any) {
  readFile(readContent, 'utf8' , (err: any, data: any) => {
    if (err) {
      console.error(err)
      return
    }

    writeFile(filename, data, (err: any) => {
      if (err) {
        console.error("failed to write file. Note: Currently, you can only write files to EXISTING directories!")
        console.log(err)
        return
      }

      console.log("File written successfully")
    })

  })



}