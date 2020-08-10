import React from "react";
import { GoIssueOpened } from "react-icons/go";

import {
  IssueContainer,
  IssueIcon,
  IssueTextContainer,
  TextWithTags,
  HeadingText,
  Tags,
  InfoText
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

function Issue({ issue, custom, ...others }) {
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
          <HeadingText href={issue.html_url} target="_blank">
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
    </IssueContainer>
  );
}

export default Issue;
