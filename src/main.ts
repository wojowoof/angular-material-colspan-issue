import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule],
  template: `
    <h1>Colspan Issue</h1>
    <form>
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
          <textarea matInput rows="4" cols="40">Whaddya want for nuttin'? Rubber biscuit?</textarea>
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
}

bootstrapApplication(App);
