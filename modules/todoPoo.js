export class Todo{

    constructor(){
 /**
* todo array to simulate data
*/
this.todo = [{type:'warning', info:'Se former à VuJS'},{type:'info', info:'Symfony a sortie sa version 6'}];
    }

/**
 * Add todolist to a HTML id element
 * @param {int} idElement 
 */
 toDoList(idElement){
    let lst = document.getElementById(idElement);
    lst.innerHTML="";
    let ul = document.createElement('ul');
ul.style.cssText='  margin: 0;padding: 0;';
    var i=0;
    this.todo.forEach(action => {
      let li = document.createElement('li');  
      let del = document.createElement('h3');  
      del.setAttribute('id', i); 
      ul.style.cssText=this.liCss();  
      li.setAttribute('id', i);        
      li.innerHTML +=/*action.type+' - '+*/action.info; 
       
        li.addEventListener("click", ()=>{
         //   alert(li.id);
         if(confirm("Voulez-vous supprimer l'élément "+del.id+" ? ")){
            this.deleteTodo(del.id);
            this.toDoList(idElement);
         }
        
         li.appendChild(del);
   
        })
            
        ul.appendChild(li);
        i++;
    });
  
 lst.appendChild(ul);
}

/**
 * return todo css 
 * @returns string
 */
liCss(){
    return `cursor: pointer;
    position: relative;
    padding: 12px 8px 12px 40px;
    list-style-type: none;
    background: #cce5ff;
    color: #222;
    font-size: 2em;
    transition: 0.2s;
    
    /* make the list items unselectable */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;`;

}
/**
 * Add element to todo array
 * @param {string} aType 
 * @param {string} anInfo 
 */
 addTodo(aType, anInfo){
    this.todo.push({type:aType,info:anInfo});
}

/**
 * delete element by index
 * @param {int} index 
 */
 deleteTodo(index){
    this.todo.splice(index,1);
}

/**
 * Update todo Element by index
 * @param {int} anIndex 
 * @param {string} aType 
 * @param {string} anInfo 
 */
 updateTodo(anIndex, aType, anInfo){
    if (this.todo[anIndex] !== undefined) {
        this.todo[anIndex]={type:aType,info:anInfo};
    }
}

}