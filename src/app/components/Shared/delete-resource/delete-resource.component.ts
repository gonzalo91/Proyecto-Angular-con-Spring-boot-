import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

import Swal from 'sweetalert2'

declare var $:any;

@Component({
  selector: 'app-delete-resource',
  templateUrl: './delete-resource.component.html',
  styleUrls: ['./delete-resource.component.css']
})
export class DeleteResourceComponent implements OnInit {
  @ViewChild('modal') modal;

  @Output() deleted = new EventEmitter()
  

  constructor() { }

  askForDelete(){    
    $(this.modal.nativeElement).modal() 
  }

  delete() : void{
    this.deleted.emit();

    $(this.modal.nativeElement).modal('hide') 

    
    Swal.fire(
      'Eliminado!',
      'Se ha eliminado correctamente.',
      'success'
    )
  }
  
  ngOnInit(): void {
  }

}
