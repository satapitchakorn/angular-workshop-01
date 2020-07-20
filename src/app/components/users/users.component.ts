import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }
  form: FormGroup = this.fb.group({
    firstname: new FormControl(null, Validators.required),
    lastname: new FormControl(''),
    name: new FormControl(null),
    isCheck: new FormControl(false)
  })
  list: Array<FormGroup> = []
  count: number = 0;
  submit() {
    if (this.form.valid) {
      this.form.value.name = this.form.value.firstname + ' ' + this.form.value.lastname
      this.list.push(this.form)
      this.form = this.fb.group({
        firstname: new FormControl(null, Validators.required),
        lastname: new FormControl(''),
        name: new FormControl(null),
        isCheck: new FormControl(false)
      })
    }
  }
  actionAt(item) {
    item.value.isCheck = !item.value.isCheck
    if (item.value.isCheck) {
      this.count++
    } else {
      this.count--
    }
  }
}
