import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SliderComponent } from "src/app/HomePage/slider/slider.component";

export default {
  title: 'Component/Slider',
  component: SliderComponent,

} as Meta;

const Template: Story<SliderComponent> = (args: SliderComponent) => ({
  component: SliderComponent,
  moduleMetadata: {
    declarations: [ SliderComponent ],
  },
  props: args,
});


export const Slider = Template.bind({});
Slider.args = {};
