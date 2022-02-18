import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { PageHeadImageComponent } from 'src/app/pages/components/explore-project-page/page-head-image/page-head-image.component';

export default {
  title: 'Component/Page Head Image',
  component: PageHeadImageComponent,
  subcomponents: { PageHeadImageComponent },

} as Meta;

const Template: Story<PageHeadImageComponent> = (args: PageHeadImageComponent) => ({
  component: PageHeadImageComponent,
  moduleMetadata: {
    declarations: [ PageHeadImageComponent ],
  },
  props: args,
});


export const PageHeadImage = Template.bind({});
PageHeadImage.args = {};
