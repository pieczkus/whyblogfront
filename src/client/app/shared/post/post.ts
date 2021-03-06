import { PostBodyComponent } from './post-body-component';
export class Post {
  postId: string;
  author: string;
  title: string;
  body: PostBodyComponent[];
  coverUrl: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  publishedOn: number;
  commentCount: number;
  timeToRead: string;
  tags: string[];
  relatedPosts: string[];
  pinned: boolean;
}
