import styled from "styled-components";
import { motion } from "framer-motion";

export const CommentIssueContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IssueFrom = styled(motion.h3)`
  color: #1d3557;
  padding: 10px 20px;
  padding-bottom: 15px;
  margin-top: 0px;
  font-size: 15px;
  display: flex;
  font-weight: 500;
  width: 100%;
  justify-content: start;
  background: #b5d9da59;
  border-bottom: 2px solid #d0e0e1;
  box-sizing: border-box;
  margin-bottom: 0;
`;

export const RepoLink = styled(motion.a)`
  color: #1d3557;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  margin: 0 10px;
  display: flex;
  margin: 0 10px;
`;

export const IssueNumberText = styled(RepoLink)`
  color: grey;
`;

export const IssueHeadingContainer = styled(motion.div)`
  position: sticky;
  top: 0px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1),
    0px 2px 3px rgba(0, 0, 0, 0.2), 0px 1px 3px rgba(0, 0, 0, 0.2),
    0px 2px 3px rgba(0, 0, 0, 0.1);
  padding: 10px 40px;
  box-sizing: border-box;
  background: #fafbfc;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const IssueHeading = styled(motion.h1)`
  font-size: 20px;
  color: #1d3557;
  font-weight: 500;
  margin-bottom: 0px;
  margin-top: 0px;
`;

export const IssueSubHeading = styled(motion.div)`
  color: grey;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

export const CommentsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 5px 15px;
  flex-direction: column;
  box-sizing: border-box;
`;

export const IssueStatus = styled(motion.button)`
  display: flex;
  align-self: end;
  margin: 10px 5px;
  background: #07d907;
  color: white;
  font-weight: 600;
  padding: 4px 10px;
  border: none;
  align-items: center;
  margin-left: 0;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.1s linear;
  :focus {
    outline: none;
  }
`;
