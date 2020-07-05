import { Component, OnInit, ViewChild, Input } from '@angular/core';

import Swal from 'sweetalert2'

declare var $:any;

@Component({
  selector: 'app-delete-resource',
  templateUrl: './delete-resource.component.html',
  styleUrls: ['./delete-resource.component.css']
})
export class DeleteResourceComponent implements OnInit {
  @ViewChild('modal') modal;

  @Input() resource : string;

  constructor() { }

  askForDelete(){
    console.log(this.resource);
    
    $(this.modal.nativeElement).modal() 
  }

  delete() : void{
    $(this.modal.nativeElement).modal('hide') 

    //Todo: Api request to Delete | throw event to parent component
    Swal.fire(
      'Eliminado!',
      'Se ha eliminado correctamente.',
      'success'
    )
  }
  
  ngOnInit(): void {
  }

}
