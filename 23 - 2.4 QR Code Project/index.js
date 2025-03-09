/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';

import fs from 'fs';

import qr from 'qr-image';

inquirer.prompt(
    [{type: 'input', name: 'last_name', message: "Enter the URL you would like to convert to a QR code:"}]
  )
  .then((answers) => {
    fs.writeFile("message.txt", answers.last_name, (err) =>{
        if (err) throw err;
        console.log("The file has been saved!");
    });

    qr.image(answers.last_name, {type:'png'}).pipe(fs.createWriteStream('i_love_qr.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
    })
;