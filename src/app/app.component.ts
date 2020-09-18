import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string;
  form: any;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
			datetime : ["", []]
    });
    this.title = 'NgxDate';
  }

  ngOnInit(): void {
  }
}
