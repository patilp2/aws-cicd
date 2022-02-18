import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { JuryPanelComponent } from "src/app/HomePage/jury-panel/jury-panel.component";

export default {
  title: 'Component/Jury Panel',
  component: JuryPanelComponent,

} as Meta;

const Template: Story<JuryPanelComponent> = (args: JuryPanelComponent) => ({
  component: JuryPanelComponent,
  moduleMetadata: {
    declarations: [ JuryPanelComponent ],
  },
  props: args,
});


export const JuryPanel = Template.bind({});
JuryPanel.args = {};
