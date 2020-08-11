import styled from "styled-components";
import { motion } from "framer-motion";

export const CommentWrapper = styled(motion.div)`
  display: flex;
  padding: 10px 0px;
  margin-bottom: 5px;
  max-width: 900px;
`;

export const Avatar = styled(motion.img)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const AvatarInfoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
export const AvatarTitle = styled(motion.h3)`
  margin: 0;
  padding: 5px 10px;
`;
export const AvatarInfo = styled(motion.span)`
  color: grey;
  font-weight: 300;
  font-weight: 12px;
`;

export const AvatarComment = styled(motion.div)`
  padding: 10px;
  border: 1px solid lightgrey;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 6px;
  white-space: pre-line;
  background: #f5f5f5c4;
`;
