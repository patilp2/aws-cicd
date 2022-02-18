import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from "src/app/pages/components/common/button/button.component";

export default {
  title: 'Component/Button',
  component: ButtonComponent,
  subcomponents: { ButtonComponent },

} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  moduleMetadata: {
    declarations: [ ButtonComponent ],
  },
  props: args,
});


export const Button = Template.bind({});
Button.args = {};
