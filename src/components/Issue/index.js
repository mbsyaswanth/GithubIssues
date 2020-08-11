import React from "react";

import { GoIssueOpened, GoGitPullRequest } from "react-icons/go";
import { AiOutlineComment } from "react-icons/ai";

import {
  IssueContainer,
  IssueIcon,
  IssueTextContainer,
  TextWithTags,
  HeadingText,
  Tags,
  InfoText,
  Comments,
  CommentsText,
  Pr,
  PrText,
  Assignee,
  AssigneeImg
} from "./styledComponents";
import moment from "moment";

const issueItem = {
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3
    }
  }),
  hidden: { opacity: 0, x: -200 },
  exit: { opacity: 1 }
};

function Issue({ issue, custom, searchText, ...others }) {
  const { title } = issue;

  const renderTags = () => {
    return issue.labels.map((label) => {
      return (
        <Tags href={label.url} target="_blank" color={label.color}>
          {label.name}
        </Tags>
      );
    });
  };
  return (
    <IssueContainer custom={custom} variants={issueItem}>
      <IssueIcon>
        <GoIssueOpened />
      </IssueIcon>
      <IssueTextContainer>
        <TextWithTags>
          <HeadingText href={`/${searchText}/${issue.number}`} target="_blank">
            {title}
          </HeadingText>
          {renderTags()}
        </TextWithTags>
        <InfoText>
          {`#${issue.number} opened ${moment(issue.updated_at).fromNow()} by ${
            issue.user.login
          }`}
        </InfoText>
      </IssueTextContainer>
      {issue.assignee && (
        <Assignee href={issue.assignee.html_url} target="_blank">
          <AssigneeImg src={issue.assignee.avatar_url} />
        </Assignee>
      )}
      {issue.pull_request && (
        <Pr href={issue.pull_request?.html_url} target="_blank">
          <GoGitPullRequest /> <PrText>1</PrText>
        </Pr>
      )}
      {issue.comments > 0 && (
        <Comments>
          <AiOutlineComment />
          <CommentsText>{issue.comments}</CommentsText>
        </Comments>
      )}
    </IssueContainer>
  );
}

export default Issue;
