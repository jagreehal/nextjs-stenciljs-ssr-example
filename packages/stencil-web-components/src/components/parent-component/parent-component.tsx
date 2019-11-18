import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'parent-component',
  styleUrl: 'parent-component.css',
  scoped: true
})
export class MyComponent {
  @Prop() parentMessage: string;
  @Prop() childMessage: string;

  render() {
    return (
      <div>
        <div>Parent - {this.parentMessage}</div>
        <div>
          <child-component childMessage={this.childMessage} />
        </div>
      </div>
    );
  }
}
