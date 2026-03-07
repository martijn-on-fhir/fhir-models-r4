import { Quantity } from './quantity.js';

/** FHIR R4 Count — A measured amount (or an amount that can potentially be measured) using a whole number for the count. */
export class Count extends Quantity {
  /** Creates a new Count. @param props - Initial values. */
  constructor(props?: Partial<Count>) {
    super();

    if (props) {
      Object.assign(this, props);
    }
  }
}
