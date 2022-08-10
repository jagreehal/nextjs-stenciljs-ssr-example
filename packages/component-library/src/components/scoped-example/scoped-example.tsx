import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "scoped-example",
  styleUrl: "scoped-example.css",
  scoped: true
})
export class ScopedExample {
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
