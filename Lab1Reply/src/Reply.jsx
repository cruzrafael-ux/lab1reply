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
        answer1.toLowerCase() === "writing"
            ? setShowParagraph2(true)
            : setAnswer1("Try Again");
    }

    function checkAnswer2() {
        const valid = ["vocals", "ad-libs", "harmonies", "live instruments"];

        valid.includes(answer2.toLowerCase())
            ? setShowParagraph3(true)
            : setAnswer2("Try Again");
    }

  return (
     <div>
            <header>
            <h1>From an Idea to a Finished Song</h1>
            <p>Music production is more than just recording vocals over a beat. 
                There are several steps that go into taking an idea and turning 
                it into a finished song that people can actually listen to.</p>
            </header>

            <Paragraph
                title="1. Writing"
                content="The first step is writing the song. This can include creating the beat, choosing the mood, writing lyrics, and figuring out the structure of the song. This is where the idea starts becoming something real."
            />

            {showParagraph2 ? (
                <Paragraph
                    title="2. Recording"
                    content="Once the song is written, the next step is recording. This is where
                    the artist records vocals, ad-libs, harmonies, or any live
                    instruments that are needed. A good recording matters because it is
                    hard to make a bad recording sound completely clean later."
                />
            ) : (
                <div>
                    <br />
                    <p>Question: What is the first step in creating new music?</p>

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
                        title="3. Editing"
                        content="After recording, the audio usually needs to be edited. This can
                        mean choosing the best vocal takes, lining vocals up correctly,
                        removing unwanted noise, and fixing small timing or pitch issues.
                        Editing helps prepare everything before the actual mix begins."    
                     />
                     
                ) : (
                    <div>
                        <br />
                        <p>
                            Question: What is 1 action an artist must record?
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
