package com.example.demo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController //handles incoming web request

public class MainController {

    //routing info  "/" = path should be mapped to the home() method.
    @RequestMapping("/")


    public String home(){ //home method is the caller
        return "Hello World!";
    }//end of String home



}
