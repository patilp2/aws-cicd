import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ProjectReviewComponent } from "src/app/pages/components/project-details-page/project-review/project-review.component";

export default {
  title: 'Component/Project Review',
  component: ProjectReviewComponent,
  subcomponents: { ProjectReviewComponent },

} as Meta;

const Template: Story<ProjectReviewComponent> = (args: ProjectReviewComponent) => ({
  component: ProjectReviewComponent,
  moduleMetadata: {
    declarations: [ ProjectReviewComponent ],
  },
  props: args,
});


export const ProjectReview = Template.bind({});
ProjectReview.args = {};
