import React,{Component} from 'react'
import {Div,Ul,Li,Button,Input,Div1} from './App.styled'
class TaskList extends Component {
    static tasks=[
        {id: 1,text: 'Завдання 1'},
        {id: 2,text: 'Завдання 2'},
        {id: 3,text: 'Завдання 3'}
    ]
    constructor(props){
      super(props)
      this.state={
        tasks:TaskList.tasks,
        inputText:''
      }
    }
    delete=(id)=>{
      const {tasks}=this.state
      const newA=tasks.filter((task)=>task.id!==id)
      this.setState({
        tasks:newA
      })
      }
    add=()=>{
      const {tasks,newTaskText}=this.state
      const last = Object.keys(tasks).length+1
      const newA = tasks.push({id:last,text:newTaskText})
      this.setState({
        newTaskText:'',
        tasks:newA
      })
    }
    render(){
      const {tasks,newTaskText}=this.state;
      return(
        <Div>
          <Ul>
            {tasks.map((task)=>
              <Li key={task.id}>
                <p>{task.text}</p>
                <Button onClick={()=>this.delete(task.id)}>Видалити</Button>
              </Li>
            )}
          </Ul>
          <Div1><Input value={newTaskText} onChange={(e)=>this.setState({newTaskText: e.target.value})}/></Div1>
          <Div1><Button onClick={this.add}>Додати завдання</Button></Div1>
        </Div>
      )
    }
}
export default TaskList