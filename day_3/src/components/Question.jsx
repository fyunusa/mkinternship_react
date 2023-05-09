

// // Question component
// const Question = () => {
//     const { currentQuestion, quiz, userAnswers, handleAnswer } = useQuizContext();
//     const question = quiz[currentQuestion];
  
//     const handleAnswerClick = (answerId) => {
//       handleAnswer(answerId);
//     };
  
//     return (
//       <div>
//         <h1>Question {currentQuestion + 1}</h1>
//         <h2>{question.question}</h2>
//         {question.type === 'short_answer' && (
//           <input type="text" onChange={(e) => handleAnswerClick(e.target.value)} />
//         )}
//         {question.type === 'multiple_choice' && (
//           <ul>
//             {question.answers.map((answer) => (
//               <li key={answer.id} onClick={() => handleAnswerClick(answer.id)}>
//                 {answer.answer}
//               </li>
//             ))}
//           </ul>
//         )}
//         {/* Add other question types here */}
//       </div>
//     );
// };

// export default Question;

