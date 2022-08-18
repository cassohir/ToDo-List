
import styles from './App.module.css';
import './global.css';
import { Header } from './components/Header/Header';
import { InputBar } from './components/InputBar/InputBar';
import { TaskList } from './components/TaskList/TaskList';
import { useState } from 'react';

function App() {

  const [taskList, setTaskList] = useState<string[]>([]);
  const [completedTaskList, setCompletedTaskList] = useState<string[]>([]);

  function handleSaveTasks(task: string){
    const newTasks = [...taskList];
    newTasks.push(task);

    setTaskList(newTasks);
    
  }

  function handleSaveTasksCompleted(status: boolean){
    if(status){

      const newCompletedTasks = [...completedTaskList];
      newCompletedTasks.push("1");
      
      setCompletedTaskList(newCompletedTasks);
    } else{
      const newCompletedTasks = [...completedTaskList];
      newCompletedTasks.pop();
      
      setCompletedTaskList(newCompletedTasks);
    }
    
  }

  function handleDeleteTask(tasksWithoutTheDeleted: string[]){
    setTaskList(tasksWithoutTheDeleted);

    const newCompletedTasks = [...completedTaskList];
    newCompletedTasks.pop();
    setCompletedTaskList(newCompletedTasks);
  }

  return (
    <div >

      <Header/>

      <InputBar onAddTask={handleSaveTasks} />

      <TaskList
        tasksCompleted={completedTaskList} 
        isDone={handleSaveTasksCompleted}
        onDeleteOneTask={handleDeleteTask} 
        tasks={taskList} 
      
      />

    </div>
  )
}

export default App
