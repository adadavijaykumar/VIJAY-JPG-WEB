import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'
import { DialogueComponent } from '../dialogue/dialogue.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[] = [];
  data: any[] = JSON.parse(<string>localStorage.getItem('user')) || [];

  displayedColumns: string[] = ['id','name', 'email', 'phone', 'gender', 'actions'];
  dataSource = new MatTableDataSource(this.data);


  First: any;
  Last: any;
  Email: any;
  Phone: any;
  Gender: any;
  obj: any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.data;
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogueComponent, {
      width: '600px',
      data: { first: this.First, last: this.Last, email: this.Email, phone: this.Phone, gender: this.Gender },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.First = result.first;
        this.Last = result.last;
        this.Email = result.email;
        this.Phone = result.phone;
        this.Gender = result.gender;
        console.log('The dialog was closed', result);
        this.users = JSON.parse(<string>localStorage.getItem('user')) || [];
        this.users.push(result);
        localStorage.setItem('user', JSON.stringify(this.users));
        alert("User Added Successfully");
        this.data = this.users;
      } else {
        this.dialog.closeAll;
      }
      
    });
    dialogRef.disableClose = true;
  }

  editDialog(index:number) {
    let dialogRef = this.dialog.open(DialogueComponent, {
      width: '600px',
      data: { First: this.data[index].first, Last: this.data[index].last, Email: this.data[index].email, Phone: this.data[index].phone, Gender: this.data[index].gender},
    });

    dialogRef.afterClosed().subscribe((res) => {
      console.log('result= ', res);
      if (res) {
        const updateData = JSON.parse(<string>localStorage.getItem('user')) || [];
        updateData.splice(index, 1, res);
        localStorage.setItem('user', JSON.stringify(updateData));
        alert("Data Updated Successfully");
        this.data = updateData;
      } else {
        this.dialog.closeAll;
      }
      
    });

    dialogRef.disableClose = true;
  }

  deleterow(index: number) {
    if (confirm('Are you sure you want to delete this record?')) {
      const getData = JSON.parse(<string>localStorage.getItem('user'));
      getData.splice(index, 1);
      console.log(getData);
      localStorage.setItem('user', JSON.stringify(getData));
      this.data = getData;
    }
  }

}
