import { HttpClient } from "@angular/common/http";
import{Injectable} from "@angular/core";
import { Observable } from "rxjs";
import{ IClasses } from "./classes";
import { IClassDetail } from "./classdetail";
import { ICustomer } from "./customer";

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class DataService {

    constructor(private http:HttpClient){
    
}
    public classes: IClasses[] = [];

    public classdetail: IClassDetail[] = [];

    public customer: ICustomer;

   public loadClasses() : Observable<boolean> {
    return this.http.get("/api/classes")
      .map((data: any[]) => {
        this.classes = data;
        return true;
      });
  }

    public loadClassDetail(classname:string) : Observable<boolean> {
    return this.http.get("/api/classdetail"+"/"+classname)
      .map((data: any[]) => {
        this.classdetail = data;
        return true;
      });
  }
    public getClasses() :Observable<IClasses> {
    
        return Observable.of(this.initializeClasses());
    }

     public getClassDetail() :Observable<IClassDetail> {
    
        return Observable.of(this.initializeClassDetail());
    }

    initializeClasses(): IClasses {
        // Return an initialized object
        return {
            className: null,
            location : null,
            teacherName: null
        };
    }

    initializeClassDetail(): IClassDetail {
        // Return an initialized object
        return {
             className: null,
             studentFirstName: null,
             studentLastName: null,
             gpa: 0.0,
             age: 0
        };
    }
    saveClasses(classes: IClasses): Observable<boolean> {
        
        return this.http.post("/api/classes", classes).map((data: any[]) => {
        this.classes = data;
        return true;
      });

    }

    calculatePremium(customer: ICustomer): Observable<boolean> {

        return this.http.post("/api/premium", customer).map((data: any) => {
            this.customer.premiumValue = data;
            return true;
        });

    }


     saveClassDetail(classDetail: IClassDetail): Observable<boolean> {
        
        return this.http.post("/api/classdetail", classDetail).map((data: any[]) => {
        this.classdetail = data;
        return true;
      });

     }
}