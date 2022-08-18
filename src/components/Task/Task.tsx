import { CheckCircle, Circle, Trash} from "phosphor-react";
import { useState } from "react";

import styles from './Task.module.css';

interface TaskProps {

  content: string;
  // onChangeStatus: (isOpen: boolean, content: string) => void;
  onDeleteTask: (task: string) => void;
  isDoneInList: (isDone: boolean) => void;


}




export function Task({  content, onDeleteTask, isDoneInList}: TaskProps) {

  const [taskStatus, setTaskStatus] = useState(true);




  function handleMarkDownTask(){
    isDoneInList(taskStatus);
    
    setTaskStatus(!taskStatus);
   
  }


  function handleDeleteTask() {
    onDeleteTask(content);
    
   
  }
  return (
    <div className={styles.task}>
      <div>

      <button onClick={handleMarkDownTask} className={styles.check}>
         {taskStatus ? <Circle size={24}/> :
         <CheckCircle weight="fill" size={24} />}
      </button>

      
      {/* If the content is closed the text has a line-through effect. */}
      <p>
        {taskStatus ? content : <del>{content}</del>}
      </p>

      </div>
      
      <button onClick={handleDeleteTask}  className={styles.trash}>
          <Trash size={24} />
      </button>
      
    </div>
  )
}

