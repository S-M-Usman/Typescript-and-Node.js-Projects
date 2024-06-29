#! /usr/bin/env node   
import inquirer from "inquirer";
let todoList: Array<string> =[];
async function todoFunction(todoList:string[]) {
    while (true) {
        
    
    console.log("welcome to my todo list app!");
    let user_input = await inquirer.prompt([
        {
         type:"list",
         name:"actions",
         message:"What do you want to do in the todo list?",
         choices : ["add ","remove","update","view","exit"] 
        }
    ]);
if (user_input.actions === "add ") {
    let add = await inquirer.prompt([
        {
            type:"input",
            name:"Add_todo",
            message:"what do you want to add in the list?"
        },
        {
            type:"confirm",
            name:"confirm",
            message:"Do you want to add more?",
            default:false
        }
    ]) 
    todoList.push(add.Add_todo);
    console.log(todoList);
    
    if (add.confirm) {
        continue;
    }
    else if (!add.confirm) {
        break;  
    }
   
}
else if (user_input.actions==="remove") {
    let remove = await inquirer.prompt([
        {
            type:"input",
            name:"remove_todo",
            message:"what do you want to remove from the list?"
        },{
            type:"confirm",
            name:"confirm",
            message:"Do you want to remove more?",
            default:false
        }
    ])
    todoList = todoList.filter((item) => item !== remove.remove_todo);
    console.log(todoList);
    if (remove.confirm) {
        continue;
    }
    else if (!remove.confirm) {
        break;
    }
}
else if (user_input.actions==="view") {
    console.log(todoList);
}
else if (user_input.actions==="update") {
    let update = await inquirer.prompt([
        {
            type:"list",
            name:"update_todo",
            message:"Select the todo you want to update",
            choices:todoList
        }
       
    ])
    let update_index = todoList.indexOf(update.update_todo);
    todoList[update_index] = await inquirer.prompt([
        {
            type:"input",
            name:"update_todo",
            message:"what do you want to update in the list?"
        }

    ]) 
}
else if (user_input.actions==="exit") {
    console.log("Thank you for using my todo list app!");
    process.exit();
    
}}
}
todoFunction(todoList);