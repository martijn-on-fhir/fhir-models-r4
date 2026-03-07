import { Quantity } from './quantity.js';

/** FHIR R4 Age — A duration of time during which an organism (or a process) has existed, expressed as a Quantity. */
export class Age extends Quantity {
  /** Creates a new Age. @param props - Initial values. */
  constructor(props?: Partial<Age>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
