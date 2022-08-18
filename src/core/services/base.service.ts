import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { BaseModel } from "../definitions/base.model";

export abstract class BaseService<T extends BaseModel> {
	public apiUrl: string;

	constructor(
		public http: HttpClient,
	) {
		if (!environment.apiUrl) throw new Error('apiUrl is not defined');

		this.apiUrl = environment.apiUrl;
	}

	getAll(): Observable<T[]> {
		return this.http.get<T[]>(`${this.apiUrl}`);
	}

}
