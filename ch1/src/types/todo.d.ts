interface Todo {
     tno: number
     title: string
     content: string
     dueDate: string | null 
     complete: boolean
}

interface  TodoAdd {
     title: string,
     content: string,
     dueDate: string,

}
interface ResultModal {
      title:string,
      content: string,
      callbackFn? : () => void 
}
interface TodoModify {
      tno: number,
      title: string,
      dueDate: string | null,
     complete: boolean
}
     