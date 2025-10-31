// export default function ToDo({task,isDone}){
//     return (
//         <div style={{border: '2px solid black', margin: '20px', padding: '20px'}}>
//         <li>Task: {task}</li>
//         <p>Status: {isDone ? "Completed" : "Pending"}</p>
//         </div>
//     )
// }
export default function Food({item,isHungry}){
    return (
        <div>
        <li>Food Item: {item}</li>
        <p>Hunger Status: {isHungry ? "Hungry" : "Not Hungry"}</p>
        </div>
    );
}