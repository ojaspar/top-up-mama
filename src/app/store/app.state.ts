import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUserDetails } from '../core/interfaces/app.interface';

export class AppStateModel {
    userDetails!: IUserDetails;
}