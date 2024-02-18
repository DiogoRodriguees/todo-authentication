export class ResponseDTO {
  httpStatus: number;
  reason: string;
  data: any;

  constructor(htttpStatus: number, reason: string, data: any) {
    this.httpStatus = htttpStatus;
    this.reason = reason;
    this.data = data;
  }
}
