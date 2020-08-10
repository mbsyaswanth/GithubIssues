import React, { useState } from "react";
import {
  Container,
  LogoContainer,
  Logo,
  LogoHeading,
  Label,
  Input,
  IssuesIllustration,
  SearchButton,
  InputWithHelpText,
  IssuesList
} from "./styledComponents";
import Issue from "../Issue";
import { AnimatePresence } from "framer-motion";

const Home = () => {
  const [searched, setSearched] = useState(false);
  const [issues, setIssues] = useState({ loading: false, issuesList: [] });
  const [searchText, setSearchText] = useState("");

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren"
      }
    },
    exit: { opacity: 0 }
  };

  const searchList = {
    visible: {
      opacity: 1,
      transition: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.5,
          ease: "easeOut",
          duration: 1.5
        }
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.5
      }
    }
  };

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
    exit: { opacity: 0 }
  };

  const displayIssues = () => {
    return issues.issuesList.map((issue, i) => (
      <Issue key={issue.number} issue={issue} custom={i} />
    ));
  };

  const searchForIssues = async () => {
    setSearched(true);
    const response = await fetch(
      `https://api.github.com/repos/${searchText}/issues`
    );
    if (response.ok) {
      const json = await response.json();
      setIssues({ ...issues, issuesList: json });
    } else {
      console.log("error getting response");
    }
  };

  const onSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <Container
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={list}
      searched={searched}
    >
      <LogoContainer variants={item} searched={searched} layout>
        <Logo src="/GitHub.png" layout searched={searched} />
        <LogoHeading searched={searched}>GitHub Issues</LogoHeading>
      </LogoContainer>
      <Label for="search" variants={item}>
        <InputWithHelpText>
          <Input
            onChange={onSearchTextChange}
            value={searchText}
            type="search"
            id="search"
            placeholder="search for username/repo"
          />
          *search for github public repo issues here
        </InputWithHelpText>
        <SearchButton onClick={searchForIssues}>Search</SearchButton>
      </Label>
      <AnimatePresence exitBeforeEnter>
        {!searched ? (
          <IssuesIllustration src="/issues.jpg" variants={item} />
        ) : (
          <IssuesList initial="hidden" animate="visible" variants={searchList}>
            {displayIssues()}
          </IssuesList>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Home;
