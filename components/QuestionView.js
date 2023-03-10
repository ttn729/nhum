import { Box } from "@mui/material";
import { useEffect } from "react";
import React from "react";

import MultipleChoiceView from './MultipleChoiceView'
import RandomOrderView from "./RandomOrderView";
import RewriteHintQuestionsView from "./RewriteHintQuestions";
import WriteQuestionsView from "./WriteQuestionsView";
import RewriteQuestionsView from "./RewriteQuestionsView";
import { useCollectionNameStore } from "../store/collectionNameStore";


export default function ViewQuestions() {
  const [mcquestions, setMCQuestions] = React.useState([]);
  const [randomQuestions, setRandomQuestions] = React.useState([]);
  const [rewriteQuestions, setRewriteQuestions] = React.useState([]);
  const [rewriteHintQuestions, setRewriteHintQuestions] = React.useState([]);
  const [writeQuestions, setWriteQuestions] = React.useState([]);
  const collectionName = useCollectionNameStore((state) => state.collectionName)
  
  const generateAllMultipleChoice = async () => {
    const response = await fetch("/api/getQuestions?" + new URLSearchParams({ "questionType": "Multiple Choice", "collectionName": collectionName }), {
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
    const response = await fetch("/api/getQuestions?" + new URLSearchParams({ "questionType": "Random", "collectionName": collectionName  }), {
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
    const response = await fetch("/api/getQuestions?" + new URLSearchParams({ "questionType": "Rewrite", "collectionName": collectionName }), {
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
    const response = await fetch("/api/getQuestions?" + new URLSearchParams({ "questionType": "RewriteHint", "collectionName": collectionName  }), {
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
    const response = await fetch("/api/getQuestions?" + new URLSearchParams({ "questionType": "Write", "collectionName": collectionName  }), {
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

      <h3>Title: {"_".repeat(26 + 4)}  Date: {"_".repeat(26 + 4)}</h3>
      <h3>Name: {"_".repeat(25 + 4)} Grade: {"_".repeat(25 + 4)}</h3>

      <MultipleChoiceView multipleChoiceQuestions={mcquestions} />
      <RewriteQuestionsView rewriteQuestions={rewriteQuestions} />
      <RewriteHintQuestionsView rewriteHintQuestions={rewriteHintQuestions} />
      <RandomOrderView randomQuestions={randomQuestions} />
      <WriteQuestionsView writeQuestions={writeQuestions} />
    </Box>
  );
}
