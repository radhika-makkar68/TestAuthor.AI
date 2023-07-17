import { PasteIcon, SearchIcon, UploadIcon } from "@chegg-ui/horizon-icons";
import { SelectionMenu } from "@chegg-ui/selectionmenu";
import React, { useState } from "react";
import {
  ContentDiv,
  Heading,
  MainContent,
  Menu,
  NumberInput,
  OptionDiv,
  OptionDropdown,
  SecondaryDiv,
  UploadDiv,
  UploadLink,
} from "./Home.styles";
import { Typography } from "@chegg-ui/typography";
import { Input, useFileUploadBehavior } from "@chegg-ui/input";
import { ThemeProvider, createTheme, themes } from "@chegg-ui/theme";
import { Textarea } from "@chegg-ui/textarea";
import { Button, SecondaryButton } from "@chegg-ui/button";
import { Link } from "@chegg-ui/link";
import { Dropdown } from "@chegg-ui/dropdown";
import { useNavigate } from 'react-router-dom';

const Home: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = useState<number | undefined>(1);
  const navigate = useNavigate();
  
  console.log(activeItem);

  const props = {
    items: [
      {
        text: "Topic Search",
        icon: <SearchIcon />,
      },
      {
        text: "Type or Paste Content",
        icon: <PasteIcon size="large" />,
      },
      {
        text: "Upload document",
        icon: <UploadIcon />,
      },
    ],
    onItemClick: setActiveItem,
    activeItemIndex: activeItem,
  };
  const [files, setFiles] = useState([] as File[]);
  const acceptedTypes = [".pdf", ".docx", ".doc"];
  const selectMultiple = true;
  const { onTriggerUpload, HiddenInput } = useFileUploadBehavior({
    acceptedTypes,
    selectMultiple,
    onUploadFile: (f) => {
      setFiles((prevFiles) => [...prevFiles, f]);
    },
  });

  const QUESTION_TYPES: { [key: string]: string } = {
    EasyMCQ: "EASY_MCQ",
    MediumMCQ: "MEDIUM_MCQ",
    HardMCQ: "HARD_MCQ",
    Descriptive: "DESCRIPTIVE",
  };

  const [value, setValue] = useState("");
  console.log();

  const handleGenerateQuestionsClick = () => {
    navigate('/question-paper-preview');
  };

  
  return (
    <MainContent>
        <Heading variant="h1">TestAuthor.AI</Heading>
      <ContentDiv>
        <Typography variant="subtitle">Content Source</Typography>
        <Menu size="lg" {...props} activeItemIndex={activeItem} />
        {activeItem === 0 ? (
          <>
             <Typography variant="subtitle">Enter Your Subject</Typography>
            <Input
              inputId="username"
              labelText=""
              onChange={() => {
                /* do nothing */
              }}
              name="username"
              autoComplete="username"
              type="text"
              placeholder="Enter a subject name"
              data-test="login-cred-email-input"
            />
            <Typography variant="subtitle">Enter Your Topic</Typography>
            <Input
              inputId="username"
              labelText=""
              onChange={() => {
                /* do nothing */
              }}
              name="username"
              autoComplete="username"
              type="text"
              placeholder="Enter a topic name"
              data-test="login-cred-email-input"
            />
          </>
        ) : null}
        {activeItem === 1 ? (
          <>
            <Typography variant="subtitle">
              Type/Paste your Content here
            </Typography>
            <Textarea
              data-test="textArea"
              inputId="need-info-textarea"
              placeholder="Type/Paste your content(minimum 50 words) here to generate questions..."
              width={"100%"}
              height={"200px"}
              maxLength={1000}
              labelText=""
              onChange={() => {}}
            />
          </>
        ) : null}
        {activeItem === 2 ? (
          <>
            <UploadDiv onClick={onTriggerUpload}>
              {" "}
              <UploadLink>Click to Browse! (.pdf,.docx,.doc)</UploadLink>
            </UploadDiv>
            {HiddenInput}
            {files.map((file, index) => (
              <div key={index}>{file.name}</div>
            ))}
          </>
        ) : null}
        <SecondaryDiv>
          <Typography variant="subtitle">Select Question Types</Typography>

          <Typography variant="subtitle">Select Number of Questions</Typography>
        </SecondaryDiv>
        <OptionDiv>
          <OptionDropdown
            inputId={"email_action"}
            data-test={"email_action"}
            options={Object.keys(QUESTION_TYPES)}
            placeholder={"Choose question types"}
            labelText={""}
            onSelectValue={(newValue: string) => {
              setValue(newValue);
            }}
            value={value}
          />
          <NumberInput
            inputId="number"
            labelText=""
            onChange={() => {
              /* do nothing */
            }}
            type="number"
            placeholder="Eg. 10"
          />
        </OptionDiv>
        <Button disableHoverAnimation  onClick={handleGenerateQuestionsClick}>Generate Questions</Button>
      </ContentDiv>
    </MainContent>
  );
};

export default Home;
