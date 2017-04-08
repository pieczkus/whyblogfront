export class Post {
  postId: string;
  author: string;
  title: string;
  body: string;
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

  constructor(postId: string, author: string, title: string, body: string, coverUrl: string, tags: string[],
              metaTitle: string, metaDescription: string, metaKeywords: string, publishedOn: number,
              commentCount: number, timeToRead: string, relatedPosts: string[], deleted: boolean) {
    this.postId = postId;
    this.author = author;
    this.title = title;
    this.body = body;
    this.coverUrl = coverUrl;
    this.tags = tags;
    this.metaTitle = metaTitle;
    this.metaDescription = metaDescription;
    this.metaKeywords = metaKeywords;
    this.publishedOn = publishedOn;
    this.commentCount = commentCount;
    this.timeToRead = timeToRead;
    this.relatedPosts = relatedPosts;
    this.deleted = deleted;
  }
}
