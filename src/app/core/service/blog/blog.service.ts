import { BehaviorSubject } from 'rxjs';
import { blogEndpoints } from './../../config/endpoints';
import { Injectable } from '@angular/core';
import { RequestService } from '../../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogStore: BehaviorSubject<any> = new BehaviorSubject([]);
  singleBlog: BehaviorSubject<any> = new BehaviorSubject({});
  constructor(private reqS: RequestService) {
    this.blogListing();
  }

  blogListing(){
    this.reqS.get(blogEndpoints.blogListing).subscribe((e: any) =>{
      console.log(e);
      this.blogStore.next(e.blogs);
    });
  }
}
