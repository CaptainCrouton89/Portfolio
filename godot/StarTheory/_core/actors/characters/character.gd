extends Node

const Weapon = preload("res://_core/actors/shipItems/modules/weapons/weapon.tscn")
const _Stats = preload("res://_core/actors/characters/characterStats.tscn")
const _CombatManager = preload("res://_core/actors/characters/combatManager.tscn")
const _Ship = preload("res://_core/actors/ships/ship.tscn")

onready var inventory = $inventory
var ship = _Ship.instance()
var stats = _Stats.instance()
var combat_manager = _CombatManager.instance()

# Called when the node enters the scene tree for the first time.
func _ready():
	self.combat_manager.init(self)
	self.test_add_ship()
	print("character instanced")
	
func test_add_ship():
	var stingray_config = Cache.get_dict_with_name("Stingray", "ships")
	self.ship = ship.init(stingray_config)

func random_init():
	pass

# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass

func add_module_to_inventory(module):
	self.inventory.add(module)
	
func move_to(location):
	self._Stats.set_location(location)
