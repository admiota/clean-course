import { HttpClient } from './02-open-close-c';


export class TodoService { 
    constructor(private httpClient: HttpClient) {
    }

    async getTodoItems() {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/'); 
    }
}


export class PostService {
    constructor(private httpClient: HttpClient) {
    }

    async getPosts() {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
    }
}


export class PhotosService {
    constructor(private httpClient: HttpClient) {
    }

    async getPhotos() {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/photos');
    }

}