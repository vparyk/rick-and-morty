import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Output() public searchNameChanged= new EventEmitter();
  @Output() public statusFilterChanged= new EventEmitter();

  myForm:FormGroup=<FormGroup>{};

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:'',
      status:'',
    });

    if(this.myForm && this.myForm.get('name')){
      // fix Angular strict mode 'Object is possibly 'null'.' error
        const variable = this.myForm.get('name');
        variable!.valueChanges.subscribe(data => {
          this.searchNameChanged.emit('name')
        });
    }
    if(this.myForm && this.myForm.get('status')){
        const variable = this.myForm.get('status');
        variable!.valueChanges.subscribe(data => {
          this.statusFilterChanged.emit('status')
        });
    }
  }



}
