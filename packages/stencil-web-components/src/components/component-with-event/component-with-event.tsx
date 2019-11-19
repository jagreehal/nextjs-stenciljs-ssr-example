import { Component, State, Prop, Event, EventEmitter, h } from "@stencil/core";

@Component({
  tag: "component-with-event",
  styleUrl: "component-with-event.css",
  shadow: true
})
export class ComponentWithEvent {
  @Event({ eventName: "new-message" }) newMessage: EventEmitter<string>;

  @Prop() message: string = "";
  @State() greeting: string = "Hello";

  handleClick = () => {
    this.newMessage.emit(`${this.greeting} ${this.message}`);
  };

  render() {
    return (
      <div>
        <label>Greeting</label>
        <input
          class="mb-shadow-4"
          type="text"
          onChange={(e: any) => (this.greeting = e.target.value)}
          value={this.greeting}
        ></input>
        <h2 class="mb-shadow-4">
          Greeting message will be {this.greeting} {this.message}
        </h2>
        <button onClick={this.handleClick}>Announce</button>
      </div>
    );
  }
}
