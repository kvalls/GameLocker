package com.gamelocker.app.entity.service;

import java.util.List;

import com.gamelocker.app.entity.model.Game;

public interface IGameService {
	public List<Game> getAll();
	public Game get(long id);
	public void post(Game game);
	public void put(Game game, long id);
	public void delete(long id);
}
