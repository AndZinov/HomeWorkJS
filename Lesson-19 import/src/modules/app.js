// export class App{
//     run() {
//         document.body.textContent = 'Hello World'
//     }
// }

// // export {
// //     App
// // }

// export function createFunc() {
//     console.log('createFunc')
// }


//export

import {JSBlock} from './js-block';
import {TimerBlock} from './timer-block';
import {JS_CREATION_DATE} from '../core/constants/setting'

export default class App{
    #jsBlock
    #timerBlock

    constructor () {
        this.#jsBlock = new JSBlock();
        this.#timerBlock = new TimerBlock(JS_CREATION_DATE);
    }

    run() {
        const jsBlockHTML = this.#jsBlock.render()
        const timerBlockHTML = this.#timerBlock.render()
        document.body.append(jsBlockHTML, timerBlockHTML);
        }
    }