import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class WordOfTheDayService {

  constructor(private dataService: DataService) { }

  /**
   * Returns wordnik word of the day
   * @param success callback
   * @param error error callback
   */
  fetchWordOfTheDay = (config, success, error) => {
    fetch(`https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${config.wordApiKey}`)
      .then((response) => {
        if (response.status >= 400) {
          console.error('Word of the day doesn\'t work anymore. Call the developer and tell him to take it out');
          error();
        }
        return response.json();
      })
      .then((json) => {
        success(json);
      })
      .catch((err: Error) => {
        console.error('Word of the Day failed: ' + err.message);
        error();
      });
  }
}
