import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-p2-directives';
  isActive = true;
  isTrue = false;
  isActivated = false;
  status = 5;

  users = [
    {id: 1, name: "Alice", age: 25, city: "New York", occupation: "Engineer", hobbies: ["Reading", "Hiking"]},
    {id: 2, name: "Bob", age: 30, city: "San Francisco", occupation: "Designer", hobbies: ["Photography", "Traveling"]},
    {id: 3, name: "Charlie", age: 28, city: "Chicago", occupation: "Teacher", hobbies: ["Painting", "Cycling"]},
    {id: 4, name: "Diana", age: 35, city: "Los Angeles", occupation: "Architect", hobbies: ["Gardening", "Cooking"]},
    {id: 5, name: "Evan", age: 22, city: "Miami", occupation: "Developer", hobbies: ["Gaming", "Surfing"]},
    {id: 6, name: "Fiona", age: 29, city: "Austin", occupation: "Photographer", hobbies: ["Yoga", "Dancing"]},
    {id: 7, name: "George", age: 40, city: "Seattle", occupation: "Manager", hobbies: ["Fishing", "Golfing"]},
    {id: 8, name: "Hannah", age: 26, city: "Denver", occupation: "Writer", hobbies: ["Blogging", "Baking"]},
    {id: 9, name: "Ian", age: 32, city: "Portland", occupation: "Chef", hobbies: ["Cooking", "Running"]},
    {id: 10, name: "Jasmine", age: 27, city: "Boston", occupation: "Scientist", hobbies: ["Researching", "Swimming"]}
  ];

  container1 = 'red';
  container2 = 'cont2';
  change1 = 'c1';
  change2 = 'c2';
  
}
