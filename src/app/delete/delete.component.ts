import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() item : string | undefined
  @Output() onCancel = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


    Cancel(){
      this.onCancel.emit() // onCancel - USER defined event
    }
    Logout(){
      alert('yee yee')
    }
}
