import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "slot-shadow-example",
  styleUrl: "slot-shadow-example.css",
  shadow: true
})
export class SlotShadowExample {
  render() {
    return (
      <Host>
        <div class="text">Above the slot</div>
        <slot />
        <div class="text">Below the slot</div>
      </Host>
    );
  }
}
