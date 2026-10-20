import { Component, Prop } from '@stencil/core';
import { BaseComp } from '../base-comp/base-comp';

@Component({
  tag: 'derived-comp',
  styleUrl: 'derived-comp.css',
  shadow: true,
  formAssociated: true,
})
export class DerivedComp extends BaseComp {
  @Prop() value = '';
}
