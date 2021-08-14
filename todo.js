// 1. ---todoList---
// ●aaa
// ●aaa
// ●aaa

// なにをしますか？
// 1.タスクを追加する 2.タスクを削除する 3.閉じる






const prompt = require('prompt-sync')();
// let add;

const todoList = [];
const menus = ["タスクを追加する", "タスクを削除する", "閉じる"]

while(true) {
    switch(start()){
        case "1":
            add();
            break;
        case "2":
            break;
        case "3":
            return;
        default:
            console.log("ちゃんと入力してよ〜ん( ；∀；)");
    }
}





function start() {
    console.log("\n----todo list----\n");
    if (todoList.length > 0) {
        todoList.forEach(li => {
            console.log("● " + li);
        });
    }
    console.log("\nなにをしますか？\n");
    for (i = 0, len = menus.length; i < len; i++){
        console.log((i+1) + ": " + menus[i]);
    }
    return prompt();
}




function add() {
    while(true) {
        const task = prompt('タスクを追加してください');
    
        console.log(`${task}を追加しました`);
    
        todoList.push(task);
    
        todoList.forEach(li => {
            console.log("● " + li);
        });

        const question = prompt("続けますか？ y/n")
        if(question=="y") {
        }else if (question == "n"){
            break
        }else {
            console.log("ちゃんと入力してよ〜ん( ；∀；)");
        }
    }


}






// while (true) {

//     add = prompt('タスクを追加しますか y/n');

//     if (add == "y") {
//         const name = prompt('タスクを追加してください');

//         console.log(`${name}を追加しました`);

//         todoList.push(name);
//         console.log(todoList);

//         todoList.forEach(li => {
//             console.log("● " + li);
//         });


//     } else if (add == "n") {
//         break;



//     } else {
//         console.log("ちゃんと入力してください y/n");
//     }


// }







// for (i=0; i<3; i++){
//     const name = prompt('to doを追加してください');
//     console.log(`${ name }を追加しました`);

//     todoList[i] = name;

//     todoList.forEach(li => {
//         console.log("● " + li);
//     });
// }