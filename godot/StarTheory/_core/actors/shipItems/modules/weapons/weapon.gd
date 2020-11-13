extends "res://_core/actors/shipItems/modules/module.gd"

# Constant Stats
var mounting
var damage_type
var damage
var reach
var skills

var target # Must be a character 

func _ready():
	pass

func init(config):
	.init(config)
	self.mounting = config["mounting"]
	self.damage_type = config["damage_type"]
	self.damage = config["damage"]
	self.reach = config["reach"]
	self.skills = config["skills"]

func action_occurs(crewMember, target):
	.action_occurs(crewMember, target)
	var damage = self.damage * crewMember.potency
	target.combat_manager.receive_damage(damage, self.damage_type)
	
func is_ready():
	if .is_ready():
		var orientation = self.character.combat_manager.get_orientation()
		if orientation == 2:
			return false
		if orientation == 0 && self.mounting == 1:
			return false
		return true
	return false
	
func is_in_use() -> bool:
	return .is_in_use()
		
