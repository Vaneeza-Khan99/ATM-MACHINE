#! /usr/bin/env node

import inquirer from "inquirer";

let totalBalance = 20000;
let mypin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
            name:"pin",
            message:"Enter your pin",
            type:"number"
        }
    ]
);
if (pinAnswer.pin === mypin) {
    console.log("Correct pin code!!!");

    let operationAns  = await inquirer.prompt(
        [
            {
                name:"operation",
                message:"Please select option",
                type:"list",
                choices:["withdraw", "check balance"]
            }
        ]
        );
        //console.log(operationsAns);

        if (operationAns.operation === "withdraw") {
            let amountAns = await inquirer.prompt(
                [
                    {
                        name:"amount",
                        message:"Enter your amount",
                        type:"number"
                    }
                ]
            );

            totalBalance -= amountAns.amount;

            console.log("Your remaining balance is:" +totalBalance)

        } else if (operationAns.operation === "check balance") {
            console.log("Your balance is: " + totalBalance)
        }
} 

else {console.log("Incorrect pin code");

}
