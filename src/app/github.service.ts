import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  URI = "https://api.github.com/repos/mccoywebdevelopment/dynasty-owner-project/commits"

  _fetchCommits = (callback) => {

    const requestOptions = {
      method: 'GET',
    };

    fetch(this.URI, requestOptions)
      .then(res => {
        if (res.status >= 400) {
          throw new Error("Server responds with error!");
        }
        return res.json();
      })
      .then(objs => {
        var result = objs.map(function(a) {return a.commit;});
        callback(null,result);
      },
        err => {
          callback("There was an error fetching data")
        });
  }

  constructor() { }
}
