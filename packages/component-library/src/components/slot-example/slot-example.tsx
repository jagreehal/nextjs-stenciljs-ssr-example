import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "slot-example",
})
export class SlotExample {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        <div>Above the slot</div>
        <slot />
        <div>Below the slot</div>
      </div>
    );
  }
}
