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


while (true) {
    switch (start()) {
        case "1":
            addTask();
            break;
        case "2":
            deleteTask();
            break;
        case "3":
            return;
        default:
            console.log("ちゃんと入力してよ〜ん( ；∀；)");
    }
}





function start() {
    console.log(" ") //改行
    console.log("----todo list----");
    console.log(" ") //改行
    viewTask();
    console.log(" ") //改行
    console.log("なにをしますか？");
    console.log(" ") //改行
    for (i = 0, len = menus.length; i < len; i++) {
        console.log((i + 1) + ": " + menus[i]);
    }
    return prompt();
}


function viewTask() {
    if (todoList.length > 0) {
        for (i = 0; i < todoList.length; i++) {
            console.log((i + 1) + ": " + todoList[i]);
        }
    }
}


function addTask() {
    while (true) {
        console.log(" ") //改行
        console.log(" ") //改行
        console.log(" ") //改行
        const task = prompt('タスクを追加してください: ');
        console.log(" ") //改行

        console.log(`${task}を追加しました`);
        console.log(" ") //改行

        todoList.push(task);

        viewTask()
        console.log(" ") //改行

        while (true) {
            const question = prompt("続けますか？ y/n: ")
            if (question == "y") {
                break;
            } else if (question == "n") {
                return;
            } else {
                console.log("ちゃんと入力してよ〜ん( ；∀；)");
            }

        }
    }
}

function deleteTask() {
    while (true) {
        viewTask();

        const erase = prompt('タスクを削除します。タスク番号を入力してください');


        console.log(erase + ": " + todoList[parseInt(erase) - 1] + "を削除しました");
        todoList.splice(parseInt(erase) - 1, 1);


        while (true) {
            const question = prompt("続けますか？ y/n")
            if (question == "y") {
                break;
            } else if (question == "n") {
                return;
            } else {
                console.log("ちゃんと入力してよ〜ん( ；∀；)");
            }

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