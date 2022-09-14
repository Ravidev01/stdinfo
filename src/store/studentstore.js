// import { makeObservable, observable, action, computed } from 'mobx'
import { action, makeObservable, observable } from 'mobx'


 class StudentStore {
//   todos = []
 searchedValue =""

  constructor() {
    makeObservable(this, {
        searchedValue:observable,
        addValue:action,
    //   todos: observable,
    //   addTodo: action,
    //   toggleTodo: action,
    //   status: computed,
    })
  }
         addValue(value){
             this.searchedValue=value
            console.log(value);
         }
//   addTodo(title: string) {
//     const item: TodoItem = {
//       id: +Math.random().toFixed(4),
//       title,
//       completed: false,
//     }
//     this.todos.push(item)
//   }

//   toggleTodo(id: number) {
//     const index = this.todos.findIndex((item) => item.id === id)
//     if (index > -1) {
//       this.todos[index].completed = !this.todos[index].completed
//     }
//   }

//   get status() {
//     let completed = 0,
//       remaining = 0
//     this.todos.forEach((todo) => {
//       if (todo.completed) {
//         completed++
//       } else {
//         remaining++
//       }
//     })
//     return { completed, remaining }
//   }
}

export const StudentStore1 = new StudentStore;
