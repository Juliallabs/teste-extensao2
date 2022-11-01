namespace ELETROBLOCKS {
    export function leituraAN(sensor: number): number {
        return pins.analogReadPin(AnalogPin.P0)
    }
}
