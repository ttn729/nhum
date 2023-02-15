import { Box } from "@mui/material";

export default function RewriteQuestionsView({ rewriteQuestions: rewriteQuestions }) {
  if (!rewriteQuestions) {
    return null;
  }

  return (
    <Box>
      <h3>Viết lại câu hoàn chỉnh dựa theo từ cho sẵn</h3>

      {rewriteQuestions?.map((question, index) => {
        return (
          <Box key={index}>
            <p>{index + 1}. {question.question}</p>
            <p>{"_".repeat(String(question.question).length)}</p>
          </Box>
        );
      })}
    </Box>
  );
}
