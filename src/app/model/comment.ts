export interface CommentDetails {
  user: {
    profile: string;
    username: string;
  };
  content: string;
  posted: Date;
}
