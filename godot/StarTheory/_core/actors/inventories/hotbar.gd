extends Node

var contents = {
			'Q': null,
			'W': null,
			'E': null,
			'A': null,
			'S': null,
			'D': null,
			'Z': null,
			'X': null,
			'C': null,
			}

func _ready():
	pass
	
func add(entity, key):
	self.contents[key] = entity

func remove(key):
	self.contents[key] = null

func get_entity_at(key):
	if key in self.contents.keys():
		return self.contents[key]
	else:
		return null

func getContents():
	return self.contents
