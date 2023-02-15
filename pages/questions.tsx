import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import Head from "next/head";
import React from "react";

export default function Questions() {
  const [questionType, setQuestionType] = React.useState("");
  const [writeQuestion, setWriteQuestion] = React.useState("");
  const [hint, setHint] = React.useState("");

  const [correctOption, setCorrectOption] = React.useState("");
  const [option1, setOption1] = React.useState("");
  const [option2, setOption2] = React.useState("");
  const [option3, setOption3] = React.useState("");

  const handleHintChange = (event: any) => {
    setHint(event.target.value);
  };

  const handleCorrectOptionChange = (event: any) => {
    setCorrectOption(event.target.value);
  };

  const handleOption1Change = (event: any) => {
    setOption1(event.target.value);
  };

  const handleOption2Change = (event: any) => {
    setOption2(event.target.value);
  };

  const handleOption3Change = (event: any) => {
    setOption3(event.target.value);
  };

  const chooseQuestion = (event: any) => {
    setQuestionType(event.target.value);
  };

  const handleWriteQuestionChange = (event: any) => {
    setWriteQuestion(event.target.value);
  };

  const submitQuestion = async () => {
    if (
      (questionType === "Write" ||
        questionType === "Random" ||
        questionType === "Rewrite") &&
      writeQuestion !== ""
    ) {
      await fetch("/api/addQuestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          questionType: questionType,
          question: writeQuestion,
        }),
      });

      setWriteQuestion("");
    }

    if (questionType === "RewriteHint" && hint && writeQuestion) {
      await fetch("/api/addQuestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          questionType: questionType,
          question: writeQuestion,
          hint: hint,
        }),
      });
      setWriteQuestion("");
      setHint("");
    }

    if (
      questionType === "Multiple Choice" &&
      writeQuestion &&
      correctOption &&
      option1 &&
      option2 &&
      option3
    ) {
      await fetch("/api/addQuestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          questionType: questionType,
          question: writeQuestion,
          correctOption: correctOption,
          option1: option1,
          option2: option2,
          option3: option3,
        }),
      });

      setWriteQuestion("");
      setCorrectOption("");
      setOption1("");
      setOption2("");
      setOption3("");
    }
  };

  return (
    <div>
      <Head>
        <title>Questions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Make Questions</h1>

        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="select-question-type">Question Type</InputLabel>
          <Select
            labelId="select-question-type"
            id="select-question-type"
            value={questionType}
            label="Question Type"
            onChange={chooseQuestion}
          >
            <MenuItem value={"Multiple Choice"}>Multiple Choice</MenuItem>
            <MenuItem value={"Write"}>Write Sentence</MenuItem>
            <MenuItem value={"Random"}>Random Order</MenuItem>
            <MenuItem value={"Rewrite"}>Rewrite Question</MenuItem>
            <MenuItem value={"RewriteHint"}>
              Rewrite with Hint Question
            </MenuItem>
          </Select>
        </FormControl>

        {questionType === "Multiple Choice" && (
          <Box>
            <TextField
              id="write-question"
              label="Enter Question"
              variant="outlined"
              value={writeQuestion}
              onChange={handleWriteQuestionChange}
              fullWidth
            />

            <Box margin="normal">
              <TextField
                id="outlined-basic"
                label="Correct Option"
                variant="outlined"
                value={correctOption}
                onChange={handleCorrectOptionChange}
              />
              <TextField
                id="outlined-basic"
                label="Option 1"
                variant="outlined"
                value={option1}
                onChange={handleOption1Change}
              />
              <TextField
                id="outlined-basic"
                label="Option 2"
                variant="outlined"
                value={option2}
                onChange={handleOption2Change}
              />
              <TextField
                id="outlined-basic"
                label="Option 3"
                variant="outlined"
                value={option3}
                onChange={handleOption3Change}
              />
            </Box>
          </Box>
        )}

        {(questionType === "Write" ||
          questionType === "Random" ||
          questionType === "Rewrite") && (
          <Box>
            <TextField
              id="write-question"
              label="Enter Question"
              variant="outlined"
              value={writeQuestion}
              onChange={handleWriteQuestionChange}
              fullWidth
            />
          </Box>
        )}

        {questionType === "RewriteHint" && (
          <Box>
            <TextField
              id="write-question"
              label="Enter Question"
              variant="outlined"
              value={writeQuestion}
              onChange={handleWriteQuestionChange}
              fullWidth
            />
            <TextField
              id="write-hint"
              label="Hint"
              variant="outlined"
              value={hint}
              onChange={handleHintChange}
              fullWidth
            />
          </Box>
        )}

        {questionType !== "" && (
          <Button onClick={submitQuestion}>Add Question</Button>
        )}
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .subtitle {
          font-size: 2rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
