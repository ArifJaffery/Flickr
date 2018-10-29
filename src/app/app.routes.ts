import {Routes}  from '@angular/router';
import {ItemsComponent}   from 'src/app/items/items.component';
import {FlickrFeedResolver} from './flicker.feed.resolver';

export const appRoutes:Routes = 
[
    {
        path:'',
        component:ItemsComponent,
        pathMatch:'full',        
        resolve:{
            flicker:FlickrFeedResolver
        }
    }
];