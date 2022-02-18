import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FooterComponent } from "src/app/HomePage/footer/footer.component";

export default {
  title: 'Component/Footer',
  component: FooterComponent,

} as Meta;

const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  component: FooterComponent,
  moduleMetadata: {
    declarations: [ FooterComponent ],
  },
  props: args,
});


export const Footer = Template.bind({});
Footer.args = {};
