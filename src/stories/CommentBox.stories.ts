import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CommentBoxComponent } from "src/app/pages/components/project-details-page/comment-box/comment-box.component";

export default {
  title: 'Component/Comment Box',
  component: CommentBoxComponent,

} as Meta;

const Template: Story<CommentBoxComponent> = (args: CommentBoxComponent) => ({
  component: CommentBoxComponent,
  moduleMetadata: {
    declarations: [ CommentBoxComponent ],
  },
  props: args,
});


export const CommentBox = Template.bind({});
CommentBox.args = {};
