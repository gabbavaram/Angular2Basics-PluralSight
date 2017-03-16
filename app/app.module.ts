import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { EventsAppComponent } from "./events-app.component";
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessioncomponent,
  SessionListComponent,
  DurationPipe
} from "./events/index";

import { NavBarComponent } from "./nav/navbar.component";
import { TOASTR_TOKEN, Toastr } from "./common/toastr.service";
import { CollapsibleWellComponent } from "./common/collapsible-well.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

declare let toastr: Toastr;

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations : [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessioncomponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  providers : [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    EventRouteActivator,
    EventListResolver,
    {
      provide: "canDeactivateCreateEvent",
      useValue: checkDirtyState
    },
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm("you have not saved this event,do you really want to cancel?");
  }
  return true;
}
