import { Box } from "@mui/material";

export default function MultipleChoiceView({ multipleChoiceQuestions }) {
  if (!multipleChoiceQuestions) {
    return null;
  }

  return (
    <Box>
      <h1>Phần trắc nghiệm</h1>

      {multipleChoiceQuestions?.map((question, index) => {
        return (
          <Box key={index}>
            <h3>{index + 1}. {question.question}</h3>
            <p>
              A. {question.correctOption} B. {question.option1} C. {question.option2} D. {question.option3}
            </p>
          </Box>
        );
      })}
    </Box>
  );
}
