import { colors } from "@chegg-ui/theme";
import { Typography } from "@chegg-ui/typography";
import { styled } from "styled-components";

// Style for section headings
export const SectionHeading = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

// Style for individual questions
export const Question = styled.div`
  margin-bottom: 10px;
`;

// Style for question number
export const QuestionNumber = styled.span`
  font-weight: bold;
  // margin-right: 5px;
`;

// Style for question text
export const QuestionText = styled.span`
  margin-left: 20px;
`;

// Style for answer options
export const AnswerOption = styled.div`
  margin-left: 20px;
`;

// Style for marks
export const Marks = styled.span`
  font-weight: bold;
  margin-left: 10px;
`;

// Style for correct answers
export const CorrectAnswer = styled.span`
  color: green;
`;

// Style for incorrect answers
export const IncorrectAnswer = styled.span`
  color: red;
`;

export const MainContent = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  // margin:0 200px;
  justify-content:center;
  // height:80vh;
`;


export const MainDiv=styled.div`
background-color:#EFEFEF;
display:flex;
flex-direction:column;
padding:20px;
border-radius:10px;`

export const Title=styled(Typography)`
color:${colors.orange800};
text-align:center`

export const Topic=styled(Typography)`
text-align:center`

export const Marks1=styled(Typography)`
text-align:center;`