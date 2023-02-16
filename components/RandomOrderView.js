import { Box } from "@mui/material";

export default function RandomOrderView({ randomQuestions }) {
  if (!randomQuestions || randomQuestions.length === 0) {
    return null;
  }

  return (
    <Box>
      <h3>Sắp xếp từ thành câu hoàn chỉnh</h3>

      {randomQuestions?.map((question, index) => {
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
