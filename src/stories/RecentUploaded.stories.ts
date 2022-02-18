import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RecentUploadedComponent } from "src/app/HomePage/recent-uploaded/recent-uploaded.component";
import { RecentUploadedReviewComponent } from "src/app/HomePage/recent-uploaded-review/recent-uploaded-review.component";

export default {
  title: 'Component/Recent Uploaded',
  component: RecentUploadedComponent,
  subcomponents: { RecentUploadedComponent, RecentUploadedReviewComponent },

} as Meta;

const Template: Story<RecentUploadedComponent> = (args: RecentUploadedComponent) => ({
  component: RecentUploadedComponent,
  moduleMetadata: {
    declarations: [ RecentUploadedComponent, RecentUploadedReviewComponent ],
  },
  props: args,
});


export const RecentUploaded = Template.bind({});
RecentUploaded.args = {};
