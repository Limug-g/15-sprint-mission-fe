import { use } from "react";
import { CommentList } from "../CommentList";

export default function CommentSection({ commentPromise }) {
  const comments = use(commentPromise);
  return (
    <div className="container">
      <div className="goComment">댓글달기</div>
      <div className="commentInput">
        <textarea />
        <button>등록</button>
      </div>
      <CommentList comments={comments}/>
    </div>
  );
}
