import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../core/interfaces/app.interface';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetUserDetails } from './app.action';

export class AppStateModel {
  userDetails!: IUser;
}

@State<AppStateModel>({
  name: environment.appName,
  defaults: {
    userDetails: {
      id: '',
      email: '',
      first_name: '',
      last_name: '',
      avatar: '',
    },
  },
})
@Injectable({ providedIn: 'root' })
export class AppState {
  @Selector()
  static getUserDetails(state: AppStateModel) {
    return state.userDetails;
  }

  // actions
  @Action(SetUserDetails)
  SetUserDetails(
    { getState, setState }: StateContext<AppStateModel>,
    { setUserDetails }: SetUserDetails
  ) {
    const state = getState();
    setState({
      ...state,
      userDetails: setUserDetails,
    });
  }
}
