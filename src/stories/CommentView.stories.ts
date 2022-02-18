import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CommentViewComponent } from "src/app/pages/components/project-details-page/comment-view/comment-view.component";

export default {
  title: 'Component/Comment View',
  component: CommentViewComponent,

} as Meta;

const Template: Story<CommentViewComponent> = (args: CommentViewComponent) => ({
  component: CommentViewComponent,
  moduleMetadata: {
    declarations: [ CommentViewComponent ],
  },
  props: args,
});


export const CommentView = Template.bind({});
CommentView.args = {};
