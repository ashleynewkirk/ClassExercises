package com.example.demo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CarInfo {

    public CarInfo(String make, String model, Integer year, String door) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.door = door;

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private Integer year;
    private String make;
    private String model;
    private String door;


    @Override
    public String toString() {
        return "CarInfo{" +
                "Id=" + Id +
                ", year=" + year +
                ", make='" + make + '\'' +
                ", model='" + model + '\'' +
                ", door='" + door + '\'' +
                '}';
    }



}
