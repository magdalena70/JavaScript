import { Component, OnInit, Input } from '@angular/core';
import { HomeData } from './home.data';
import { ProfileDataService } from './profileData.service';
import {FollowersDataService} from './followersData.service';

@Component({
    selector: 'home',
    providers: [HomeData],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    title: string = 'Home Page';
    followersBtnTitle: string = 'Show';
    profileData: ProfileDataService;
    followersData: FollowersDataService[];
    reposData;
    showList: boolean = false;

    constructor(private homeData: HomeData) { }

    changeBtnTitle(title){
        if(title === 'Show'){
            title = 'Hide';
        }else{
            title = 'Show';
        }

        return title;
    }

    showFollowers(){
        this.showList = !this.showList;
        this.followersBtnTitle = this.changeBtnTitle(this.followersBtnTitle);
    }

    dataReceived(data){
        this.reposData = data;
    }

    ngOnInit() {
        this.homeData
            .getProfileData()
            .then(data => {
                //console.log(data);
                this.profileData = data;
            })
        this.homeData
            .getfollowersData()
            .then(data => {
                this.followersData = data;
                //console.log(data);
            })
        this.reposData; 
    
    }
}