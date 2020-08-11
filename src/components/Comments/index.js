import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CommentIssueContainer,
  IssueFrom,
  IssueNumberText,
  RepoLink,
  IssueHeadingContainer,
  IssueHeading,
  CommentsContainer,
  IssueStatus,
  IssueSubHeading
} from "./styledComponents";
import Comment from "../Comment";
import { GoIssueOpened } from "react-icons/go";
import moment from "moment";

const Comments = () => {
  const { username, repository, issue } = useParams();
  const [comments, setComments] = useState({
    loading: false,
    error: false,
    commentsList: []
  });
  const [issueState, setIssues] = useState({
    loading: false,
    issue: {},
    error: false
  });

  useEffect(() => {
    const getRelatedIssue = async () => {
      try {
        setIssues({ ...issueState, loading: true, error: false });
        const response = await fetch(
          `https://api.github.com/repos/${username}/${repository}/issues/${issue}`
        );

        if (response.ok) {
          const json = await response.json();
          setIssues({ ...issueState, loading: false });
          setIssues({ ...issueState, issue: json });
        } else {
          throw new Error("Network response was not ok.");
        }
      } catch (err) {
        console.log("catched error", err);
        setIssues({ ...issueState, error: err, loading: false });
      }
    };
    getRelatedIssue();
    const getComments = async () => {
      try {
        setComments({ ...comments, loading: true, error: false });
        const response = await fetch(
          `https://api.github.com/repos/${username}/${repository}/issues/${issue}/comments`
        );
        if (response.ok) {
          const json = await response.json();
          setComments({ ...comments, loading: false });
          setComments({ ...comments, commentsList: json });
        } else {
          throw new Error("Unable to make the request. Please try again");
        }
      } catch (err) {
        console.log("catched error", err);
        setComments({ ...comments, error: err, loading: false });
      }
    };
    getComments();
  }, [username, repository, issue]);

  return (
    <CommentIssueContainer>
      <IssueFrom>
        Comments for issue
        <IssueNumberText>#{issue}</IssueNumberText>
        of <RepoLink>{`${username}/${repository}`}</RepoLink>
      </IssueFrom>
      <IssueHeadingContainer>
        <IssueHeading>{issueState.issue.title}</IssueHeading>
        <IssueSubHeading>
          <IssueStatus>
            <GoIssueOpened />
            {issueState.issue.state}
          </IssueStatus>
          {`${issueState.issue.user?.login} opened the issue ${moment(
            issueState.issue.created_at
          ).fromNow()}`}
        </IssueSubHeading>
      </IssueHeadingContainer>
      <CommentsContainer>
        {comments.commentsList.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </CommentsContainer>
    </CommentIssueContainer>
  );
};

export default Comments;
