import { Component, OnInit, Inject,ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';


export interface DialogData {
  First: any;
  Last: any;
  Email: any;
  Phone: any;
  Gender: any;
}

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  dialogForm: any = FormGroup;
  submitbtn: string = 'Submit';
  
  constructor(public change:ChangeDetectorRef, public dialogRef: MatDialogRef<DialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, ) { }

  ngOnInit(): void {
    this.dialogForm = new FormGroup({
      first: new FormControl("", Validators.required),
      last: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      phone: new FormControl("", [Validators.required, Validators.minLength(10), Validators.pattern('^([0-9]*)$')]),
      gender: new FormControl("", Validators.required)
    });
  }
  onClick(): void {
    this.dialogRef.close();
  }

  Onok(): void {
    if (this.dialogForm.valid && this.dialogForm.dirty) {
      this.dialogRef.close(this.dialogForm.value);
    }
  }

  onReset(): void {
    if (this.dialogForm.valid || this.dialogForm.invalid) {
      this.dialogForm.reset();
    }
  }
}

