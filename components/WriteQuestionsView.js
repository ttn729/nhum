import { Box } from "@mui/material";

export default function WriteQuestionsView({ writeQuestions: writeQuestions }) {
  if (!writeQuestions) {
    return null;
  }

  return (
    <Box>
      <h3>Trả lời câu hỏi</h3>

      {writeQuestions?.map((question, index) => {
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
