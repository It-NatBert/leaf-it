import React from "react";
import fakeNotes from "./fakeNotes";

type Note = {
  id: number;
  user_id: number;
  dateNote: string;
  isOnTheTree: boolean;
  content: string;
  status: "posted" | "archived" | "deleted";
};

const Feed = () => {
  const notes: readonly Note[] = fakeNotes;

  return (
    <div className="feed-container">
        <h1 className="feed-title">Posts du jour</h1>
        <div className="feed-posts">
            {fakeNotes
            .filter((note) => note.status === "posted")
            .map((note) => (
                <div key={note.id} className="post-card">
                <p className="post-author">@MoniqueBellucci</p>
                <p className="post-content">{note.content}</p>
                <div className="post-footer">♡</div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Feed;
