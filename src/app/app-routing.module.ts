import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "./components/inicio/inicio.component";
import { CreacionPlanComponent } from "./components/creacion-plan/creacion-plan.component";

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent,
  },
  {
    path: "creacio-plan",
    component: CreacionPlanComponent,
  },
  {
    path: "**",
    redirectTo: "/inicio",
    pathMatch: "full",
  },
  {
    path: "",
    redirectTo: "/inicio",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
