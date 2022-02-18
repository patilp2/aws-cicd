import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ProjectTagsComponent } from "src/app/pages/components/project-details-page/project-tags/project-tags.component";

export default {
  title: 'Component/Project Tags',
  component: ProjectTagsComponent,
  subcomponents: { ProjectTagsComponent },

} as Meta;

const Template: Story<ProjectTagsComponent> = (args: ProjectTagsComponent) => ({
  component: ProjectTagsComponent,
  moduleMetadata: {
    declarations: [ ProjectTagsComponent ],
  },
  props: args,
});


export const ProjectTags = Template.bind({});
ProjectTags.args = {};
