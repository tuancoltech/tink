// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////////
import * as PrimitiveSet from './primitive_set';
import {Constructor} from './util';

/**
 * Basic interface for wrapping a primitive.
 *
 * A PrimitiveSet can be wrapped by a single primitive in order to fulfil a
 * cryptographic task. This is done by the PrimitiveWrapper. Whenever a new
 * primitive type is added to Tink, the user should define a new
 * PrimitiveWrapper and register it with the Registry.
 */
export interface PrimitiveWrapper<P> {
  /**
   * Wraps a PrimitiveSet and returns a single instance.
   *
   */
  wrap(primitiveSet: PrimitiveSet.PrimitiveSet<P>): P;

  /**
   * Returns the type of the managed primitive. Used for internal management.
   *
   */
  getPrimitiveType(): Constructor<P>;
}
