import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MenuComponent } from "src/app/CommonPage/menu/menu.component";

export default {
  title: 'Component/Menu',
  component: MenuComponent,

} as Meta;

const Template: Story<MenuComponent> = (args: MenuComponent) => ({
  component: MenuComponent,
  moduleMetadata: {
    declarations: [ MenuComponent ],
  },
  props: args,
});


export const Menu = Template.bind({});
Menu.args = {};
