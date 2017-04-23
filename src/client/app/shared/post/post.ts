import { BodyComponent } from './body-component';
export class Post {
  postId: string;
  author: string;
  title: string;
  body: BodyComponent[];
  coverUrl: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  publishedOn: number;
  commentCount: number;
  timeToRead: string;
  relatedPosts: string[];
  deleted: boolean;
}
