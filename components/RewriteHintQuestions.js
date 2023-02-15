import { Box } from "@mui/material";

export default function RewriteHintQuestionsView({ rewriteHintQuestions: rewriteHintQuestions }) {

  if (!rewriteHintQuestions) {
    return null;
  }


  return (
    <Box>
      <h1>Viết lại không thay đổi nghĩa</h1>

      {rewriteHintQuestions?.map((question, index) => {
        return (
          <Box key={index}>
            <h3>{index + 1}. {question.question}</h3>
            <p>{question.hint} {"_".repeat(String(question.question).length)}</p>

          </Box>
        );
      })}
    </Box>
  );
}
