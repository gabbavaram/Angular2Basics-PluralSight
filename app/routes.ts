import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessioncomponent
 } from "./events/index";

export const appRoutes = [
  // create new event
  { path: "events/new",
    component: CreateEventComponent,
    canDeactivate: ["canDeactivateCreateEvent"] },
  // events
  { path: "events",
    component: EventsListComponent,
    resolve: {events: EventListResolver} },
  // events/1
  // events/foo
  { path: "events/:id",
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator] },
  // error page
  { path: "404",
    component: Error404Component },
  // default route
  { path: "",
    redirectTo: "/events",
    pathMatch: "full"},
  { path: "events/session/new",
    component: CreateSessioncomponent
  },
  { path: "user", loadChildren: "app/user/user.module#UserModule"}
];
