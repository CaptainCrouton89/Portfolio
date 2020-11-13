extends Node

var config

var _base_space
var _space

var _health
var _base_health

var _hull_armor
var _base_hull_armor

var _energy_shields
var _base_energy_shields



func _ready():
	pass

func take_damage(damage, damageType):
	self._health -= damage
	
func init(config):
	self.config = config
	self._base_space = config["space"]
	self._base_health = config["health"]
	self._base_hull_armor = config["hull_armor"]
	self._base_energy_shields = config["energy_shields"]

func reset():
	self._health = self._base_health
	self._hull_armor = self._base_hull_armor
	self.energy_shields = self._base_energy_shields
