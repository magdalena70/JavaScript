import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ProfileDataService } from './profileData.service';
import { FollowersDataService } from './followersData.service';
import { RepositoriesDataService } from './repositoriesData.service';

const profile_url: string = 'https://api.github.com/users/magdalena70';
const followers_url: string = profile_url + '/followers';
const repositories_url: string = profile_url + '/repos';

@Injectable()
export class HomeData {
    constructor(private http: Http) { }

    getProfileData(): Promise<ProfileDataService> {
        return this.http
            .get(profile_url)
            .toPromise()
            .then(resp => resp.json() as ProfileDataService)
            .catch(err => {
                console.log(err);
                return {};
            });
    }

    getfollowersData(): Promise<Array<FollowersDataService>> {
        return this.http
            .get(followers_url)
            .toPromise()
            .then(resp => resp.json() as FollowersDataService[])
            .catch(err => {
                console.log(err);
                return [];
            })
    }

    getRepositoriesData(): Promise<Array<RepositoriesDataService>> {
        return this.http
            .get(repositories_url)
            .toPromise()
            .then(resp => resp.json() as RepositoriesDataService)
            .catch(err => {
                console.log(err);
                return [];
            })
    }
}