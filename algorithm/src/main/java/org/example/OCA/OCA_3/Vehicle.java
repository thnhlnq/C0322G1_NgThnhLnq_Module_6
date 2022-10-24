package org.example.OCA.OCA_3;

public class Vehicle {
    String type = "4W";
    int maxSpeed = 100;

    Vehicle(String type, int maxSpeed) {
        this.type = type;
        this.maxSpeed = maxSpeed;
    }
}

//class Car extends Vehicle {
//    String trains;
//    Car(String trains) { // compilation fails
//        this.trains = trains;
//    }
//    Car(String type, int maxSpeed, String trains) {
//        super(type, maxSpeed);
//        this(trains); // compilation fails
//    }
//}
