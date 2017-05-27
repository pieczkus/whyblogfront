import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentListComponent } from './component-list/component-list.component';
import { Post } from '../../shared/post/post';
import { PostService } from '../../shared/post/post.service';
import { LoaderService } from '../../shared/loader/loader.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'wb-new-post',
  templateUrl: 'new-post.component.html',
  styleUrls: ['new-post.component.css'],
})
export class NewPostComponent implements OnInit {

  post: Post;
  tags: string;
  postForm: FormGroup;

  @ViewChild(ComponentListComponent)
  private componentList: ComponentListComponent;

  constructor(private postservice: PostService,
              private loaderService: LoaderService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.post = new Post();
    this.loaderService.hide();
  }

  buildForm(): void {
    this.postForm = this.fb.group({
      'title': [this.post.title, [Validators.required, Validators.minLength(5)]],
      'coverUrl': [this.post.coverUrl, Validators.required],
      'author': [this.post.author, [Validators.required, Validators.minLength(2)]]
    });

    this.postForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.postForm) {
      return;
    }
    const form = this.postForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }


  savePost() {
    if (this.validateFields()) {
      let bodyComponents = [];
      for (let p of this.componentList.components) {
        bodyComponents.push(p.toBodyComponent());
      }
      this.post.body = bodyComponents;
      this.post.tags = this.tags.split('|');
    }
    this.postservice.createPost(this.post).subscribe(resp => console.log('post created?'));
  }

  validateFields(): boolean {
    for (let comp of this.componentList.components) {
      for (let field of comp.fields) {
        if (!field.value || field.value === '') {
          return false;
        }
      }
    }
    return true;
  }

}
