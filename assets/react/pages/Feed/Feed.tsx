import React from "react";
import fakeNotes from "./fakeNotes";
import {Heart} from "lucide-react";
import {Note} from "../../types/Note";
import NoteComponent from "../../components/Note"

const Feed = () => {
    const notes: readonly Note[] = fakeNotes;

    return (
        <div className="feed-container">
            <h1 className="feed-title">Posts du jour</h1>
            <div className="feed-posts">
                {fakeNotes
                    .filter((note) => note.status === "posted")
                    .map((note) => (
                        <NoteComponent note={note}/>
                    ))}
            </div>
        </div>
    );
};

export default Feed;
