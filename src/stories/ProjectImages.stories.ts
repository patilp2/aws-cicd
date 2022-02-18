import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ProjectImageDetailsComponent } from "src/app/pages/components/project-details-page/project-image-details/project-image-details.component";

export default {
  title: 'Component/Project Image',
  component: ProjectImageDetailsComponent,
  subcomponents: { ProjectImageDetailsComponent },

} as Meta;

const Template: Story<ProjectImageDetailsComponent> = (args: ProjectImageDetailsComponent) => ({
  component: ProjectImageDetailsComponent,
  moduleMetadata: {
    declarations: [ ProjectImageDetailsComponent ],
  },
  props: args,
});


export const ProjectImage = Template.bind({});
ProjectImage.args = {};
