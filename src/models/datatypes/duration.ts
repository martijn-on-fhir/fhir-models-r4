import { Quantity } from './quantity.js';

/** FHIR R4 Duration — A length of time. */
export class Duration extends Quantity {
  /** Creates a new Duration. @param props - Initial values. */
  constructor(props?: Partial<Duration>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
