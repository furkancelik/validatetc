#!/usr/bin/env node
const inquirer = require("inquirer");
const validateTC = require(".");

async function askQuestion() {
  console.log(`
#    #   ##   #      # #####    ##   ##### ###### #####  ####  
#    #  #  #  #      # #    #  #  #    #   #        #   #    # 
#    # #    # #      # #    # #    #   #   #####    #   #      
#    # ###### #      # #    # ######   #   #        #   #      
 #  #  #    # #      # #    # #    #   #   #        #   #    # 
  ##   #    # ###### # #####  #    #   #   ######   #    ####  

`);

  console.log(
    "\x1b[31m%s\x1b[0m",
    "\nProgramdan çıkmak için CTRL+C / Control+C tuş kombinasyonunu kullanın. \n"
  );

  const question = [
    {
      type: "input",
      name: "tc",
      message: "✏️ Tc No giriniz:",
    },
  ];

  while (true) {
    const answers = await inquirer.prompt(question);
    if (validateTC(answers.tc)) {
      console.log(`✅Geçerli TC No ${answers.tc}`);
    } else {
      console.log(`❌Geçersiz TC No! ${answers.tc}`);
    }
  }
}

askQuestion();
