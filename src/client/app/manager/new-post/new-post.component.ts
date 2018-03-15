import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentListComponent } from './component-list/component-list.component';
import { Post } from '../../shared/post/post';
import { PostService } from '../../shared/post/post.service';
import { LoaderService } from '../../shared/loader/loader.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'wb-new-post',
  templateUrl: 'new-post.component.html',
  styleUrls: ['new-post.component.css'],
})
export class NewPostComponent implements OnInit {

  post: Post;
  postForm: FormGroup;
  loading: boolean;
  errorMessage: string;

  formErrors: any = {
    'title': '',
    'coverUrl': '',
    'author': '',
    'metaTitle': '',
    'metaKeywords': '',
    'metaDescription': '',
    'tags': ''
  };

  validationMessages: any = {
    'title': {
      'required': 'Tytuł jest wymagany'
    },
    'coveryUrl': {
      'required': 'Obrazek tytułowy jest wymagany'
    },
    'author': {
      'required': 'Autor jest wymagany'
    },
    'metaTitle': {
      'required': 'Meta tytuł jest wymagany'
    },
    'metaKeywords': {
      'required': 'Meta keywords jest wymagany'
    },
    'metaDescription': {
      'required': 'Meta opis jest wymagany'
    },
    'tags': {
      'required': 'Tagi jest wymagany'
    }
  };

  @ViewChild(ComponentListComponent)
  private componentList: ComponentListComponent;

  constructor(private postservice: PostService,
              private loaderService: LoaderService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.post = new Post();
    this.buildForm();
    this.loaderService.hide();
  }

  buildForm(): void {
    this.postForm = this.fb.group({
      'title': [this.post.title, [Validators.required, Validators.minLength(5)]],
      'coverUrl': [this.post.coverUrl, Validators.required],
      'author': [this.post.author, [Validators.required, Validators.minLength(2)]],
      'metaTitle': [this.post.coverUrl, Validators.required],
      'metaKeywords': [this.post.coverUrl, Validators.required],
      'metaDescription': [this.post.coverUrl, Validators.required],
      'tags': [this.post.coverUrl, Validators.required]
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

  onSubmit() {
    this.loading = true;
    if (this.componentsValid()) {
      const tags = this.postForm.value.tags.split('|');
      this.post = this.postForm.value;
      const bodyComponents = [];
      for (const p of this.componentList.components) {
        bodyComponents.push(p.toBodyComponent());
      }
      this.post.body = bodyComponents;
      this.post.tags = tags;
    }
    this.postservice.createPost(this.post).subscribe(
      resp => this.router.navigate(['/manager']),
      error => this.errorMessage = error,
      () => this.loading = false
    );
  }

  componentsValid(): boolean {
    for (const comp of this.componentList.components) {
      for (const field of comp.fields) {
        if (!field.value || field.value === '') {
          return false;
        }
      }
    }
    return true;
  }

}
