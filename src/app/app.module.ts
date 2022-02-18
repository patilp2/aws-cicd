import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "src/app/HomePage/home/home.component";
import { HeaderComponent } from './CommonPage/header/header.component';
import { MenuComponent } from "src/app/CommonPage/menu/menu.component";
import { SpotlightComponent } from './HomePage/spotlight/spotlight.component';
import { SpotlightReviewComponent } from './HomePage/spotlight-review/spotlight-review.component';
import { RecentUploadedComponent } from './HomePage/recent-uploaded/recent-uploaded.component';
import { RecentUploadedReviewComponent } from './HomePage/recent-uploaded-review/recent-uploaded-review.component';
import { FeaturedCollegeComponent } from './HomePage/featured-college/featured-college.component';
import { JuryPanelComponent } from './HomePage/jury-panel/jury-panel.component';
import { AboutComponent } from './HomePage/about/about.component';
import { TalkComponent } from './HomePage/talk/talk.component';
import { FooterComponent } from './HomePage/footer/footer.component';
import { ProjectDetailsComponent } from './pages/components/project-details-page/project-details/project-details.component';
import { ProjectCoverImageComponent } from './pages/components/project-details-page/project-cover-image/project-cover-image.component';
import { ProjectViewComponent } from './pages/components/project-details-page/project-view/project-view.component';
import { ButtonComponent } from './pages/components/common/button/button.component';
import { AdvertiseComponent } from './pages/components/common/advertise/advertise.component';
import { ProjectTagsComponent } from './pages/components/project-details-page/project-tags/project-tags.component';
import { CommentBoxComponent } from './pages/components/project-details-page/comment-box/comment-box.component';
import { CommentViewComponent } from './pages/components/project-details-page/comment-view/comment-view.component';
import { ProjectProfileComponent } from './pages/components/project-details-page/project-profile/project-profile.component';
import { ProjectImageComponent } from './pages/components/project-details-page/project-image/project-image.component';
import { ProjectImageDetailsComponent } from './pages/components/project-details-page/project-image-details/project-image-details.component';
import { ProjectReviewComponent } from './pages/components/project-details-page/project-review/project-review.component';
import { PageHeadImageComponent } from './pages/components/explore-project-page/page-head-image/page-head-image.component';
import { SearchComponent } from './pages/components/explore-project-page/search/search.component';
import { ExploreProjectComponent } from './pages/components/explore-project-page/explore-project/explore-project.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/components/login-page/login/login.component';
import { LoginFormComponent } from './pages/components/login-page/login-form/login-form.component';
import { PlatformWorkComponent } from './pages/components/login-page/platform-work/platform-work.component';
import { combineReducers, compose, State, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { rootReducer, RootReducerState } from './store/reducer';
import { HomeRepository } from './Repository/home.repository';
import { ErrorService } from './error.service';
import { CommonService } from './service/common.service';
import { ApiService } from './service/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './pages/components/profile-page/profile/profile.component';
import { UserInformationComponent } from './pages/components/profile-page/user-information/user-information.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { MessageComponent } from './pages/components/message/message/message.component';
import { FormatTimePipe } from './shared/pipes/timeformat';
import { MessageRepository } from './Repository/message.repository';
import { ErrorPageComponent } from './CommonPage/error-page/error-page.component';
import { ToastrModule } from 'ngx-toastr';
import { SliderComponent } from './HomePage/slider/slider.component';
import { UploadVideoComponent } from './pages/components/upload-video/upload-video.component';
import { NewsComponent } from './HomePage/news/news.component';
import { OpportunitiesComponent } from './HomePage/opportunities/opportunities.component';
import { TalkViewComponent } from './pages/components/talk-view/talk-view.component';
import { YoutubePlayerComponent } from './pages/components/youtube-player/youtube-player.component';
import { NewsUpdatesViewComponent } from './pages/components/news-updates-view/news-updates-view.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ProjectUploadComponent } from './pages/components/project-upload/project-upload.component';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProfileDetailsComponent } from './pages/components/profile-visitor-page/profile-details/profile-details.component';
import { UserRoleSelectionComponent } from './pages/components/user-role-selection/user-role-selection.component';
import { AuthGuard } from './shared/guard/auth.guard';

import { YouTubePlayerModule } from "@angular/youtube-player";
import { ProfileCoverComponent } from './pages/components/profile-visitor-page/profile-cover/profile-cover.component';
import { ImageCropperModule } from 'ngx-image-cropper';



// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    SliderComponent,
    SpotlightComponent,
    SpotlightReviewComponent,
    RecentUploadedComponent,
    RecentUploadedReviewComponent,
    FeaturedCollegeComponent,
    JuryPanelComponent,
    AboutComponent,
    TalkComponent,
    FooterComponent,
    ProjectDetailsComponent,
    ProjectCoverImageComponent,
    ProjectViewComponent,
    ButtonComponent,
    AdvertiseComponent,
    ProjectTagsComponent,
    CommentBoxComponent,
    CommentViewComponent,
    ProjectProfileComponent,
    ProjectImageComponent,
    ProjectImageDetailsComponent,
    ProjectReviewComponent,
    PageHeadImageComponent,
    SearchComponent,
    ExploreProjectComponent,
    LoginComponent,
    LoginFormComponent,
    PlatformWorkComponent,
    ProfileComponent,
    UserInformationComponent,
    MessageComponent,
    FormatTimePipe,
    ErrorPageComponent,
    UploadVideoComponent,
    NewsComponent,
    OpportunitiesComponent,
    TalkViewComponent,
    YoutubePlayerComponent,
    NewsUpdatesViewComponent,
    ProjectUploadComponent,
    ProfileDetailsComponent,
    UserRoleSelectionComponent,
    ProfileCoverComponent
  ],

  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, ToastrModule.forRoot({
      positionClass: 'toast-top-right'
    }),
    StoreModule.forRoot(rootReducer,{ }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    BrowserAnimationsModule,
    NgOtpInputModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CarouselModule.forRoot(),YouTubePlayerModule,ImageCropperModule
  ],

  providers: [
    AuthGuard,
    CommonService,
    ApiService,
    HomeRepository,
    MessageRepository,
    {
      provide: ErrorHandler,
      useClass: ErrorService,
    }
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }


