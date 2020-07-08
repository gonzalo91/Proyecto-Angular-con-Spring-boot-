import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-status-text',
  templateUrl: './status-text.component.html',
  styles: [
  ]
})
export class StatusTextComponent implements OnInit {

  @Input()
  public status : Number;





  constructor() { 
    
  }

  ngOnInit(): void {
    
    
    
  }

  

}
