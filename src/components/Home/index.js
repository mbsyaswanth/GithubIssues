import React, { useState, useEffect, useRef } from "react";
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
  IssuesList,
  SearchWithPaginationWrapper,
  PaginationContainer,
  PageControlButton,
  PageNo
} from "./styledComponents";
import Issue from "../Issue";
import { AnimatePresence } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  const [searched, setSearched] = useState(false);
  const [issues, setIssues] = useState({
    loading: false,
    issuesList: [],
    error: false
  });

  const [pageNo, setPageNo] = useState(1);
  const [searchText, setSearchText] = useState("");

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    searchForIssues();
  }, [pageNo]);

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
      <Issue
        key={issue.number}
        searchText={searchText}
        issue={issue}
        custom={i}
      />
    ));
  };

  const searchForIssues = async (event) => {
    event && event.preventDefault();
    console.log(pageNo);
    setSearched(true);
    try {
      setIssues({ ...issues, loading: true, error: false });
      const response = await fetch(
        `https://api.github.com/repos/${searchText}/issues?page=${pageNo}&&per_page=10`
      );
      if (response.ok) {
        const json = await response.json();
        setIssues({ ...issues, loading: false });
        setIssues({ ...issues, issuesList: json });
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (err) {
      console.log("catched error", err);
      setIssues({ ...issues, error: err, loading: false });
    }
  };

  const onSearchTextChange = (event) => {
    setSearchText(event.target.value);
    setIssues({ ...issues, issuesList: [], error: false });
  };

  const onClickBack = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const onClickFront = () => {
    setPageNo(pageNo + 1);
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
      <SearchWithPaginationWrapper variants={item}>
        <Label onSubmit={searchForIssues}>
          <InputWithHelpText>
            <Input
              error={issues.error}
              required
              onChange={onSearchTextChange}
              value={searchText}
              type="search"
              id="search"
              placeholder="search for username/repo"
            />
            *search for github public repo issues here
          </InputWithHelpText>
          <SearchButton>Search</SearchButton>
        </Label>
        {searched && (
          <PaginationContainer>
            <PageControlButton onClick={onClickBack}>
              <MdKeyboardArrowLeft />
            </PageControlButton>
            <PageNo readOnly type="string" value={pageNo} />
            <PageControlButton onClick={onClickFront}>
              <MdKeyboardArrowRight />
            </PageControlButton>
          </PaginationContainer>
        )}
      </SearchWithPaginationWrapper>
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
