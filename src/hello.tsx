import * as React from "react";

interface Props {
  content: string;
}

export default class MyComponent extends React.Component<Props> {
  render() {
    return <div>{this.props.content}</div>;
  }
}
