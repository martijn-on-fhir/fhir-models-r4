import { Quantity } from './quantity.js';

/** FHIR R4 Distance — A length, a value that is measured along a path of linear distance. */
export class Distance extends Quantity {
  /** Creates a new Distance. @param props - Initial values. */
  constructor(props?: Partial<Distance>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
