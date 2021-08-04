import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { TelephoneFill } from "react-bootstrap-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/wwbm.png";
import { useEffect, useState } from "react";

import "../styles/game.css";
import CustomQuestions from "./customQuestions";

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
      "$ 2 000",
      "$ 1 000",
      "$ 500",
      "$ 300",
      "$ 200",
      "$ 100",
   ];

   const [data, setdata] = useState([]);
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [moneyLadder, setMoneyLadder] = useState(15);
   const [moneyLadderMobile, setmoneyLadderMobile] = useState(false);

   const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
   const sort = (arr) => arr.sort(() => Math.random() - 0.5);
   const questionsArr = [];

   useEffect(() => {
      const fetchData = () => {
         return fetch(
            "https://opentdb.com/api.php?amount=50&category=9&easy=medium&type=multiple"
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

   const fiftyFifty = () => {
      data[currentQuestion].options.splice(0, 2);
      // while (data[currentQuestion].options.length) {
      //    let index = Math.floor(
      //       Math.random() * data[currentQuestion].options.length
      //    );
      //    console.log(index);
      //    console.log(data[currentQuestion].options[index]);

      // for (let i = data[currentQuestion].options.length - 1; i >= 0; i--) {
      //    data[currentQuestion].options.splice(
      //       Math.floor(Math.random() * data[currentQuestion].options.length),
      //       1
      //    );
      //    console.log(data[currentQuestion].options);
      // }
   };

   return (
      <>
         <div className="gameMain">
            <div className="gameSub">
               <div className="QandA">
                  <div className="holder">
                     <div className="logoDiv">
                        <img src={Logo} alt="logo" width="200" />
                     </div>
                     <div className="lifeTime">
                        <Button className="" onClick={fiftyFifty}>
                           50/50
                        </Button>
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
                                 <h5
                                    dangerouslySetInnerHTML={{
                                       __html: data[currentQuestion].question,
                                    }}
                                 />
                              </div>
                           </div>
                           <div className="answers">
                              {data[currentQuestion].options.map(
                                 (option, index) => (
                                    <CustomQuestions
                                       data={data}
                                       option={option}
                                       index={index}
                                       setMoneyLadder={setMoneyLadder}
                                       moneyLadder={moneyLadder}
                                       setmoneyLadderMobile={
                                          setmoneyLadderMobile
                                       }
                                       setCurrentQuestion={setCurrentQuestion}
                                       currentQuestion={currentQuestion}
                                    />
                                 )
                              )}
                           </div>
                        </div>
                     )}
                     {currentQuestion === 14 &&
                        (alert(
                           "Congratulations!! You just won 1 million naira"
                        ),
                        setCurrentQuestion(0),
                        data[currentQuestion],
                        setMoneyLadder(15),
                        window.location.reload())}
                  </div>
               </div>

               <div className="money">
                  <div>
                     {money.map((money, index) => (
                        <h5
                           key={index}
                           className={
                              moneyLadder === index + 1
                                 ? "bg-warning text-white p-1"
                                 : ""
                           }
                        >
                           {money}
                        </h5>
                     ))}
                  </div>
               </div>
            </div>
            {moneyLadderMobile === true && (
               <div className="moneyMobile">
                  {money.map((money, index) => (
                     <h5
                        key={index}
                        className={
                           moneyLadder === index + 1
                              ? "bg-warning text-white p-1"
                              : ""
                        }
                     >
                        {money}
                     </h5>
                  ))}
               </div>
            )}
         </div>
      </>
   );
}

export default Game;
