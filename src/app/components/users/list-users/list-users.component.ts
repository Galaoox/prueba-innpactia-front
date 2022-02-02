import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from '@services/shared.service';
import { UsersService } from '@services/users.service';
import { FormUserComponent } from '@components/users/form-user/form-user.component';
import { IUser } from '@interfaces/IUser';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  page = 1;
  pageSize = 5;
  collectionSize = 1;
  users: IUser[] = [];

  constructor(private _userService: UsersService, private _modalService: NgbModal, private _sharedService: SharedService) { }

  ngOnInit(): void {
    this.getData();
  }

  refreshData() {
    this.getData();
  }

  getData() {
    this._userService.getList(this.pageSize, this.page).subscribe({
      next: (res: any) => {
        this.users = res.data;
        this.collectionSize = res.info.total;
      }
    });
  }

  deleteUser(id?: number) {
    if (id) {
      this._userService.deleteUser(id).subscribe({
        next: (res: any) => {
          this.refreshData();
        },
        error: ({ error }) => this._sharedService.showAlert('error', error.message)
      });
    }

  }

  openFormUser(id?: number) {
    const modalRef = this._modalService.open(FormUserComponent, {
      keyboard: false,
      beforeDismiss: () => false
    });
    modalRef.result.then((res) => {
      if (res) this.refreshData();
    });
  }


}
