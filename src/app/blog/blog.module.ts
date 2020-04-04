import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../common/services';
import { BlogComponent } from './blog.component';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        BlogComponent
    ],
    providers:[
        LoaderService
    ]
})
export class BlogModule{}