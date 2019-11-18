import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'child-component',
  styleUrl: 'child-component.css',
  scoped: true
})
export class MyComponent {
  @Prop() childMessage: string;

  render() {
    return <div>Child - {this.childMessage} </div>;
  }
}
