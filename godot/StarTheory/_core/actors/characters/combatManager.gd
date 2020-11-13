extends Node

# Component class of characters to enable combat. 

var character

var _orientation = 1 # 0: forward, 1: broadside, 2: aft

func get_orientation():
	return self._orientation

func _ready():
	pass

func init(character : Node):
	self.character = character
	
func tick_forward(delta):
	for module in self.character.inventory.get_modules():
		module.tick_forward(delta)
		print(module.display_name, delta)
	for crew_member in self.character.inventory.get_crew():
		crew_member.tick_forward(delta)
	# do things that occur with every tick of game time

func receive_damage(damage, damageType):
	self.character.ship.take_damage(damage, damageType)
