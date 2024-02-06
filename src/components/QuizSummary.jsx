import summaryLogo from "../assets/quiz-complete.png"

export default function QuizSummary() {
    return (
        <div id="summary">
            <img src={summaryLogo} alt="Cup" />
            <h2>Quiz completed</h2>

            <ol>
                <li>
                    <h3>1</h3>
                    <p className="question">domanda</p>
                    <p className="user-answer">risposta</p>
                </li>
            </ol>
        </div>
    )
}