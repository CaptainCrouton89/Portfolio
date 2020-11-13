extends Node


const _Weapon = preload("res://_core/actors/shipItems/modules/weapons/weapon.tscn")
const _Ship = preload("res://_core/actors/ships/ship.tscn")
const _Crew = preload("res://_core/actors/shipItems/crewMembers/crewMember.tscn")

const _Stats = preload("res://_core/actors/characters/characterStats.tscn")

const Hotbar = preload("res://_core/actors/inventories/hotbar.tscn")
const _CombatManager = preload("res://_core/actors/characters/combatManager.tscn")


onready var inventory = $inventory
var ship = _Ship.instance()
var stats = _Stats.instance()
var combat_manager = _CombatManager.instance()

var module_hotbars = {
					"F": Hotbar.instance(), 
					"R": Hotbar.instance(),
					"V": Hotbar.instance()
					}
					
var crew_hotbar = Hotbar.instance()

func _ready():
	self.test_add_modules_crew()
	self.test_add_ship()
	self.combat_manager.init(self)
	for module in self.inventory.get_modules():
		print(module.display_name)
	pass
	
func init():
	print(get_children()) # No children at run time!
	print("Player inventory: ", self.inventory)
	
func test_add_ship():
	var stingray_config = Cache.get_dict_with_name("Stingray", "ships")
	self.ship = ship.init(stingray_config)

func test_add_modules_crew():
	var starting_weapon_configs = [
		Cache.get_dict_with_name("Whistler", "weapons"),
		Cache.get_dict_with_name("Johnston J-Beam", "weapons"),
		Cache.get_dict_with_name("Tambourine", "weapons")
	]
	for config in starting_weapon_configs:
		var weapon = _Weapon.instance()
		weapon.init(config)
		weapon.set_owner(self)
		self.add_module_to_inventory(weapon, "F", "Q")
	
	var starting_crew_configs = [
		{"name": "Hubert", "type": "crew", "description": "nothing", "speed": 1.5, "potency": .5}
	]
	for config in starting_crew_configs:
		var crew = _Crew.instance()
		crew.init(config)
		crew.set_owner(self)
		self.add_crewMember_to_inventory(crew, "I")

func add_crewMember_to_inventory(crew, key : String):
	self.inventory.add(crew)
	self.crew_hotbar.add(crew, key)
	print("crew contents: ", self.crew_hotbar.getContents())

func add_module_to_inventory(module, hotbar : String, key : String):
	self.inventory.add(module)
	add_module_to_hotbar(module, hotbar, key)
	print("module contents: ", self.module_hotbars[hotbar].getContents())

func add_module_to_hotbar(module, hotbar : String, hotbarKey : String):
	self.module_hotbars[hotbar].add(module, hotbarKey)
	

func get_module_with_key(hotbar : String, key : String):
	print("hotbar: ", hotbar, ", key: ", key)
	return self.module_hotbars[hotbar].get_entity_at(key)
	
func get_crew_with_key(key : String):
	return self.crew_hotbar.get_entity_at(key)
