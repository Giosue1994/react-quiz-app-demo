export default function Answer({ answerText, ...props }) {
  return (
    <li {...props} className="answer">
      <button>{answerText}</button>
    </li>
  );
}