import { Box } from "@mui/material";
import { useEffect } from "react";
import React from "react";

import MultipleChoiceView from './MultipleChoiceView'
import RandomOrderView from "./RandomOrderView";
import RewriteHintQuestionsView from "./RewriteHintQuestions";
import WriteQuestionsView from "./WriteQuestionsView";
import RewriteQuestionsView from "./RewriteQuestionsView";


export default function ViewQuestions() {
  const [mcquestions, setMCQuestions] = React.useState([{}]);
  const [randomQuestions, setRandomQuestions] = React.useState([{}]);
  const [rewriteQuestions, setRewriteQuestions] = React.useState([{}]);
  const [rewriteHintQuestions, setRewriteHintQuestions] = React.useState([{}]);
  const [writeQuestions, setWriteQuestions] = React.useState([{}]);

  
  const generateAllMultipleChoice = async () => {
    const response = await fetch("/api/getQuestions?" + new URLSearchParams({ "questionType": "Multiple Choice" }), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response.json().then((json) => {
      setMCQuestions(json);
    });
  };


  const generateAllRandomQuestions = async () => {
    const response = await fetch("/api/getQuestions?" + new URLSearchParams({ "questionType": "Random" }), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response.json().then((json) => {
      setRandomQuestions(json);
    });
  };

  const generateAllRewriteQuestions = async () => {
    const response = await fetch("/api/getQuestions?" + new URLSearchParams({ "questionType": "Rewrite" }), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response.json().then((json) => {
      setRewriteQuestions(json);
    });
  };

  const generateAllRewriteHintQuestions = async () => {
    const response = await fetch("/api/getQuestions?" + new URLSearchParams({ "questionType": "RewriteHint" }), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response.json().then((json) => {
      setRewriteHintQuestions(json);
      console.log(json);
    });
  };

  const generateAllWriteQuestions = async () => {
    const response = await fetch("/api/getQuestions?" + new URLSearchParams({ "questionType": "Write" }), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response.json().then((json) => {
      setWriteQuestions(json);
    });
  };


  useEffect(() => {
    generateAllMultipleChoice();
    generateAllRandomQuestions();
    generateAllRewriteQuestions();
    generateAllRewriteHintQuestions();
    generateAllWriteQuestions();
  }, [])

  return (
    <Box>

      <h3>Title {"_".repeat(26)} Date {"_".repeat(26)}</h3>
      <h3>Name {"_".repeat(25)} Grade {"_".repeat(25)}</h3>

      <MultipleChoiceView multipleChoiceQuestions={mcquestions} />
      <RewriteQuestionsView rewriteQuestions={rewriteQuestions} />
      <RewriteHintQuestionsView rewriteHintQuestions={rewriteHintQuestions} />
      <RandomOrderView randomQuestions={randomQuestions} />
      <WriteQuestionsView writeQuestions={writeQuestions} />
    </Box>
  );
}
