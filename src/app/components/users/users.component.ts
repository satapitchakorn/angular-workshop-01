import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  submitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }
  formArray: FormArray = this.fb.array([])
  form: FormGroup = this.fb.group({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    name: new FormControl(''),
    isCheck: new FormControl(false)
  })
  count: number = 0;
  submit() {
    this.submitted = true
    if (this.form.valid) {
      this.submitted = false
      this.form.value.name = this.form.value.firstname + ' ' + this.form.value.lastname
      this.formArray.push(this.form)
      this.form = this.fb.group({
        firstname: new FormControl('', Validators.required),
        lastname: new FormControl('', Validators.required),
        name: new FormControl(''),
        isCheck: new FormControl(false)
      })
    }
  }
  actionAt(item: FormGroup) {
    item.value.isCheck = !item.value.isCheck
    this.count = this.formArray.controls.filter((x: FormGroup) => x.controls.isCheck.value).length;
  }
}
