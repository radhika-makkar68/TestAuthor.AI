import React from "react";
import {
  SectionHeading,
  Question,
  QuestionNumber,
  QuestionText,

  MainDiv,
  MainContent,
  Title,
  Topic,
  Marks1,
} from "./QuestionPaper.styles";
import { Typography } from "@chegg-ui/typography";

const QuestionPaper: React.FunctionComponent = () => {
  const RenderQuestionPaper = () => {
    const questionPaperData = `Chemistry Question Paper
        Topics: Acid, Bases, Organic Compounds
        Total Marks: 10 Marks
        Section A - 10 Marks
        1. Which of the following is a weak acid?
           a) HCl
           b) H2SO4
           c) CH3COOH
           d) HNO3
           (1 Mark)
        2. What is the pH of a neutral solution at 25°C?
           a) 0
           b) 7
           c) 14
           d) 1
           (1 Mark)
        3. Which of the following is a strong base?
           a) NH3
           b) KOH
           c) H2O
           d) CH3COOH
           (1 Mark)
        4. What is the general formula for alkanes?
           a) CnH2n+2
           b) CnH2n
           c) CnH2n-2
           d) CnH2n+1
           (1 Mark)
        5. Which functional group is present in alcohols?
           a) -OH
           b) -COOH
           c) -CHO
           d) -NH2
           (1 Mark)
        6. What is the pH of a 0.001M HCl solution?
           a) 3
           b) 2
           c) 1
           d) 0
           (1 Mark)
        7. What is the conjugate base of H2O?
           a) OH-
           b) H3O+
           c) H2O
           d) H+
           (1 Mark)
        8. What is the IUPAC name for CH3-CH2-CH2-CH3?
           a) Methane
           b) Ethane
           c) Propane
           d) Butane
           (1 Mark)
        9. What is the general formula for alkenes?
           a) CnH2n+2
           b) CnH2n
           c) CnH2n-2
           d) CnH2n+1
           (1 Mark)
        10. Which functional group is present in carboxylic acids?
            a) -OH
            b) -COOH
            c) -CHO
            d) -NH2
            (1 Mark)
    `// Replace with the actual question paper data

    const sections = questionPaperData.split("Section");
    const title = sections[0].trim().split("\n"); // Extract the title
    console.log("title",title[0])
    return (
        <MainContent>
      <MainDiv className="question-paper">
        <Title variant="h1">{title[0]}</Title>
        <Topic variant="h4">{title[1]}</Topic>
        <Marks1 variant="h5">{title[2]}</Marks1>
        
        {sections.map((section, index) => {
          if (index === 0) return null;

          const lines = section.split("\n");
          return (
            <div key={index}>
              <SectionHeading>Section {lines[0].trim()}</SectionHeading>
              {lines.slice(1).map((line, lineIndex) => {
                const trimmedLine = line.trim();

                const questionNumber = trimmedLine.split(".")[0];
                const questionText = trimmedLine.split(".").slice(1).join(".");

                return (
                  <Question key={lineIndex}>
                    <QuestionNumber>{questionNumber}</QuestionNumber>
                    <QuestionText>{questionText}</QuestionText>
                  </Question>
                );
              })}
            </div>
          );
        })}
      </MainDiv>
      </MainContent>
    );
  };

  return (
    <>
      <div>
        <RenderQuestionPaper />
      </div>
    </>
  );
};

export default QuestionPaper;
