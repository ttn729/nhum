import { Box } from "@mui/material";

export default function WriteQuestionsView({ writeQuestions: writeQuestions }) {
  if (!writeQuestions) {
    return null;
  }

  return (
    <Box>
      <h1>Trả lời câu hỏi</h1>

      {writeQuestions?.map((question, index) => {
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
