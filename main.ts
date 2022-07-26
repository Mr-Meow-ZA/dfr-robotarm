/**
 * The user can select the 8 steering gear controller.
 */
enum Servos {
    S1 = 0x08,
    S2 = 0x07,
    S3 = 0x06,
    S4 = 0x05,
    S5 = 0x04,
    S6 = 0x03,
    S7 = 0x02,
    S8 = 0x01
}


//% weight=100 block="dfrobo"
namespace dfrobotarm
{

//% block="move %servoNum by %pos with min %min and max %max"
export function incServoByDeg(servoNum: Servos, pos: number, min: number, max: number): void{
    
    if(pos>max){
        pos=max;
    }
    if (pos<min){
        pos=min;
    }
    motor.servo(servoNum, pos)

}
//% block="set servo %spos to degree %snum with min %minpos and max %maxpos"
export function incServo(snum: Servos, spos: number, minpos: number, maxpos: number): void{
    
    spos = getServoPos(snum)+spos
    
    if(spos>maxpos){
        spos = maxpos
    }
    if(spos<minpos){
        spos = minpos
    }

    motor.servo(snum,spos)
}

//% block="get servo position for %ser"
export function getServoPos(ser:Servos):number{

    let val = pins.i2cReadNumber(ser, NumberFormat.UInt8BE);
    return(val)

}

}