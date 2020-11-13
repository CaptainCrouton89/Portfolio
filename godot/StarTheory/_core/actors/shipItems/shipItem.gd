extends Node

var type
var display_name
var description
var character

# Do NOT instantiate this. Instantiate the children classes.

# Can be cargo, modules, or crew. These are glorified dictionary items

func set_owner(character):
	self.character = character

func _ready():
	pass

func init(config):
	self.type = config["type"]
	self.display_name = config["name"]
	self.description = config["description"]
