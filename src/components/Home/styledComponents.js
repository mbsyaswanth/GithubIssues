import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: ${(props) => !props.searched && "35"}px;
`;

export const LogoContainer = styled(motion.div)`
  display: flex;
  flex-direction: ${(props) => (props.searched ? "row" : "column")};
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  backdrop-filter: blur(20px);
  width: 100%;
`;

export const Logo = styled(motion.img)`
  margin: 0 10px;
  width: ${(props) => (props.searched ? "40px" : "auto")};
`;

export const LogoHeading = styled(motion.h2)`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: #1d3557;
  margin-top: ${(props) => (props.searched ? "revert" : "15px")};
`;

export const Label = styled(motion.form)`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #457b9d;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SearchWithPaginationWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: sticky;
  top: 70px;
  background: white;
  width: 100%;
  margin-bottom: 5px;
`;

export const Input = styled(motion.input)`
  margin: 10px 0px;
  width: 445px;
  padding: 10px;
  padding-right: 5px;
  border: 2px solid ${(props) => (props.error ? "red" : "#457b9d")};
  box-sizing: border-box;
  border-radius: 7px;
  font-weight: bold;
  font-size: 16px;
  ::placeholder {
    /* color: #a8dadc; */
  }
  @media (max-width: 500px) {
    width: 275px;
  }
`;

export const IssuesIllustration = styled(motion.img)`
  margin-top: 50px;
  width: 50%;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const SearchButton = styled(motion.button)`
  display: flex;
  margin: 10px 5px;
  background: #457b9d;
  color: white;
  font-weight: 600;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  border: 2px solid #457b9d;
  transition: all 0.1s linear;
  :focus {
    outline: none;
  }
  :hover {
    background: white;
    color: #457b9d;
  }
`;

export const InputWithHelpText = styled(motion.span)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const IssuesList = styled(motion.div)`
  margin-top: 10px;
  padding: 0px 15px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 4px;
`;

export const PageNo = styled(motion.input)`
  margin: 0px 15px;
  width: 40px;
  padding: 3px;
  border: 2px solid #457b9d;
  box-sizing: border-box;
  border-radius: 7px;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  ::placeholder {
    /* color: #a8dadc; */
  }
`;
export const PageControlButton = styled(motion.button)`
  display: flex;
  font-size: 25px;
  padding: 0px;
  margin: auto 0;
  background: white;
  color: #457b9d;
  font-weight: 600;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.1s linear;
  :focus {
    outline: none;
  }
  :hover {
    background: #b8daefeb;
  }
`;
