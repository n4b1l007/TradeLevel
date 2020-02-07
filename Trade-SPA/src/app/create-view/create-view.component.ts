import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../_service/app-service.service';
import { Observable } from 'rxjs';
import { NgForm, FormBuilder, FormGroup, FormArray, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { Language } from '../models/language.model';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-create-view',
  templateUrl: './create-view.component.html',
  styleUrls: ['./create-view.component.css']
})
export class CreateViewComponent implements OnInit {
  TradeId = '0';
  LevelId = '0';
  Syllabus: FormGroup;
  submitted = false;
  ActiveDate: Date;

  private allTtrade: Observable<any>;
  private allLevel: Observable<any>;
  private ordersData: Array<Language>;

  syllabusFile: any;
  // tslint:disable-next-line: max-line-length
  constructor(private formbulider: FormBuilder, private appservice: AppServiceService, private ngbDateParserFormatter: NgbDateParserFormatter) { }

  get f() { return this.Syllabus.controls; }

  ngOnInit() {

    this.ActiveDate = moment().toDate();

    this.Syllabus = this.formbulider.group({
      TradeId: ['', [Validators.required]],
      LevelId: ['', [Validators.required]],
      ActiveDate: ['', [Validators.required]],
      DevelopmentOfficer: ['', Validators.required],
      Manager: ['', Validators.required],
      orders: new FormArray([], this.minSelectedCheckboxes(1)),
      SyllabusFile: ['', Validators.required]
    });

    this.FillTradeDDL();

    this.addCheckboxes();
  }

  private addCheckboxes() {

    this.appservice.LanguageCHK().subscribe(response => {
      this.ordersData = response;

      this.ordersData.forEach((o, i) => {
        const control = new FormControl(i === 0); // if first item set to true, else false
        (this.Syllabus.controls.orders as FormArray).push(control);
      });
    }, error => {
      console.log(error);
    });
  }

  submit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.Syllabus.invalid) {
      return;
    }

    const selectedOrderIds = this.Syllabus.value.orders
      .map((v, i) => (v ? this.ordersData[i].name : null))
      .filter(v => v !== null);

    console.log(selectedOrderIds);

    const result = this.Syllabus.value;

    result.orders = selectedOrderIds;

    const ngbDate = this.Syllabus.controls.ActiveDate.value;
    const myDate = this.ngbDateParserFormatter.format(ngbDate);
    result.ActiveDate = myDate;


    result.SyllabusFile =  this.syllabusFile;


    this.appservice.postSyllabus(result).subscribe(r => {

    }, error => {
      console.log(error);
    });
  }

  minSelectedCheckboxes(min = 1) {
    const validator: ValidatorFn = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        .map(control => control.value)
        .reduce((prev, next) => next ? prev + next : prev, 0);

      return totalSelected >= min ? null : { required: true };
    };

    return validator;
  }

  getOrders() {
    this.appservice.LanguageCHK().subscribe(response => {
      this.allTtrade = response;
    }, error => {
      console.log(error);
    });
  }

  FillTradeDDL() {
    this.appservice.TradeDDL().subscribe(response => {
      this.allTtrade = response;
    }, error => {
      console.log(error);
    });
  }

  FillLevelDDL() {

    console.log(this.TradeId);

    this.appservice.LevelDDL(this.TradeId).subscribe(response => {
      this.allLevel = response;
    }, error => {
      console.log(error);
    });
  }


  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.syllabusFile = event.target.files[0];
      //this.Syllabus.get('SyllabusFile').setValue(file);
    }
  }

}
