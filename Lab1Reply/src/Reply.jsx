import { useState } from 'react'

import './Reply.css'
import './components/Paragraph.jsx'
import Paragraph from './components/Paragraph.jsx';

export default Reply

function Reply() {
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [showParagraph2, setShowParagraph2] = useState(false);
    const [showParagraph3, setShowParagraph3] = useState(false);

     function checkAnswer1() {
        answer1.toLowerCase() === "interaction"
            ? setShowParagraph2(true)
            : setAnswer1("Try Again");
    }

    function checkAnswer2() {
        const valid = ["one", "one or more"];

        valid.includes(answer2.toLowerCase())
            ? setShowParagraph3(true)
            : setAnswer2("Try Again");
    }

  return (
     <div>
            <header>
            <h1>Game Design</h1>
            <p> By Warren Ginter</p>
            </header>

            <Paragraph
                title="1. Game Philosophy"
                content="When designing a game, you generally want each part of the game 
                to interact in some way and be important to
                each other, this makes it feel like there's a good reason to interact with every system"
            />

            {showParagraph2 ? (
                <Paragraph
                    title="2. Player Actions"
                    content="Most games have one or more gameplay loops, which are the order of 
                    actions a player repeats while playing
                    the game. Gameplay loops can show the loop of actions in a certain activity or the loop or activities
                    over the entire session"
                />
            ) : (
                <div>
                    <br />
                    <p>Question: What is a core Game Design Principle?</p>

                    <input
                        type="text"
                        value={answer1}
                        onChange={(conclusion) => setAnswer1(conclusion.target.value)}
                    />

                    <button onClick={checkAnswer1}>
                        Submit
                    </button>
                </div>
            )}

            {showParagraph2 ? (
                showParagraph3 ? (
                    <Paragraph
                        title="3. Replayability"
                        content="A simplified example of a gameplay loop would be the player 
                        starting a new game, completing their goal,
                        reaching the end, and then restarting to play again."    
                     />
                ) : (
                    <div>
                        <br />
                        <p>
                            Question: How many gameplay loops are in a game?
                        </p>

                        <input
                            type="text"
                            value={answer2}
                            onChange={(conclusion) => setAnswer2(conclusion.target.value)}
                        />

                        <button onClick={checkAnswer2}>
                            Submit
                        </button>
                    </div>
                )
            ) : null}
        </div>
    );
}
