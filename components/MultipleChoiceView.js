import { Box } from "@mui/material";

export default function MultipleChoiceView({ multipleChoiceQuestions }) {
  if (!multipleChoiceQuestions) {
    return null;
  }

  return (
    <Box>
      <h3>Phần trắc nghiệm</h3>

      {multipleChoiceQuestions?.map((question, index) => {
        return (
          <Box key={index}>
            <p>{index + 1}. {question.question}</p>
            <p>
              A. {question.correctOption} B. {question.option1} C. {question.option2} D. {question.option3}
            </p>
          </Box>
        );
      })}
    </Box>
  );
}
