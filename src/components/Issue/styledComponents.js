import styled from "styled-components";
import { motion } from "framer-motion";

export const IssueContainer = styled(motion.div)`
  display: flex;
  padding: 15px;
  margin: 5px auto;
  margin-bottom: 10px;
  max-width: 1100px;
  background: linear-gradient(
    93.12deg,
    #f8f4f4 50.91%,
    rgba(248, 244, 244, 0) 69.63%
  );
  border: 2px solid #f8f4f4;
  box-sizing: border-box;
  border-radius: 7px;
  :hover {
    background: #ededed;
  }
`;

export const IssueIcon = styled(motion.div)`
  color: rgb(40, 167, 69);
  margin-top: 3px;
  margin-right: 5px;
`;

export const IssueTextContainer = styled(motion.div)`
  flex: 1;
`;

export const TextWithTags = styled(motion.div)`
  flex: 1;
`;

export const HeadingText = styled(motion.a)`
  text-decoration: none;
  cursor: pointer;
  color: #1d3557;
  font-weight: bold;
  :hover {
    color: blue;
  }
`;

const invertHex = (hex) => {
  return (Number(`0x1${hex}`) ^ 0xffffff).toString(16).substr(1).toUpperCase();
};

export const Tags = styled(motion.a)`
  color: #${(props) => invertHex(props.color)};
  font-weight: bold;
  border-radius: 9px;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
  background: #${(props) => props.color};
  padding: 2px 7px;
  margin: 0 3px;
`;

export const InfoText = styled(motion.div)`
  color: grey;
  font-size: 12px;
  padding-top: 4px;
`;
