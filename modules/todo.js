/**
 * todo array to simulate data
 */
var todo = [{type:'warning', info:'Se former à VuJS'},{type:'info', info:'Symfony a sortie sa version 6'}];

/**
 * Add todolist to a HTML id element
 * @param {int} idElement 
 */
function toDoList(idElement){
    let lst = document.getElementById(idElement);
    let html = "<div class=''><ul>";
  //  console.log(todo);
    todo.forEach(action => {
      //  console.log(action.type+' - '+action.info);
        html +='<li>'+action.type+' - '+action.info+"</li>"; 
    });
    html+="</ul></div>";
    lst.innerHTML = html;
}

/**
 * Add element to todo array
 * @param {string} aType 
 * @param {string} anInfo 
 */
function addTodo(aType, anInfo){
    todo.push({type:aType,info:anInfo});
}

/**
 * delete element by index
 * @param {int} index 
 */
function deleteTodo(index){
    todo.splice(index,index);
}

/**
 * Update todoElement
 * @param {int} anIndex 
 * @param {string} aType 
 * @param {string} anInfo 
 */
function updateTodo(anIndex, aType, anInfo){
    if (todo[anIndex] !== undefined) {
        todo[anIndex]={type:aType,info:anInfo};
    }
}

// J'exporte tous les élements necessaire pour ma todo app
// il vaudrait mieux utiliser une classe gérant les todos
export {todo, toDoList, addTodo, deleteTodo, updateTodo};