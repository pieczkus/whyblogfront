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
    let tag = {name: 'description', content: description};
    let attributeSelector: string = 'name="description"';
    this.meta.removeTag(attributeSelector);
    this.meta.addTag(tag, false);
  }

  public setMetaKeywords(keywords: string) {
    let tag = {name: 'keywords', content: keywords};
    let attributeSelector: string = 'name="keywords"';
    this.meta.removeTag(attributeSelector);
    this.meta.addTag(tag, false);
  }
}
