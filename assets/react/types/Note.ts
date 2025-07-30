export type Note = {
    id: number;
    user_id: number;
    dateNote: string;
    isOnTheTree: boolean;
    content: string;
    status: "posted" | "archived" | "deleted";
};
