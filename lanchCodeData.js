// these funtions ans classes will allow the daate on the table to update evey 5 seconds

class InputData{
    constructor(
        time_seconds,
        latitdiude,
        longitude,
        gps_altitude,
        bmp_alititude,
        bmpsensor_pressure,
        bmpsensor_temp,
        digsensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVDC,
        UV,
        accelx,
        accelY,
        accelZ,
        magmeticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,

    ){
        this.time_seconds=time_seconds;
        this.latitdiude=latitdiude;
        this.longitude=longitude;
        this.gps_altitude=gps_altitude;
        this.bmp_alititude=bmp_alititude;
        this.bmpsensor_pressure=bmpsensor_pressure;
        this.bmpsensor_temp=bmpsensor_temp;
        this.digsensor_temp=digsensor_temp;
        this.cssSensor_temp=cssSensor_temp;
        this.cssSensor_eCO2=cssSensor_eCO2;
        this.cssSensor_TVDC=cssSensor_TVDC;
        this.UV=UV;
        this.accelx=accelx;
        this.accelY=accelY;
        this.accelZ=accelZ;
        this.magmeticX=magmeticX;
        this.magneticY=magneticY;
        this.magneticZ=magneticZ;
        this.gyroX=gyroX;
        this.gyroY=gyroY;
        this.gyroZ=gyroZ;
    }

    }
    function updateDisplay(){
        theTime = new Date();
        console .log("The time is:" + theTime.getHours() + "t" +
         (theTime.getMinutes() <10 ? "0" + theTime : theTime.getMinutes() 
         + "i"+ (theTime.getSeconds()<10 ? "0" + theTime.getSeconds():theTime.getSeconds()) ));
    }