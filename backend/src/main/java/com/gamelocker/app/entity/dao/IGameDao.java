package com.gamelocker.app.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.gamelocker.app.entity.model.Game;

public interface IGameDao extends CrudRepository<Game, Long>{

}
