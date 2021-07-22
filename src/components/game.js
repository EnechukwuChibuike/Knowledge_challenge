import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { TelephoneFill } from "react-bootstrap-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/wwbm.png";
import { useEffect, useState } from "react";
import "../styles/game.css";

function Game() {
   const money = [
      "$ 1 000 000",
      "$ 500 000",
      "$ 250 000",
      "$ 64 000",
      "$ 32 000",
      "$ 16 000",
      "$ 8 000",
      "$ 4 000",
      "$ 2000",
      "$ 1 000",
      "$ 500",
      "$ 300",
      "$ 200",
      "$ 100",
   ];

   const [data, setdata] = useState([]);
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [moneyLadder, setMoneyLadder] = useState(15);

   const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
   const questionsArr = [];
   const sort = (arr) => arr.sort(() => Math.random() - 0.5);

   useEffect(() => {
      const fetchData = () => {
         return fetch(
            "https://opentdb.com/api.php?amount=50&category=9&difficulty=medium&type=multiple"
         )
            .then((response) => response.json())
            .then((data) => {
               let results = data.results;
               results.map((item) => {
                  let questions = {
                     question: item.question,
                     options: shuffle([
                        ...item.incorrect_answers,
                        item.correct_answer,
                     ]),
                     answer: item.correct_answer,
                  };
                  questionsArr.push(questions);
               });

               setdata(sort(questionsArr));
            });
      };
      fetchData();
   }, []);

   const handleClick = (option) => {
      const nextQuestion = currentQuestion + 1;
      if (data[currentQuestion].answer === option) {
         setCurrentQuestion(nextQuestion);
         setMoneyLadder(moneyLadder - 1);
      } else {
         alert("Get lost!");
         setCurrentQuestion(0);
      }
   };

   return (
      <>
         <div className="gameMain">
            <div className="gameSub">
               <div className="QandA">
                  <div className="holder">
                     <div className="logoDiv">
                        <img src={Logo} alt="logo" />
                     </div>
                     <div className="lifeTime">
                        <Button>50/50</Button>
                        <Button>
                           <TelephoneFill />
                        </Button>
                        <Button>
                           <FontAwesomeIcon icon={faUsers} />
                        </Button>
                     </div>
                  </div>

                  <div className="questionDiv">
                     {data[currentQuestion] && (
                        <div>
                           <div className="mt-5">
                              <div className="question">
                                 <h4
                                    dangerouslySetInnerHTML={{
                                       __html: data[currentQuestion].question,
                                    }}
                                 />
                              </div>
                           </div>
                           <div className="answers">
                              {data[currentQuestion].options.map(
                                 (option, index) => (
                                    <button
                                       className={
                                          data[currentQuestion].answer ===
                                          option
                                             ? "bg-success"
                                             : ""
                                       }
                                       key={index}
                                       onClick={() => handleClick(option)}
                                       dangerouslySetInnerHTML={{
                                          __html: `${index})  ${option}`,
                                       }}
                                    ></button>
                                 )
                              )}
                           </div>
                        </div>
                     )}
                     {currentQuestion === 15 &&
                        (alert(
                           "Congratulations!! You just won 1 million naira"
                        ),
                        setCurrentQuestion(0),
                        setdata(sort(questionsArr)),
                        setMoneyLadder(15))}
                  </div>
               </div>

               <div className="money">
                  <div>
                     {money.map((money, index) => (
                        <h5
                           className={
                              moneyLadder === index + 1 && moneyLadder >= 1
                                 ? "bg-warning"
                                 : ""
                           }
                        >
                           {money}
                        </h5>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Game;
