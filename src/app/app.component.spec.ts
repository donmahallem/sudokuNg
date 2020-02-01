import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing'; // tslint:disable:component-selector
import { Component } from '@angular/core';
// tslint:disable:directive-selector
@Component({
  selector: 'mat-toolbar',
  template: '<div></div>',
})
class TestMatToolbarComponent {
}


// tslint:enable:component-selector
// tslint:enable:directive-selector
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TestMatToolbarComponent
      ],
      imports: [
        RouterTestingModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sudokuNg'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('sudokuNg');
  });
});
