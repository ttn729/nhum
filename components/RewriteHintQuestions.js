import { Box } from "@mui/material";

export default function RewriteHintQuestionsView({ rewriteHintQuestions: rewriteHintQuestions }) {

  if (!rewriteHintQuestions || rewriteHintQuestions.length === 0) {
    return null;
  }


  return (
    <Box>
      <h3>Viết lại không thay đổi nghĩa</h3>

      {rewriteHintQuestions?.map((question, index) => {
        return (
          <Box key={index}>
            <p>{index + 1}. {question.question}</p>
            <p>{question.hint} {"_".repeat(String(question.question).length)}</p>

          </Box>
        );
      })}
    </Box>
  );
}
