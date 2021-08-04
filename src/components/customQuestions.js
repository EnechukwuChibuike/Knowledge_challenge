import { useState } from "react";

function CustomQuestions({
   option,
   setmoneyLadderMobile,
   data,
   setMoneyLadder,
   setCurrentQuestion,
   currentQuestion,
   index,
   moneyLadder,
}) {
   const [changeColor, setChangeColor] = useState("");
   const handleClick = () => {
      const nextQuestion = currentQuestion + 1;
      if (data[currentQuestion].answer === option) {
         setTimeout(() => {
            setChangeColor("success text-white");
         }, 2000);
         setTimeout(() => {
            setmoneyLadderMobile(true);
            setMoneyLadder(moneyLadder - 1);
         }, 4000);
         setTimeout(() => {
            setCurrentQuestion(nextQuestion);
            setmoneyLadderMobile(false);
            setChangeColor("");
         }, 6000);
      } else {
         setTimeout(() => {
            setChangeColor("danger");
         }, 2000);
         setTimeout(() => {
            window.location.reload();
            setCurrentQuestion(0);
            setMoneyLadder(15);
         }, 4000);
      }
   };

   return (
      <>
         <button
            className={`bg-${changeColor}
            ${data[currentQuestion].answer === option ? "text-success" : ""}`}
            key={index}
            onClick={() => handleClick(option, index)}
            dangerouslySetInnerHTML={{
               __html: `${index + 1})  ${option}`,
            }}
         ></button>
      </>
   );
}

export default CustomQuestions;
