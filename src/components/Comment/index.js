import React from "react";
import moment from "moment";
import Markdown from "react-markdown";

import {
  CommentWrapper,
  Avatar,
  AvatarInfoContainer,
  AvatarTitle,
  AvatarInfo,
  AvatarComment
} from "./styledComponent";

const Comment = ({ comment }) => {
  return (
    <CommentWrapper>
      <Avatar src={comment.user.avatar_url} />
      <AvatarInfoContainer>
        <AvatarTitle>
          {comment.user?.login}
          <AvatarInfo>
            {` commented ${moment(comment.updated_at).fromNow()}`}
          </AvatarInfo>
        </AvatarTitle>
        <AvatarComment>
          <Markdown source={comment.body} />
        </AvatarComment>
      </AvatarInfoContainer>
    </CommentWrapper>
  );
};

export default Comment;
