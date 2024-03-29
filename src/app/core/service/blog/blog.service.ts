import { BehaviorSubject } from 'rxjs';
import { blogEndpoints, baseEndpoints } from './../../config/endpoints';
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
    this.reqS.get(baseEndpoints.blog).subscribe((e: any) =>{
      this.blogStore.next(e.data);
    });
  }
}
