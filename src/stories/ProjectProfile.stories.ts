import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ProjectProfileComponent } from "src/app/pages/components/project-details-page/project-profile/project-profile.component";

export default {
  title: 'Component/Project Profile',
  component: ProjectProfileComponent,
  subcomponents: { ProjectProfileComponent },

} as Meta;

const Template: Story<ProjectProfileComponent> = (args: ProjectProfileComponent) => ({
  component: ProjectProfileComponent,
  moduleMetadata: {
    declarations: [ ProjectProfileComponent ],
  },
  props: args,
});


export const ProjectProfile = Template.bind({});
ProjectProfile.args = {};
