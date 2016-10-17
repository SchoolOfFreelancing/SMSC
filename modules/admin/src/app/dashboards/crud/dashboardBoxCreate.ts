import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../crud/crud.service';
import { Location } from '@angular/common';
import { EditModel } from '../../crud/crudUpdate/crudUpdate.model';
import { BtnTypes } from '../../crud/dynamicForm/btnTypes';
import { FormPropertyModel } from '../../crud/model/formProperty';

@Component({
    selector: 'dashboard-crud-edit',
    template: '<dynamic-form [btnName]="btnName" [columnDefs]="columnDefs"></dynamic-form>'
})
export class DashboardCrudCreate {
    public resolveData: EditModel = new EditModel();
    public btnName: BtnTypes = BtnTypes.CREATE;
    public columnDefs: Array<FormPropertyModel> = null;

    constructor(public router: Router,
                public route: ActivatedRoute,
                public crudService: CrudService,
                public location: Location) {
    }

    ngOnInit() {
        this.resolveData = this.route.snapshot.data['create'];
        this.columnDefs = this.resolveData['form'];
    }

    back() {
        this.location.back();
    }

    ngOnDestroy() {
        this.crudService.multipleSelectValid = false;
        this.crudService.setModel({});
    }

    onSubmit() {
        this.crudService.createRecord(this.crudService.model,
            this.route.snapshot.params['className']);
    }
}
