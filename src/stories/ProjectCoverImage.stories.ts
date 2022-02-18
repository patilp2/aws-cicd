import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ProjectCoverImageComponent } from "src/app/pages/components/project-details-page/project-cover-image/project-cover-image.component";

export default {
  title: 'Component/Project Cover Image',
  component: ProjectCoverImageComponent,
  subcomponents: { ProjectCoverImageComponent },

} as Meta;

const Template: Story<ProjectCoverImageComponent> = (args: ProjectCoverImageComponent) => ({
  component: ProjectCoverImageComponent,
  moduleMetadata: {
    declarations: [ ProjectCoverImageComponent ],
  },
  props: args,
});


export const ProjectCoverImage = Template.bind({});
ProjectCoverImage.args = {};
