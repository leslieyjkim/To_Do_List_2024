import {useState} from "react";

export default function TodoForm(props) {

    const {onSubmit} = props; //I'll receive the submit prop there

    const initialValues = {task:"", color:"", dueDate:""}

    const [ isActive, setIsActive ] = useState(false);
    
    //We'll make just 1 formData includes 3 inputs(text, color, date) all together
    //avoiding party of many many states.
    //like below: we'll make just 1 state, 'formData' which can handle 3 things all together
    const [ formData, setFormData] = useState(initialValues)

    //Also we'll make just 1 handleChange function which can handle 3 things all together.
    const handleChange = event => {
        const { value, name } = event.target;  //can you give me the value from the event.target(=what I typed, input)? "event.target" is that the input that will triger the event.
        const updatedFormData = {...formData}  //I want updatedFormData, and that's gonna be the old formData
        updatedFormData[name] = value;         //That I want updatedFormData at the position of name, I want to give it value.
        setFormData(updatedFormData);          //Once I have that, can I setFormData to my updatedFormData?
    }
 
    const toggleForm = () => setIsActive(!isActive);

    return (
        <section className="TodoForm">
            {!isActive && <button onClick={toggleForm}>Add a to-do</button>}
            {isActive && (
                <form>
                    <input type="text" name="task" placeholder="Enter the task" value={formData.task} onChange={handleChange}/>
                    <input type="color" name="color" placeholder="Enter the color" value={formData.color} onChange={handleChange}/>
                    <input type="date" name="dueDate" placeholder="Enter the due date" value={formData.dueDate} onChange={handleChange}/>
                    <button>Add to-do</button>
                </form>
            )}
        </section>
    );
} 