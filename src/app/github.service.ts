import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  URI = "https://api.github.com/repos/mccoywebdevelopment/dynasty-owner-project/commits"

  _fetchCommits = () =>{
    
  }

  constructor() { }
}
