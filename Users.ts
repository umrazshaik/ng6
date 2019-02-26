import { Component, NgModule, ViewContainerRef } from '@angular/core';
import {User} from './Entities/User';
import { ToastsManager } from 'ng6-toastr/ng2-toastr';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
    templateUrl:'./Users.html'
})

export class UsersComponent
{
    lstUsers:User[]; PopUpName:string="Add User";objuser:User;
    userform: FormGroup;
    countries: string[] = ['USA', 'UK', 'Canada'];
    default: string = 'UK';

    constructor(public toastr: ToastsManager,vcr: ViewContainerRef)
    {
        this.toastr.setRootViewContainerRef(vcr);
        var obj=[
            {Id:0,Name:"tom",DisplayName:"Tom",Email:"tom@gmail.com",Status:true},
            {Id:0,Name:"john",DisplayName:"John",Email:"john@gmail.com",Status:true},
            {Id:0,Name:"jersey",DisplayName:"Jersey",Email:"jer@gmail.com",Status:true},
            {Id:0,Name:"micheal",DisplayName:"Micheal",Email:"Micheal@gmail.com",Status:true}
        ];

        this.lstUsers=obj;
      //  this.toastr.success('You are awesome!', 'Success!');
    }
    ngOnInit()
    {
       debugger 
        this.userform=new FormGroup({
            name:new FormControl('',[Validators.required]),
            displayName:new FormControl('',[Validators.required]),
            email:new FormControl('', [  
                Validators.required,  
                Validators.minLength(5),  
                Validators.maxLength(80),  
                Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")  
              ]),
              country: new FormControl(null)
        });
        this.userform.controls['country'].setValue(this.default,{onlyself:true});
    }
    getdata($event)
    {
        debugger
        this.objuser={Id:0,Name:$event.name,DisplayName:$event.displayName,Email:$event.email,Status:true};
        this.lstUsers.push(this.objuser);
        this.toastr.success('User Added!', 'Success!');
    }

}