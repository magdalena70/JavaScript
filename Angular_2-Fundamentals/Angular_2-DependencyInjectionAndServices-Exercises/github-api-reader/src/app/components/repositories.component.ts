import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { HomeData } from './home.data';

@Component({
    selector: 'repositories',
    providers: [HomeData],
    templateUrl: './repositories.component.html',
    styleUrls: ['./repositories.component.css']
})

export class RepositoriesComponent implements OnInit {
    @Output() repositoriesData = new EventEmitter();
    reposData;
    showList = false;
    reposBtnTitle: string = 'Show';

    constructor(private homeData: HomeData){}

    ngOnInit(){
        this.homeData
            .getRepositoriesData()
            .then(data => {
                //console.log(data);
                this.reposData = data;
            })
    }

    changeBtnTitle(title){
        if(title === 'Show'){
            title = 'Hide';
        }else{
            title = 'Show';
        }

        return title;
    }

    showRepos(){
         this.showList = !this.showList;
         this.reposBtnTitle = this.changeBtnTitle(this.reposBtnTitle);
    }

    sendToProfile(){
        this.repositoriesData.emit(this.reposData);
    }
}