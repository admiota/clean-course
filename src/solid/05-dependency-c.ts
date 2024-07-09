import dataJson from '../data/local-database.json';
import dataJson100 from '../data/local-database-100.json';
import { Post } from './05-dependency-b';

export abstract class PostProvider {
    constructor() { }
    
    abstract getPosts(): Promise<Post[]>;
}

export class LocalDataBaseService extends PostProvider{

    constructor() {
        super();
    }

    async getPosts() {
        return [
            {
                'userId': 1,
                'id': 1,
                'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
            },
            {
                'userId': 1,
                'id': 2,
                'title': 'qui est esse',
                'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
            }];
    }
}


export class JsonDatabaseService extends PostProvider{
    constructor() {
        super();
    }

    async getPosts() {
        return dataJson;
    }
}


//WebApiPostService, PostProvider
export class WebApiPostService extends PostProvider{
    constructor() {
        super();
    }

    async getPosts() {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await resp.json();
        return data;
    }
}