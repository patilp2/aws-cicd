import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SearchComponent } from 'src/app/pages/components/explore-project-page/search/search.component';

export default {
  title: 'Component/Search',
  component: SearchComponent,

} as Meta;

const Template: Story<SearchComponent> = (args: SearchComponent) => ({
  component: SearchComponent,
  moduleMetadata: {
    declarations: [ SearchComponent ],
  },
  props: args,
});


export const Search = Template.bind({});
Search.args = {};
