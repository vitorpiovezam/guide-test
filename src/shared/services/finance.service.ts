import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "src/core/services/base.service";
import { FinanceApiResponse } from "../definitions/quote.model";

@Injectable()
export class FinanceService extends BaseService<FinanceApiResponse> {
	constructor(http: HttpClient) {
		super(http)
	}

	getChartByName(name: string) {
		// let params = new HttpParams();
		// params = params.append('q', `id:${id}`)
		return this.http.get<FinanceApiResponse>(`${this.apiUrl}/finance/chart/${name}`);
	}
}
