import styles from './InputBar.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';


interface InputBarProps {

onAddTask: (task: string) => void;

}




export function InputBar({onAddTask}: InputBarProps) {

  
  
  const [newTask, setNewTask] = useState('');
  
  

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault();
    setNewTask('');
  }

  function handleSaveTask(){

    onAddTask(newTask);
  }


  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    
    setNewTask(event.target.value);

  }
  function handleNewTasktInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('');
  }




  return (
    <div className={styles.inputBar}>

      <form onSubmit={handleCreateNewTask } className={styles.inputBar}>


      <input
        name="task"
        type="text"
        value={newTask}
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskChange}
        onInvalid={handleNewTasktInvalid}
        required

      />
      <button 
        onClick={handleSaveTask} 
        type="submit">
        Criar
        <PlusCircle className={styles.plusCircle} size={20} />

      </button>
      </form>
    </div>
  )
}