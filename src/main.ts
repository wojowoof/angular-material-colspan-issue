import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, ReactiveFormsModule],
  template: `
    <h1>Colspan Issue</h1>
    <form [formGroup]="testFormGroup">
    <table>
      <tr>
        <td>XXX</td><td>One</td><td>Two</td><td>Three</td><td>Four</td>
      </tr>
      <tr>
        <td>A</td>
        <td>
          <mat-form-field>
          </mat-form-field>
      </tr>
      <tr>
        <td>B</td>
        <td colspan="3">Helloooooooooooooooooooooooooooooooooooooo</td>
      </tr>
      <tr>
        <td>C</td>
        <td colspan="2">
          <textarea rows="4" cols="40"></textarea>
        </td>
      </tr>
      <tr>
        <td>D</td>
        <td>
        <mat-form-field>
          <textarea matInput rows="4" cols="40" formControlName=>Whaddya want for nuttin'? Rubber biscuit?</textarea>
        </mat-form-field>
        </td>
      </tr>
      <tr>
        <td>E</td>
      </tr>
      <tr>
        <td>F</td>
      </tr>
    </table>
    </form>
  `,
})
export class App {
  name = 'ColspanIgnore';
  title = 'Colspan Issue';

  testFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.testFormGroup = this.formBuilder.group({
      textFieldA: '',
      textFieldB: "Whaddya want fer nuttin' - Rrrrrrruubbber Biscuit?",
    });
  }
}

bootstrapApplication(App);
