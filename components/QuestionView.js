import { Box } from "@mui/material";
import { useEffect } from "react";
import React from "react";

export default function ViewQuestions() {
  const [questions, setQuestions] = React.useState([{}]);
  const [mcquestions, setMCQuestions] = React.useState([{}]);


  const generateAllQuestions = async () => {
    const response = await fetch("/api/getQuestions", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response.json().then((json) => {
      setQuestions(json);
    });
  };

  const generateAllMultipleChoice = async () => {
    const response = await fetch("/api/getQuestions?" + new URLSearchParams({ "questionType": "Multiple Choice" }), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response.json().then((json) => {
      setMCQuestions(json);
      console.log(json)
    });
  };

  useEffect(() => {
    generateAllQuestions();
    generateAllMultipleChoice();
  }, [])

  return (
    <Box>



      
      {questions?.map((question) => {
        if (question.questionType === "Write") {
          return (
            <Box>
              <h3>{question.question}</h3>
              <p>{"_".repeat(question.question.length)}</p>
            </Box>
          );
        }
        if (question.questionType === "Multiple Choice") {
          return (
            <Box>
              <h3>{question.question}</h3>
              <p>
                A.   {question.correctOption} B.   {question.option1} C.   {question.option2} D.   {question.option3}
              </p>

            </Box>
          );
        }

        if (question.questionType === "Random") {
          return (
            <Box>
              <h3>{question.question}</h3>
              <p>{"_".repeat(question.question.length)}</p>
            </Box>
          );
        }
      })}
    </Box>
  );
}
