import { Box } from "@mui/material";

export default function RewriteQuestionsView({ rewriteQuestions: rewriteQuestions }) {
  if (!rewriteQuestions) {
    return null;
  }

  return (
    <Box>
      <h1>Viết lại câu hoàn chỉnh dựa theo từ cho sẵn</h1>

      {rewriteQuestions?.map((question, index) => {
        return (
          <Box key={index}>
            <h3>{index + 1}. {question.question}</h3>
            <p>{"_".repeat(String(question.question).length)}</p>
          </Box>
        );
      })}
    </Box>
  );
}
