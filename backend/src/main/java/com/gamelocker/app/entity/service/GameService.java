package com.gamelocker.app.entity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamelocker.app.entity.dao.IGameDao;
import com.gamelocker.app.entity.model.Game;

@Service
public class GameService implements IGameService{
	
	@Autowired
	IGameDao gameDao;

	@Override
	public List<Game> getAll() {
		return (List<Game>) gameDao.findAll();
	}

	@Override
	public Game get(long id) {
		return gameDao.findById(id).get();
	}

	@Override
	public void post(Game game) {
		gameDao.save(game);
	}
	
	@Override
	public void put(Game game, long id) {
		gameDao.findById(id).ifPresent((x)->{
			game.setId(id);
			gameDao.save(game);
		});
	}
	
	@Override
	public void delete(long id) {
		gameDao.deleteById(id);
	}

}
