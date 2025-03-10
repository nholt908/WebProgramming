import {useState} from 'react';
import './MoodTracker.css';

export default function MoodTracker(){

    const [mood, setMood] = useState("😐");
    const [theme, setTheme] = useState("lightgrey");
    const [desc, setDesc] = useState("This is how I feel most of the time. No strong feelings here!");
    const [song, setSong] = useState("Float On - Modest Mouse");
    const [songLink, setSongLink] = useState("https://www.youtube.com/watch?v=oYUZF46T5VY");
    const [story, setStory] = useState("A neutral state is a good way to wake up. The day can improve into a better day, or the day can go downhill. When in a neutral state, things can pass by without care. A neutral state is calm. Sometimes this is the calm before the storm.");

    function neutralMood(){
        setMood("😐");
        setTheme("lightgrey");
        setDesc("This is how I feel most of the time. No strong feelings here!");
        setSong("Float On - Modest Mouse");
        setSongLink("https://www.youtube.com/watch?v=oYUZF46T5VY");
        setStory("A neutral state is a good way to wake up. The day can improve into a better day, or the day can go downhill. When in a neutral state, things can pass by without care. A neutral state is calm. Sometimes this is the calm before the storm.");
    }

    function sleepyMood(){
        setMood("😴");
        setTheme("lavender");
        setSong("Lullaby for a Stormy Night - Vienna Teng");
        setSongLink("https://www.youtube.com/watch?v=Dslen0lIUYA");
        setStory("A sleepy feeling is one felt right before bed. One should allow themself to rest at this point. However, life is busy, and often, we do not sleep immediately once we are tired. We only allow ourselves to rest once the work for the day is done. At the end of the day, we will sleep.");
    }

    function angryMood(){
        setMood("😠");
        setTheme("rgb(255, 184, 184)");
        setSong("Nothing Ever Changes - Nico Collins");
        setSongLink("https://www.youtube.com/watch?v=8He9lj45JP0");
        setStory("Anger is the way that we show that we have felt wronged. Our voices are unheard, and we lash out in return. This feeling can be dangerous. We may hurt someone without meaning to. However, this feeling can be honed into a powerful weapon.");
    }

    function sadMood(){
        setMood("😭");
        setTheme("rgb(185, 239, 255)");
        setSong("Francis Forever - Mitski");
        setSongLink("https://www.youtube.com/watch?v=mHKTdlUyyko");
        setStory("Sadness is a strong feeling, not a sign of weakness. It mourns the loss of someone, dead or alive. It's a way of showing that we care. The tears that are shed can heal us. We are not alone in this feeling.");
    }

    function happyMood(){
        setMood("😁");
        setTheme("rgb(161, 255, 169)");
        setSong("Build Me Up Buttercup - The Foundations");
        setSongLink("https://www.youtube.com/watch?v=w0kLkDCoRXc");
        setStory("A happy feeling is the warmth of the sun in spring. It's waking up and hearing the birds and smelling flowers bloom. It's being around those you love. It's a cat laying in a spot of light, warming itself. This is the feeling that gravitates people to you. This is a feeling that was once a stranger to us.");
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