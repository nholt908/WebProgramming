import {useState} from 'react';
import './MoodTracker.css';

export default function MoodTracker(){

    const [mood, setMood] = useState("😐");
    const [theme, setTheme] = useState("lightgrey");
    const [desc, setDesc] = useState("This is how I feel most of the time. No strong feelings here!");
    const [song, setSong] = useState("Float On - Modest Mouse");
    const [songLink, setSongLink] = useState("https://www.youtube.com/watch?v=oYUZF46T5VY");
    const [story, setStory] = useState("");

    function neutralMood(){
        setMood("😐");
        setTheme("lightgrey");
        setDesc("This is how I feel most of the time. No strong feelings here!");
        setSong("Float On - Modest Mouse");
        setSongLink("https://www.youtube.com/watch?v=oYUZF46T5VY");
        setStory("");
    }

    function sleepyMood(){
        setMood("😴");
        setTheme("lavender");
        setSong("Lullaby for a Stormy Night - Vienna Teng");
        setSongLink("https://www.youtube.com/watch?v=Dslen0lIUYA");
        setStory("");
    }

    function angryMood(){
        setMood("😠");
        setTheme("rgb(255, 184, 184)");
        setSong("Nothing Ever Changes - Nico Collins");
        setSongLink("https://www.youtube.com/watch?v=8He9lj45JP0");
        setStory("");
    }

    function sadMood(){
        setMood("😭");
        setTheme("rgb(185, 239, 255)");
        setSong("Francis Forever - Mitski");
        setSongLink("https://www.youtube.com/watch?v=mHKTdlUyyko");
        setStory("");
    }

    function happyMood(){
        setMood("😁");
        setTheme("rgb(161, 255, 169)");
        setSong("Build Me Up Buttercup - The Foundations");
        setSongLink("https://www.youtube.com/watch?v=w0kLkDCoRXc");
        setStory("");
    }

    return(
        <div style={{textAlign:"center", padding: "20px", backgroundColor:theme}}>
            <h1>Mood Tracker</h1>
            <p>Current Mood: {mood}</p>
            <button onClick={neutralMood} style={{background:"rgb(150, 150, 150)"}}>Neutral</button>
            <button onClick={sleepyMood} style={{background:"plum"}}>Sleepy</button>
            <button onClick={angryMood} style={{background:"lightcoral"}}>Angry</button>
            <button onClick={sadMood} style={{background:"lightblue"}}>Upset</button>
            <button onClick={happyMood} style={{background:"lightgreen"}}>Cheerful</button>
            <p>{desc}</p>
            <p>Link to a song: <a href={songLink} target="_blank">{song}</a></p>
            <p>{story}</p>
        </div>
    );

}