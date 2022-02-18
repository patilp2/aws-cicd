import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { HomeComponent } from "src/app/HomePage/home/home.component";
import { HeaderComponent } from "src/app/CommonPage/header/header.component";
import { MenuComponent } from "src/app/CommonPage/menu/menu.component";
import { SliderComponent } from "src/app/HomePage/slider/slider.component";
import { SpotlightComponent } from "src/app/HomePage/spotlight/spotlight.component";
import { SpotlightReviewComponent } from "src/app/HomePage/spotlight-review/spotlight-review.component";
import { RecentUploadedComponent } from "src/app/HomePage/recent-uploaded/recent-uploaded.component";
import { RecentUploadedReviewComponent } from "src/app/HomePage/recent-uploaded-review/recent-uploaded-review.component";
import { FeaturedCollegeComponent } from "src/app/HomePage/featured-college/featured-college.component";

import { JuryPanelComponent } from "src/app/HomePage/jury-panel/jury-panel.component";
import { AboutComponent } from "src/app/HomePage/about/about.component";
import { TalkComponent } from "src/app/HomePage/talk/talk.component";
import { FooterComponent } from "src/app/HomePage/footer/footer.component";

export default {
  title: 'Pages/Home',
  component: HomeComponent,
  subcomponents: { HeaderComponent, MenuComponent, SliderComponent, SpotlightComponent, SpotlightReviewComponent, RecentUploadedComponent, RecentUploadedReviewComponent,FeaturedCollegeComponent, JuryPanelComponent, AboutComponent, TalkComponent, FooterComponent },

} as Meta;

const Template: Story<HomeComponent> = (args: HomeComponent) => ({
  component: HomeComponent,
  moduleMetadata: {
    declarations: [HeaderComponent, MenuComponent, SliderComponent, SpotlightComponent, SpotlightReviewComponent, RecentUploadedComponent, RecentUploadedReviewComponent, FeaturedCollegeComponent, JuryPanelComponent, AboutComponent, TalkComponent, FooterComponent],
  },
  props: args,
});


export const Home = Template.bind({});
Home.args = {};
