import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TalkComponent } from "src/app/HomePage/talk/talk.component";

export default {
  title: 'Component/Talk',
  component: TalkComponent,

} as Meta;

const Template: Story<TalkComponent> = (args: TalkComponent) => ({
  component: TalkComponent,
  moduleMetadata: {
    declarations: [ TalkComponent ],
  },
  props: args,
});


export const Talk = Template.bind({});
Talk.args = {};
