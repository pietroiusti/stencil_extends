import { AttachInternals, Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'base-comp',
  styleUrl: 'base-comp.css',
  shadow: true,
  formAssociated: true,
})
export class BaseComp {
  @AttachInternals() internals: ElementInternals;
  @Prop() value = '';

  render() {
    return <input value={this.value} />;
  }
}
