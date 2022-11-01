namespace ELETROBLOCKS {
/**
 * Functions to read eletroblocks sensord.
 */
    //% blockId=leituraeletroblocks
    export function leituraAN(sensor: number): number {
        return pins.analogReadPin(AnalogPin.P0)
    }
}
