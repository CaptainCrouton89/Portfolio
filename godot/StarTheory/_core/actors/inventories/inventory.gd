extends Node

var contents

onready var _moduleInventory = $moduleInventory
onready var _cargoInventory = $cargoInventory
onready var _crewInventory = $crewInventory

const Weapon = preload("res://_core/actors/shipItems/modules/weapons/weapon.tscn")

func _ready():
	pass

func add(item):
	if item.type == "module":
		self._moduleInventory.add(item)
	if item.type == "cargo":
		self._cargoInventory.add(item)
	if item.type == "crew":
		self._crewInventory.add(item)

func get_modules() -> Array:
	return _moduleInventory.get_contents()
	
func get_cargo():
	pass
	
func get_crew() -> Array:
	return _crewInventory.get_contents()
