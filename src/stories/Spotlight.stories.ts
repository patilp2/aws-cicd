import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SpotlightComponent } from "src/app/HomePage/spotlight/spotlight.component";
import { SpotlightReviewComponent } from "src/app/HomePage/spotlight-review/spotlight-review.component";

export default {
  title: 'Component/Spotlight',
  component: SpotlightComponent,
  subcomponents: { SpotlightComponent, SpotlightReviewComponent },

} as Meta;

const Template: Story<SpotlightComponent> = (args: SpotlightComponent) => ({
  component: SpotlightComponent,
  moduleMetadata: {
    declarations: [ SpotlightComponent, SpotlightReviewComponent ],
  },
  props: args,
});


export const Spotlight = Template.bind({});
Spotlight.args = {};
