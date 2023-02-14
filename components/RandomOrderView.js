import { Box } from "@mui/material";

export default function RandomOrderView({ randomQuestions }) {
  if (!randomQuestions) {
    return null;
  }

  return (
    <Box>
      <h1>Sắp xếp từ thành câu hoàn chỉnh</h1>

      {randomQuestions?.map((question, index) => {
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