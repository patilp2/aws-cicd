import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AdvertiseComponent } from "src/app/pages/components/common/advertise/advertise.component";

export default {
  title: 'Component/Advertise',
  component: AdvertiseComponent,

} as Meta;

const Template: Story<AdvertiseComponent> = (args: AdvertiseComponent) => ({
  component: AdvertiseComponent,
  moduleMetadata: {
    declarations: [ AdvertiseComponent ],
  },
  props: args,
});


export const Advertise = Template.bind({});
Advertise.args = {};
