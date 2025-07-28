import {Heart} from "lucide-react";
import React, {useState} from "react";
import {Note} from "../types/Note"


const NoteComponent = ({note}: { note: Note }) => {
    const [like, setLike] = useState(false);

    const handleLike = () => {
        setLike(!like)
    }

    return (
        <div key={note.id} className="post-card">
            <p className="post-author">@MoniqueBellucci</p>
            <p className="post-content">{note.content}</p>
            <div className="post-footer" onClick={handleLike}>
                {like ?
                    <Heart fill="red" color="red" className="like-button"/> :
                    <Heart color="red" className="like-button"/>}
            </div>
        </div>
    )
}

export default NoteComponent;
