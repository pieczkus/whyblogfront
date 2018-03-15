import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(private title: Title, private meta: Meta) {
  }

  public setTitle(title: string) {
    this.title.setTitle(title);
  }

  public setMetaDescription(description: string) {
    const tag = {name: 'description', content: description};
    const attributeSelector = 'name="description"';
    this.meta.removeTag(attributeSelector);
    this.meta.addTag(tag, false);
  }

  public setMetaKeywords(keywords: string) {
    const tag = {name: 'keywords', content: keywords};
    const attributeSelector = 'name="keywords"';
    this.meta.removeTag(attributeSelector);
    this.meta.addTag(tag, false);
  }
}
