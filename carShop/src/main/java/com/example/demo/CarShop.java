package com.example.demo;

import com.example.demo.domain.CarRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.example.demo.domain.CarInfo;
import com.example.demo.domain.CarRepository;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CarShop {
    private static final Logger log = LoggerFactory.getLogger(CarShop.class);
    public static void main(String[] args) {
        SpringApplication.run(CarShop.class, args);
    }

    @Bean
    public CommandLineRunner demo(CarRepository repository){
        return args ->{
            //create car info
            repository.save(new CarInfo("Honda", "Civic", 2019, "Coupe" ) );
            repository.save(new CarInfo("Toyota", "Corolla", 2020, "Sedan"));
            repository.save(new CarInfo("Land Rover","Range Rover", 2020, "SUV"));
            repository.save(new CarInfo("Nissan", "Rogue", 2019, "SUV"));
            repository.save(new CarInfo("Maserati", "Ghibli", 2019, "Sedan"));
            repository.save(new CarInfo("Hyundai", "Elantra", 2019, "Sedan"));


            log.info("Car found with findAll() : ");
            log.info("---------------------------------");
            for(CarInfo car : repository.findAll()) {
                log.info(car.toString());
            }
            log.info("");


            repository.findById(1L)
                    .ifPresent(car -> {
                        log.info("Car found with findByYear(1L) : ");
                        log.info("-----------------------------------");
                        log.info(car.toString());
                        log.info("");
                    });


            log.info("Car found with findByModel('Charger') : ");
            log.info("----------------------------------");
            repository .findByModel("Charger").forEach(bauer -> {
                log.info(bauer.toString());
            });
        };
    }

}
