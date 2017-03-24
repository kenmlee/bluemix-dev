import {Component} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

@Component({
    selector: 'my-app',
	template: `
	<h1>Hello Bluemix Frontend Developer</h1>
	<hr>
	<img src="images/node-red-flow.png"/>
	`
})
export class HelloDev {

}

@NgModule({
    declarations: [HelloDev],
    imports: [BrowserModule],
    bootstrap: [HelloDev]
})
export class AppModule{
    
}

platformBrowserDynamic().bootstrapModule(AppModule);
