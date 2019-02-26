import { Component, Input, Output, EventEmitter } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
declare var $:any;
@Component({

    selector:'modalpopup',
    templateUrl:'./modalpopup.html'
})



export class ModalPopupComponet
{
    debugger
    @Input() data: FormGroup;
    @Input() Name:any;
    @Output() updatedata=new EventEmitter();
    countries: string[] = ['USA', 'UK', 'Canada'];
    default: string = 'UK';
    userform:FormGroup;
    constructor(){
        this.debugger
            this.userform=this.data;
    }

    ngOnInit()
    {
        this.userform=this.data;
        // this.userform=new FormGroup({
        //     name:new FormControl('',[Validators.required]),
        //     displayName:new FormControl('',[Validators.required]),
        //     email:new FormControl('', [  
        //         Validators.required,  
        //         Validators.minLength(5),  
        //         Validators.maxLength(80),  
        //         Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")  
        //       ]),
        //       country: new FormControl(null)
        // });
        // this.userform.controls['country'].setValue(this.default,{onlyself:true});
    }

    onSubmit()
    {
        debugger
        $('#myModal').modal('hide');
        this.updatedata.emit(this.userform.value);  
        this.userform.reset();
    }
    
}