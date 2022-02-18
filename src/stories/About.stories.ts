import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AboutComponent } from "src/app/HomePage/about/about.component";

export default {
  title: 'Component/About',
  component: AboutComponent,

} as Meta;

const Template: Story<AboutComponent> = (args: AboutComponent) => ({
  component: AboutComponent,
  moduleMetadata: {
    declarations: [ AboutComponent ],
  },
  props: args,
});


export const About = Template.bind({});
About.args = {};
