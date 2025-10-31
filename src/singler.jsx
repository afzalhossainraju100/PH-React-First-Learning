export default function Singer({singer}){
    return (
        <div style={{border: '2px solid blue', margin: '20px', padding: '20px'}}>
            <h3>Name: {singer.name}</h3>
            <p>Age: {singer.age}</p>
            <p>Job: {singer.job}</p>
        </div>
    )
}