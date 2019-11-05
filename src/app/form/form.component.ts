import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {
  form;
  dataToEdit;
  enableEdit = false;

  constructor(private fb: FormBuilder, private userService: DataService, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.email],
      phoneNumber: ['', Validators.required],
      //age optional
      age: [''],
      city: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.setDataToEdit();

  }

  setDataToEdit() {
    if (this.userService.dataToEdit !== undefined) {
      this.dataToEdit = this.userService.dataToEdit;
      this.enableEdit = true;
      Object.keys(this.dataToEdit).map(val => {
        this.form.controls[val].setValue(this.dataToEdit[val]);
      })
    };
  }

  submitForm() {
    if (this.form.valid && !this.enableEdit) {
      this.userService.addUser(this.form.value);
      this.router.navigate(['./']);
    } else {
      let index = this.userService.indexToUpdate;
      this.userService.updateUser(index, this.form.value)
      this.router.navigate(['./']);
    }
  }

  ngOnDestroy() {
    this.userService.editUser(undefined , -1)
    this.enableEdit = false;
  }

  cancel() {
    this.router.navigate(['']);
  }

}
