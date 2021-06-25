import { Observable } from 'rxjs';
import { BlogService } from './../../core/service/blog/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  blogs$: Observable<any>;
  constructor(private blogS: BlogService) { }

  ngOnInit() {
    this.blogs$ = this.blogS.blogStore;
  }

}
