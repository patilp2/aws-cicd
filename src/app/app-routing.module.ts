import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "src/app/HomePage/home/home.component";
import { ProjectDetailsComponent } from "src/app/pages/components/project-details-page/project-details/project-details.component";
import { ExploreProjectComponent } from './pages/components/explore-project-page/explore-project/explore-project.component';
import { LoginComponent } from './pages/components/login-page/login/login.component';
import { ProfileComponent } from './pages/components/profile-page/profile/profile.component';
import { MessageComponent } from './pages/components/message/message/message.component';
import { ErrorPageComponent } from './CommonPage/error-page/error-page.component';
import { UploadVideoComponent } from './pages/components/upload-video/upload-video.component';
import { TalkViewComponent } from './pages/components/talk-view/talk-view.component';
import { NewsUpdatesViewComponent } from './pages/components/news-updates-view/news-updates-view.component';
import { ProjectUploadComponent } from './pages/components/project-upload/project-upload.component';
import { UserRoleSelectionComponent } from './pages/components/user-role-selection/user-role-selection.component';
import { ProfileDetailsComponent } from './pages/components/profile-visitor-page/profile-details/profile-details.component';
import { AuthGuard } from './shared/guard/auth.guard';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project-details/:id', component: ProjectDetailsComponent },
  { path: 'explore-project', component: ExploreProjectComponent},
  { path: 'login', component: LoginComponent },
  { path: 'upload-video', component: UploadVideoComponent },
  { path: 'message', component: MessageComponent },
  { path: 'profile-edit', component: ProfileComponent },
  { path: 'talk-view', component: TalkViewComponent },
  { path: 'news-Update', component: NewsUpdatesViewComponent },
  { path: 'project-upload', component: ProjectUploadComponent },
  { path: 'profile-details', component: ProfileDetailsComponent, canActivate:[AuthGuard] },
  { path: 'user-role', component: UserRoleSelectionComponent },

  // { path: 'error', component: ErrorPageComponent },
  // { path: '**', redirectTo: '/error'}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
