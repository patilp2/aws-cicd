import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { LoginFormComponent } from 'src/app/pages/components/login-page/login-form/login-form.component';

export default {
  title: 'Component/Login Form',
  component: LoginFormComponent,

} as Meta;

const Template: Story<LoginFormComponent> = (args: LoginFormComponent) => ({
  component: LoginFormComponent,
  moduleMetadata: {
    declarations: [ LoginFormComponent ],
  },
  props: args,
});


export const LoginForm = Template.bind({});
LoginForm.args = {};
