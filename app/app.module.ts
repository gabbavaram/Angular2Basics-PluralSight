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
  SessionListComponent
} from "./events/index";

import { NavBarComponent } from "./nav/navbar.component";
import { ToastrService } from "./common/toastr.service";
import { CollapsibleWellComponent } from "./common/collapsible-well.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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
    CollapsibleWellComponent
  ],
  providers : [
    EventService,
    ToastrService,
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
