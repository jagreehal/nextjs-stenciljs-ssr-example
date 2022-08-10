import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "slot-scoped-example",
  styleUrl: "slot-scoped-example.css",
  scoped: true
})
export class SlotScopedExample {
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
