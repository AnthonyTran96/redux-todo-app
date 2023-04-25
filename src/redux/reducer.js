const initState={
    filters:{
        search:'',
        status: 'All',
        priority: [],
    },
    todoList:[
        {id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium'},
        {id: 2, name: 'Learn Redux', completed: true, priority: 'High'},
        {id: 3, name: 'Learn JS', completed: false, priority: 'Low'}
    ]
}
const rootReducer=(state=initState ,action)=>{
    console.log({state,action});
    switch(action.type){
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [...state.todoList,
                {id: 5, name: 'Learn Football', completed: false, priority: 'Medium'}
                ]
            }
        default: return state;
    }
}

export default rootReducer;