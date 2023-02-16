import Head from "next/head";
import { useEffect } from "react";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCollectionNameStore } from "../store/collectionNameStore";


import React from "react";

export default function EditQuestions() {
  const [questions, setQuestions] = React.useState([{}]);
  const [toDelete, setToDelete] = React.useState(false);
  const collectionName = useCollectionNameStore((state) => state.collectionName)


  const generateAllQuestions = async () => {

    if (collectionName) {
      const response = await fetch("/api/getQuestions?" + new URLSearchParams({ "collectionName": collectionName }), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      response.json().then((json) => {
        setQuestions(json);
        console.log(json);
      });
    }
    else {
      setQuestions([]);
    }
  };

  const deleteQuestion = async (id) => {
    const response = await fetch(
      "/api/deleteQuestion?" + new URLSearchParams({ id: id }),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    response.json().then((json) => {
      console.log(json);
    });

    setToDelete(!toDelete, collectionName);
  };

  useEffect(() => {
    generateAllQuestions();
  }, [toDelete, collectionName]);

  const handleDelete = (_id) => {
    deleteQuestion(_id);
    console.log(_id);
  };

  return (
    <div>
      <Head>
        <title>Ngân Hàng Đề Thi Của Nhúm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Click on the <DeleteIcon /> button to delete unwanted questions.
        </h1>

        {questions?.map((question, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexdirection: "row",
                alignItems: "center",
                border: 1,
              }}
            >
              <Box>
                <button onClick={() => handleDelete(question._id)}>
                  <DeleteIcon />
                </button>
              </Box>

              <Box>
                <h3>Question Type: {question.questionType}</h3>
                <h3>Question Prompt: {question.question}</h3>
                {question.questionType === "Multiple Choice" && (
                  <p>
                    {" "}
                    A. {question.correctOption} B. {question.option1} C.{" "}
                    {question.option2} D. {question.option3}
                  </p>
                )}
                {question.questionType === "RewriteHint" && (
                  <h3>
                    Question Hint: {question.hint}{" "}
                    {".".repeat(String(question.question).length)}
                  </h3>
                )}
              </Box>
            </Box>
          );
        })}
      </main>
    </div>
  );
}
