import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ProjectViewComponent } from "src/app/pages/components/project-details-page/project-view/project-view.component";

export default {
  title: 'Component/Project Details',
  component: ProjectViewComponent,
  subcomponents: { ProjectViewComponent },

} as Meta;

const Template: Story<ProjectViewComponent> = (args: ProjectViewComponent) => ({
  component: ProjectViewComponent,
  moduleMetadata: {
    declarations: [ ProjectViewComponent ],
  },
  props: args,
});


export const ProjectDetails = Template.bind({});
ProjectDetails.args = {};
