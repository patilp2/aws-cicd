import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { HeaderComponent } from "src/app/CommonPage/header/header.component";

export default {
  title: 'Component/Header',
  component: HeaderComponent,

} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  moduleMetadata: {
    declarations: [ HeaderComponent ],
  },
  props: args,
});


export const Header = Template.bind({});
Header.args = {};
