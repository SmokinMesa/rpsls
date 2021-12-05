/*  NOTES
    -   Approx time once cloned/running 2hrs - 2.5hrs
    -   I've never used next.js before so didn't want to adjust project structure.
    -   Never used TypeScript or useReducer hook
    -   Normally I would use page folders with relevant stylesheet and would have a components folder following the same convention
    -   I wouldn't normally have anonymous components but have left as is
    -   Style would sit around more global themes/variables but have followed the authors use here for brevity
    -   Not much of a UI/UX test here, style is added quickly and not usual standard
 */


import {useReducer, useState} from "react";
import { play } from "../../helpers/pages/game.ts";
import styles from "../../styles/Game.module.css";


let result;

export default () => {
    const [_, forceUpdate] = useReducer(x => x + 1, 0);

    /**
     * set some local state for the results (for display)
     */
    const [gameResult, setGameResult] = useState('');

    const [score, setScore] = useState(
        {
            "player": 0,
            "computer": 0
        }
    )


    /**
     * method to handle the api lookup/result
     * @param gesture
     */
    const playRound = gesture => {
        // NOTE: following returns correct result in network tab, unfamiliar with forceUpdate hook
        const data = play(gesture);
        result = data.result;

        forceUpdate();



        //  following moved here to get it working/showing on the UI
        let playerGesture = gesture;
        let result;

        const n = Math.floor(Math.random() * 5);    //  create a random number for the computer choice

        let computerChoices = [
            "rock",
            "paper",
            "scissors",
            "lizard",
            "spock"
        ];

        const computerGesture = computerChoices[n];     //  randomise choice

        console.log("PLAYER picks", playerGesture);     //  TODO remove for prod
        console.log("CPU picks", computerGesture);   //  TODO remove for prod


        //  crazy logic for what beats the other/draws (thanks for twisting my lemon) TODO this can be cleaned up
        if (playerGesture === "rock" && computerGesture === "rock") {
            result = "draw!";
        } else if (playerGesture === "rock" && (computerGesture === "scissors" || computerGesture === "lizard")) {
            result = "player wins!";

            setScore(prevState => {
                return {
                    ...prevState,
                    "player": prevState.player + 1
                }
            });
        } else if (playerGesture === "rock" && (computerGesture === "paper" || computerGesture === "spock")) {
            result = "computer wins!";

            setScore(prevState => {
                return {
                    ...prevState,
                    "computer": prevState.computer + 1
                }
            });
        } else if (playerGesture === "paper" && computerGesture === "paper") {
            result = "draw!";
        } else if (playerGesture === "paper" && (computerGesture === "rock" || computerGesture === "spock")) {
            result = "player wins!";

            setScore(prevState => {
                return {
                    ...prevState,
                    "player": prevState.player + 1
                }
            });
        } else if (playerGesture === "paper" && (computerGesture === "scissors" || computerGesture === "lizard")) {
            result = "computer wins!";

            setScore(prevState => {
                return {
                    ...prevState,
                    "computer": prevState.computer + 1
                }
            });
        } else if (playerGesture === "scissors" && computerGesture === "scissors") {
            result = "draw!";
        } else if (playerGesture === "scissors" && (computerGesture === "paper" || computerGesture === "lizard")) {
            result = "player wins!";

            setScore(prevState => {
                return {
                    ...prevState,
                    "player": prevState.player + 1
                }
            });
        } else if (playerGesture === "scissors" && (computerGesture === "rock" || computerGesture === "spock")) {
            result = "computer wins!";

            setScore(prevState => {
                return {
                    ...prevState,
                    "computer": prevState.computer + 1
                }
            });
        } else if (playerGesture === "lizard" && computerGesture === "lizard") {
            result = "draw!";
        } else if (playerGesture === "lizard" && (computerGesture === "spock" || computerGesture === "paper")) {
            result = "player wins!";

            setScore(prevState => {
                return {
                    ...prevState,
                    "player": prevState.player + 1
                }
            });
        } else if (playerGesture === "lizard" && (computerGesture === "rock" || computerGesture === "scissors")) {
            result = "computer wins!";

            setScore(prevState => {
                return {
                    ...prevState,
                    "computer": prevState.computer + 1
                }
            });
        } else if (playerGesture === "spock" && computerGesture === "spock") {
           result = "draw!";
        } else if (playerGesture === "spock" && (computerGesture === "rock" || computerGesture === "scissors")) {
            result = "player wins!";

            setScore(prevState => {
                return {
                    ...prevState,
                    "player": prevState.player + 1
                }
            });
        } else if (playerGesture === "spock" && (computerGesture === "lizard " || computerGesture === "paper")) {
            result = "computer wins!";

            setScore(prevState => {
                return {
                    ...prevState,
                    "computer": prevState.computer + 1
                }
            });
        } else {
            result = "Looks like another draw!"
        }

        console.log("RESULT:", result);   //  TODO remove for prod
        setGameResult(result);
    };


    //  TODO, this is incorrect
    if (result) return (
        <h1>TODO: show resultsContainer</h1>
    );


    /**
     * result render
     */
    const ResultContainer = () => {
        return (
            <section className={styles.result}>
                <h1>{gameResult}</h1>

                <div className={styles.scoreboard}>
                    <p>Player score: { score.player }</p>
                    <p>Computer score: { score.computer }</p>
                </div>
            </section>
        );
    }


    /**
     * main render
     * NOTE: would have more global layout for site width/responsiveness etc normally
     */
    return (
        <main className={styles.sw}>
            <section className={styles.options}>
                <button onClick={() => playRound("rock")}>rock</button>
                <button onClick={() => playRound("paper")}>paper</button>
                <button onClick={() => playRound("scissors")}>scissors</button>
                <button onClick={() => playRound("lizard")}>lizard</button>
                <button onClick={() => playRound("spock")}>spock</button>
            </section>

            { gameResult ? <ResultContainer /> : '' }
        </main>
    );
}
