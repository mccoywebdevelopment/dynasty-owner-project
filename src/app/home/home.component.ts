import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoading = false;
  data = []

  constructor(private _gitHubService: GithubService) {}

  ngOnInit() {
    this._gitHubService._fetchCommits((err,commits)=>{
      if(err){
        alert(err);
      }else{
        this.data = commits;
        console.log(commits);
      }
      this.isLoading = false;
    });
  }

}
