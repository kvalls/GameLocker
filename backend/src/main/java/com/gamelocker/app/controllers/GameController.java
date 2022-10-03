package com.gamelocker.app.controllers;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.gamelocker.app.entity.model.Game;
import com.gamelocker.app.entity.service.IGameService;

@RestController
@CrossOrigin(origins = "*")
public class GameController {
	
	@Autowired
	IGameService gameService;

	@GetMapping("/games")
	public List<Game> getAll() {
		return gameService.getAll();
	}
	
	@GetMapping("/games/{id}")
	public Game getOne(@PathVariable(value = "id") long id) {
		return gameService.get(id);
	}
	
	@PostMapping("/games")
	public void post(@RequestBody Game game) {
		gameService.post(game);
	}
	
	@PutMapping("/games/{id}")
	public void put(@RequestBody Game game, @PathVariable(value = "id") long id) {
		gameService.put(game, id);
	}
	
	@DeleteMapping("/games/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		gameService.delete(id);
	}
}
