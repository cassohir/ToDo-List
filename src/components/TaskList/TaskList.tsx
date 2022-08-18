import { useState } from 'react';
import { Task } from '../Task/Task';
import styles from './TaskList.module.css';

interface TaskListProps{

  tasks: string[];
  tasksCompleted: string[];
  onDeleteOneTask: (taskToDelete: string[]) => void;
  isDone: (isDone: boolean) => void;
}

export function TaskList({tasks, tasksCompleted, onDeleteOneTask, isDone}: TaskListProps) {

    function deleteTask(taskToDelete: string){
      const tasksWithoutDeletedOne = tasks.filter(task => task !== taskToDelete);
      onDeleteOneTask(tasksWithoutDeletedOne);
    }

    const taskLength = tasks.length;
    const completedTaskLength = tasksCompleted.length;


    function isDoneInApp(isDoneInTask: boolean){
      if(isDoneInTask){
        isDone(isDoneInTask);
      }else {
        isDone(false);
      }

    }
   

  return (
    <div>

     <div className={styles.header}>
     


      <div>
        <h3>Tarefas criadas </h3>
        <p>{taskLength }</p>
      </div>

      <div>
        <h3>Concluídas</h3>
        <p>  {completedTaskLength} de {taskLength} </p>
      </div>

    </div>

    <div className={styles.taskList}>
      {tasks.map((task,index) => (
        <Task key={index} content={task} onDeleteTask={deleteTask} isDoneInList={isDoneInApp}   />
      ))}
    
   
    
    </div>

    </div>
  )
}