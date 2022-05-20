package com.mc.main.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/portal")
public class PortalController {
	
	@RequestMapping(method = RequestMethod.GET, path = "/greetings")
	public String greet() {
		return "[API]: Hello World";
	} 

}
