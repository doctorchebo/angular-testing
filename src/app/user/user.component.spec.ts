import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DataService } from '../shared/data.service';
import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
    });

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create user component', () => {
    expect(component).toBeTruthy();
  });

  it('it should use name from the user service', () => {
    let userService = fixture.debugElement.injector.get(UserService);
    expect(userService.user.name).toEqual(component.user.name);
  });

  it('it should show user name if user is logged in', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toEqual(
      component.user.name
    );
  });
  it("it shouldn't show user name if user is not logged in", () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toEqual(
      component.user.name
    );
  });

  it('it should return undefined when getting user synchronously', () => {
    let dataService = fixture.debugElement.injector.get(DataService);
    spyOn(dataService, 'getData').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect(component.data).toBe(undefined);
  });
  it('it should return data when getting user asynchronously', waitForAsync(() => {
    let dataService = fixture.debugElement.injector.get(DataService);
    spyOn(dataService, 'getData').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.data).toBe('Data');
    });
  }));
});
