import {Component, OnInit} from '@angular/core';
import eufa from 'eufa';
import base64 from 'base-64';

@Component({
    selector: 'app-eufa-demo',
    templateUrl: './eufa-demo.component.html',
    styleUrls: ['./eufa-demo.component.scss'],
})
export class EufaDemoComponent implements OnInit {

    constructor() {
    }

    private wasmHasBeenLoaded = false;
    private javascriptMilliseconds = Infinity;
    private wasmMilliseconds = Infinity;

    ngOnInit() {
        const init = eufa.init('assets/wasm/eufa/eufa-module.wasm', () => {
            this.wasmHasBeenLoaded = true;
            const testString = 'Lets encode this text using both javascript and webassembly and see how it does';

            // Javascript test first
            let startTime = new Date().getTime();
            for (let i = 0; i < 1000; i++) {
                base64.encode(testString);
            }
            let endTime = new Date().getTime();
            let difference = endTime - startTime;
            this.javascriptMilliseconds = Math.floor(difference % (1000 * 60)) / 100;

            // WASM Test
            startTime = new Date().getTime();
            for (let i = 0; i < 1000; i++) {
                eufa.Encryptor.base64_encode(testString);
            }

            endTime = new Date().getTime();
            difference = endTime - startTime;
            this.wasmMilliseconds = Math.floor(difference % (1000 * 60)) / 100;
        });
    }

}
