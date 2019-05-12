import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  title = 'hue-light-control-spa';

  public ngOnInit() {
    if (this.route.queryParams) {
      console.log(this.route.queryParams);
    }
  }

}
