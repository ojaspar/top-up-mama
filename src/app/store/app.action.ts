import { environment } from 'src/environments/environment';
import { IUser } from '../core/interfaces/app.interface';

export class SetUserDetails {
  static readonly type = `[${environment.appName}] setUserDetails`;
  constructor(public setUserDetails: IUser) {}
}
