import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import React from "react";

export default function EditQuestions() {
  const [questions, setQuestions] = React.useState([{}]);

  const generateAllQuestions = async () => {
    const response = await fetch("/api/getQuestions", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response.json().then((json) => {
      setQuestions(json);
      console.log(json);
    });
  };

  useEffect(() => {
    generateAllQuestions();
  }, []);

  const handleDelete = (_id) => {
    console.log(_id);
  }

  return (
    <div className="container">
      <Head>
        <title>Ngân Hàng Đề Thi Của Nhúm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <Link href="/questions">Ngân Hàng Đề Thi Của Nhúm</Link>
        </h1>

        {questions?.map((question, index) => {
          return (
            <Box
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

              <Box key={index} sx={{}}>
                <h3>Question Type: {question.questionType}</h3>
                <h3>Question Prompt: {question.question}</h3>
              </Box>
            </Box>
          );
        })}
      </main>
    </div>
  );
}
