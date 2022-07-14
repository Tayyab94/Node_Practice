const fs = require("fs");

const path = require("path");

const dirPath = path.join(__dirname, "files");

// Wirte the files in the perticuler directory

// for (let index = 0; index < 2; index++) {
//   fs.writeFileSync(
//     `${dirPath}/hello_${index}.txt`,
//     `Welcome Tayyab Bhatti - ${index}`
//   );
// }

// // reading the Files from the Direactory
// fs.readdir(dirPath, (err, files) => {
//   //   console.log(files);
//   files.forEach((file) => {
//     // checking, if the file Exist then Appending the data into the file
//     if (file == "hello_0.txt") {
//       fs.appendFile(
//         `${dirPath}/${file}`,
//         " doing a job as a .NET developer",
//         (err) => {
//           if (!err) console.log("file Is Updated");
//         }
//       );
//     }
//   });
// });

// reading the Files from the Direactory
// fs.readdir(dirPath, (err, files) => {
//   //   console.log(files);
//   files.forEach((file) => {
//     if (file == "hello_0.txt") {
//       fs.readFile(`${dirPath}/${file}`, "utf8", (err, read) => {
//         console.log(read);
//       });
//     }
//   });
// });

// reading the Files from the Direactory
fs.readdir(dirPath, (err, files) => {
  //   console.log(files);
  files.forEach((file) => {
    // checking, if the file Exist then Appending the data into the file
    if (file == "hello_0.txt") {
      fs.unlink(`${dirPath}/${file}`, (err) => {
        if (!err) {
          console.log("Fie has been deleted Successfully!");
        }
      });
    }
  });
});
// fs.readFile(`${dirPath}/hello_0.txt`, "utf8", (err, read) => {
//   console.log(read);
// });
