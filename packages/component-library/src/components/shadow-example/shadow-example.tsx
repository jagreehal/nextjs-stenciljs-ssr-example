import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "shadow-example",
  styleUrl: "shadow-example.css",
  shadow: true
})
export class ShadowExample {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div class="text">
        Hello, my name is {this.first} {this.last}
      </div>
    );
  }
}
