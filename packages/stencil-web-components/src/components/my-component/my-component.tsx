import { Component, Prop, h, Event, EventEmitter, State } from "@stencil/core";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  scoped: true,
  shadow: false,
})
export class MyComponent {
  /**
   * The first name (doc from the component)
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The lastish name
   */
  @Prop() last: string;

  /**
   * The count value
   */
  @Prop() count?: number = 0;

  @State() counter: number = this.count || 0;
  @State() date: Date = new Date();

  @Event() event: EventEmitter<number>;

  private timerID: NodeJS.Timeout;

  buttonHandler() {
    this.counter++;
    this.event.emit(this.counter);
  }

  tick() {
    console.log("update", this.date);
    this.date = new Date();
  }

  private getText(): string {
    return `${this.first}, ${this.middle}, ${this.last}`;
  }

  componentWillLoad() {
    console.log("is about to be rendered");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidLoad() {
    console.log("has been rendered");
  }

  componentWillUpdate() {
    console.log("will update");
  }

  componentDidUpdate() {
    console.log("did update");
  }

  componentDidUnload() {
    console.log("has been removed from the DOM");
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div class="message">
        Hello, World! I'm {this.getText()} - Initial Count={this.count} -
        Component Count={this.counter}
        <button onClick={() => this.buttonHandler()}>+</button>
        <hr />
        <div>Date - {this.date.toLocaleTimeString()}</div>
        <div>
          <slot />
        </div>
      </div>
    );
  }
}
