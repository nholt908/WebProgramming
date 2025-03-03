import {useState} from 'react';
import './MoodTracker.css';

export default function MoodTracker(){

    const [mood, setMood] = useState("😊");

    return(
        <div style={{textAlign:"center", padding: "20px"}}>
            <h1>Mood Tracker</h1>
            <p>Current Mood: {mood}</p>
            <button onClick={()=>setMood("😂")} style={{background:"lightGreen"}}>Very Happy</button>
            <button onClick={()=>setMood("😒")} style={{background:"lightblue"}}>Unamused</button>
            <button onClick={()=>setMood("😭")} style={{background:"lightcoral"}}>Upset</button>
            <button onClick={()=>setMood("😁")} style={{background:"lightgrey"}}>Cheerful</button>
        </div>
    );

}